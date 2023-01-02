const dynamicContentCampaignInit = () => {	
	if (typeof GetUrlVar('campaign') != 'undefined') {
		let path = window.location.pathname;
		let page = path.split("/").pop();
		page = page.replace('.html', '');
		
		path = path.replace('.html', '').toLowerCase()
		const jsonValue = GetUrlVar('campaign');
		const xmlhttp = new XMLHttpRequest();

        let url = '';
        if(path.includes('landing-new/sky-glass/')) {
            console.log('glass')
            url = `/content/dam/skyit/ext/mcs/landing-new/sky-glass/abbonarsi/campaign_numbers/campaign_numbers_skyglass.json`;
        } else {            
            console.log('abbonarsi')
            url = `/content/dam/skyit/ext/mcs/landing-new/abbonarsi/prospect_campaign_numbers/campaign_numbers.json`;
        }
		
		console.log('path',path.includes('landing-new/sky-glass/'))
		
		xmlhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				const jsonArr = JSON.parse(this.responseText);

				for (const [key, value] of Object.entries(jsonArr)) {
					if (jsonValue == key) {
						// console.log('key: ', key, 'value:', value.formTitle );

						if (value.tel_number) {									
							let c2cButton = document.querySelector('.j-clicca-chiamaci')
							c2cButton.href= `tel:${value.tel_number}`
						}
	
					}
				}
			}
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}
	
}

window.addEventListener('DOMContentLoaded', (event) => {
	dynamicContentCampaignInit()
});