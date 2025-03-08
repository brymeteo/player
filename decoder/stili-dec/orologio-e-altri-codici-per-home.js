 function delayPageDisplay(){setTimeout(function(){document.getElementById('overlay').style.display='none';document.getElementById('content').style.display='block'},100)}window.onload=delayPageDisplay;
   
 document.addEventListener('DOMContentLoaded',function(){var canaliButton=document.getElementById('canali-button');if(canaliButton){canaliButton.click()}});function updateMenuTitle(button){const title=button.getAttribute('data-title');const menuTitle=document.getElementById('menu-title');menuTitle.textContent=title}

    document.addEventListener('DOMContentLoaded',function(){const sidebar=document.getElementById('sidebar');const scrollToTopButton=document.getElementById('scroll-to-top');function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'})}window.addEventListener('scroll',function(){if(window.scrollY>200){scrollToTopButton.style.display='block'}else{scrollToTopButton.style.display='none'}});scrollToTopButton.addEventListener('click',scrollToTop)});

    var clickCount={};function toggleContent(contentId,element){if(!clickCount[element]){clickCount[element]=0}clickCount[element]++;if(clickCount[element]===1){return}var content=document.getElementById(contentId);if(content.style.display==='none'){content.style.display='block'}else{content.style.display='none'}}document.querySelectorAll('.menu-item').forEach(function(item){item.addEventListener('click',function(){var contentId=this.getAttribute('data-target');toggleContent(contentId,this)})});




function updateTime(){var now=new Date();var daysOfWeek=["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"];var dayOfWeek=daysOfWeek[now.getDay()];var dayOfMonth=now.getDate();dayOfMonth=dayOfMonth<10?'0'+dayOfMonth:dayOfMonth;var hours=now.getHours();var minutes=now.getMinutes();hours=hours<10?'0'+hours:hours;minutes=minutes<10?'0'+minutes:minutes;var timeString=dayOfWeek+' '+dayOfMonth+', '+hours+':'+minutes;document.getElementById('clock').textContent=timeString;setTimeout(updateTime,60000)}updateTime();
