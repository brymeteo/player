function setIdCookie(cookieIdColl,cookieIdProd) {
    let cookieDataEl = document.querySelector('.cookie-policy');        
    let cookieFn;

    if (window.location.href.indexOf('sky.it') > -1 && window.location.href.indexOf('collcms.www.sky.it') == -1) {
        console.log("callmenow prod");
        cookieDataEl.setAttribute("onclick","function");
        cookieFn = "window['_sp_'] && window['_sp_'].loadPrivacyManagerModal('" + cookieIdProd + "');"
        cookieDataEl.setAttribute("onclick",cookieFn); 
    } else {
        console.log("callmenow collaudo");
        cookieDataEl.setAttribute("onclick","function");
        cookieFn = "window['_sp_'] && window['_sp_'].loadPrivacyManagerModal('" + cookieIdColl + "');"
        cookieDataEl.setAttribute("onclick",cookieFn);
    }
}

window.addEventListener('DOMContentLoaded', (event) => {    
	let todayDate = new Date().getTime();
	let todayHour = new Date().getHours();
	let endDate = "12/15/2021"
	let endDateCountdown = new Date(endDate).getTime();
	let prodId = "409678"	
	if(todayDate >= endDateCountdown && todayHour >= 9) {
		prodId = "581454";		
	}
	console.log('id', prodId)
    setIdCookie("581437",prodId); //id collaudo, id prod
});