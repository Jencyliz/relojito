const hr = document.getElementById("hr");
const mt = document.getElementById("mt");
const sd = document.getElementById("sd");
const tm = document.getElementById("tm");

setInterval(()=>{
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    if(h<=9) hr.textContent = `0${h}:`;
    else hr.textContent = `${h}:`;

     if(m<=9) mt.textContent = `0${m}:`;
     else mt.textContent = `${m}:`; 

    if (s<=9) sd.textContent = `0${s}`;
    else sd.textContent = s;
    
    if(h > 11) tm.textContent = "PM";
    else tm.textContent = "AM";
   
},1000);