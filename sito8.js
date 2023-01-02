const initDatalayerElement = () => {
    Array.from(document.querySelectorAll('[data-intcmp]')).forEach(ln => {
        ln.addEventListener('click', () => {
            sessionStorage.setItem('intcmp', ln.dataset.intcmp);
        });
    });
};
window.onload = initDatalayerElement;

const datalayer = window.digitalData;
if (datalayer) {
    const sessionIntCmp = sessionStorage.getItem('intcmp') ? sessionStorage.getItem('intcmp') : '';

    // Setting property intcmp
    datalayer.page.category.intcmp = `${sessionIntCmp}`;

    // clean session storage after set in datalayer
    sessionStorage.removeItem('intcmp');
}
console.log("Digital Data library loaded");
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return false;
}

function isLoggedUser() {
    return (getCookie("PETERWITT") && getCookie("PETERWITT") != "");
}

function isClient() {
    return (getCookie("ext") && getCookie("ext") != "");
}

function hasReskyC() {
    return (getCookie("RESKYC") && getCookie("RESKYC") != "");
}

function isGuest() {
    return (!isLoggedUser() && !isClient());
}

function isProspect() {
    if (isLoggedUser() && hasReskyC()) {
        return getCookie("RESKYC") == "P";
    } else {
        return (isLoggedUser() && !isClient());
    }
}

function isLoggedAndKnownClient() {
    return (isClient() && isLoggedUser());
}

function isJustKnownClient() {
    return (isClient() && !isLoggedUser());
}

function isParco() {
    if (isLoggedUser() && hasReskyC()) {
        return getCookie("RESKYC") == "C";
    } else {
        return isClient();
    }
}

function getUserType(stringResponse, recognitionType) {
    if (stringResponse == undefined || stringResponse) {
        if (recognitionType == undefined || !recognitionType) {
            if (isGuest()) {
                return "guest";
            }
            if (isProspect()) {
                return "loggedbutnotclient";
            }
            if (isLoggedAndKnownClient()) {
                return "loggedandknownclient";
            }
            if (isJustKnownClient()) {
                return "knownclient";
            }
        } else {
            if (isParco()) {
                return "parco";
            } else if (isProspect()) {
                return "prospect";
            } else {
                return "notparconotprospect";
            }
        }
    } else {
        if (!recognitionType || recognitionType == undefined) {
            if (isGuest()) {
                return 0;
            }
            if (isProspect()) {
                return 1;
            }
            if (isLoggedAndKnownClient()) {
                return 3;
            }
            if (isJustKnownClient()) {
                return 2;
            }
        } else {
            if (isParco()) {
                return 4;
            } else if (isProspect()) {
                return 5;
            } else {
                return 6;
            }
        }
    }
}
function getCurrentSite() {
    return window.location.protocol + "//" + window.location.host
}

function getForwardValue() {
    const urlParams = new URLSearchParams(window.location.search);
    const forward = urlParams.get('forward');
    return forward ? '?forward=' + forward : '';
}

function getRegistratiForward() {
    let forward = getForwardValue();
    if (!forward || forward.length === 0) {
        forward = '?forward=https://www.sky.it';
    }
    return forward;
}

function redirectTo(url, blank) {
    if (url) {
        let href = getHostName(decodeURIComponent(url)) == null ? getCurrentSite()
                + checkRelativeUrl(decodeURIComponent(url)) : decodeURIComponent(url);
        blank = blank ? '_blank' : '_self';

        window.open(href, blank);
    } else {
        window.location.href = getCurrentSite();
    }
}

function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        return match[2];
    } else {
        return null;
    }
}

function checkRelativeUrl(uri) {
    if (uri) {
        uri = uri.charAt(0) == "/" ? uri : "/" + uri;
        return uri;
    }
}

function getUrlParameter(name, url) {
    if (!url)
        url = location.href;
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    return results == null ? null : results[1];
}

function checkValidRedirectQueryParam(forward) {
    let url;
    try {
        url = new URL(decodeURIComponent(forward));
    } catch (e) {
        return false;
    }

    if ((url.protocol != "https:" && url.protocol != "http:") || !url.hostname.endsWith(".sky.it")) {
        return false
    }

    return true;
}

class TokenManager {
    constructor(selectedContractMaxDurationDays = 5) {
        this.selectedContractMaxDurationDays = selectedContractMaxDurationDays;
        this.cookieName = 'SC';
    }
    setSelectedContract(contractId) {
        const date = new Date();
        date.setTime(date.getTime() +
            this.selectedContractMaxDurationDays * 24 * 60 * 60 * 1000);
        document.cookie = `${this.cookieName}=${contractId}; expires=${date.toUTCString()}; domain=.sky.it; path=/`;
    }
    getSelectedContract() {
        var _a;
        const name = `${this.cookieName}=`;
        const cDecoded = decodeURIComponent(document.cookie);
        const cArr = cDecoded.split('; ');
        const res = (_a = cArr
            .find((val) => val.indexOf(name) === 0)) === null || _a === void 0 ? void 0 : _a.substring(name.length);
        return res || null;
    }
}

class User {
constructor(user){
this.personalData = new PersonalData(user);
//this.logStatus = user.loginStatus;
this.userType = user.customer;
this.contracts = user.contractcode ? [new Contract(user.contractcode,"",true)] : [];

}
}

class Contract {
constructor(code,name,selected){
this.contractCode = code;
this.contractName = name;
this.selected = selected;
}
}

class PersonalData {
constructor(data){
this.name = data.name;
this.surname = data.surname;
this.email = data.email;
this.username = data.username;
this.imageUrl = data.profileimg;
}
}

const key = "userData";
const keyNext = "skyit_userdata";

async function getUser(){
if(getCookie("PETERWITT")){
if(!sessionStorage.getItem(key)){
/* let data = await fetch( wscApiBaseUrl + "/wscrest/loginServices/loginBoxInfo",{method: "POST",credentials: 'include'})
.then(res => res.json())
.then(json => {return json.response}); */
let customer = await fetch( userApiBaseUrl + "/ReSky/data.do",{credentials: 'include'})
.then(res => res.json())
.then(json => {return json});
let user;
if(customer && customer.email){
user = new User(customer);
}
sessionStorage.setItem(key,JSON.stringify(user));
}
} else {
clearUserData();

}
}

function clearUserData(){
sessionStorage.removeItem(key);
sessionStorage.removeItem(keyNext);
removeContractData();
}

function removeContractData(){
    for(let i=0;i<sessionStorage.length;i++){
        if(sessionStorage.key(i).startsWith("me-")){
            sessionStorage.removeItem(Object.keys(sessionStorage)[i]);
        }
    }
    sessionStorage.removeItem("contact");
    sessionStorage.removeItem("contractAddressEgonIds");
}

async function retrieveUserData(){
await getUser();
return sessionStorage.getItem(key);
}

function reSkyLogout(){
fetch( userApiBaseUrl + "/ReSky/logout.do?t=P&page=" + window.location.host + window.location.pathname,{credentials: 'include'})
.then(r => {
clearUserData();
window.location.reload();
})
}

var tmCookieLib = new TokenManager();