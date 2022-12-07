(()=>{"use strict";const e=async function(e="London",t="metric"){try{let n=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=67556afc5b803ebc6540b49ddb13c6a3&units=${t}`);return await n.json()}catch(e){throw new Error(`Wasn't possible to fetch data from API. ${e}`)}};let t=function(){let e=()=>document.createElement("div");return{createSearchContainer:function(){let t=e();t.id="clock-search-container";let a=e();a.id="search-container";let r=document.createElement("input");r.placeholder="Type a city here...",r.id="search-input";let c=document.createElement("button");c.addEventListener("click",(()=>{console.log(r.value),n(r.value)})),c.textContent="Search",c.id="search-btn",a.append(r,c);let i=document.createElement("strong");i.id="weather-clock";let o=e();return o.append(i),t.append(a,o),t},changeBackground:function(e){document.querySelector("#weather-app-image").style.backgroundImage=`url(${e})`},updateClock:function(){setInterval(a,3e3)},createWeatherCardContainer:function(){let t=e();return t.id="weather-card-container",t},createWeatherCard:function(t){let n=e();return n.classList.add("weather-card"),n.innerHTML=`\n        <span class="weather-card-city">${t.name}, ${t.sys.country}</span>\n        <div class="weather-card-status-container">\n            <div class="weather-card-status">\n                <span>${Math.round(t.main.temp)}°C</span> /\n                <span>${Math.round(1.8*t.main.temp+32)}°F</span>\n            </div>\n            <div class="weather-card-condition">\n                ${t.weather[0].description}\n                <img src="http://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png"></img>\n            </div>\n        </div>`,n},createCityContainer:function(t){let n=document.querySelector("#weather-card-container"),a=e();a.id="weather-city-container-card";let r=e();r.id="weather-city-container-info";let c=e();c.innerHTML=`\n\t\t<div>\n\t\t\t<h2>${t.name} - ${t.sys.country}</h2>\n\t\t\t<p>${t.weather[0].description}</p>\n\t\t</div>`;let i=e();i.id="weather-city-container-info-stts",i.innerHTML=`\n\t\t<span><strong>Humidity: </strong>${t.main.humidity}%</span>\n\t\t<span><strong>Temp Min: </strong>${t.main.temp_min}°C</span>\n\t\t<span><strong>Temp Max: </strong>${t.main.temp_max}°C</span>`,r.append(c,i);let o=e();if(o.id="weather-city-container-img",o.innerHTML=`\n\t\t<h3>${t.main.temp}°C</h3>\n\t\t<img src="http://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png">`,a.append(r,o),"weather-city-container-card"!=n.firstChild.id)n.prepend(a);else{let e=n.querySelectorAll("div");n.removeChild(e[0]),n.prepend(a)}}}}(),n=async function(n){let a=await e(n);t.createCityContainer(a)};function a(){let e=new Date,t=e.getHours(),n=e.getMinutes();n<10&&(n="0"+n),document.querySelector("#weather-clock").textContent=`${t}:${n}`}let r=async function(){let n=document.querySelector("#main-container");n.textContent="";let a=t.createSearchContainer(),r=t.createWeatherCardContainer();n.append(a,r),t.updateClock();let c=["London","Brasilia","Washington","Berlin","Moscow","Tokyo","Mexico City"];for(let n=0;n<c.length;n++){let a=await e(c[n]),r=t.createWeatherCard(a);document.querySelector("#weather-card-container").append(r)}},c={temperatureUnit:"metric",city:"London"},i=(async function(){let n=document.querySelector("#weather-temperature"),a=await e(),o=async function(){"metric"==c.temperatureUnit?(c.temperatureUnit="imperial",a=await e(c.city,c.temperatureUnit),n.textContent=`${a.main.temp}°F`):(c.temperatureUnit="metric",a=await e(c.city,c.temperatureUnit),n.textContent=`${a.main.temp}°C`),d(),s()},d=function(){let e=document.querySelector("#weather-status"),n=a.weather[0].description;switch(n=i(n),e.textContent=`${n}`,a.weather[0].main){case"Rain":t.changeBackground("../src/img/raining.jpg");break;case"Thunderstorm":t.changeBackground("../src/img/thunderstorm.jpg");break;case"Clouds":t.changeBackground("../src/img/cloudy.jpg");break;case"Snow":t.changeBackground("../src/img/snow.jpg");break;case"Drizzle":t.changeBackground("../src/img/drizzle.jpg");break;default:t.changeBackground("../src/img/clear.jpg")}},s=function(){document.querySelector("#weather-city").textContent=a.name};document.querySelector("#settings-button").addEventListener("click",createSettingsPanel),document.querySelector("#weather-tab-btn").addEventListener("click",r),n.addEventListener("click",o),o()}(),e=>{e=e.split(" ");let t=[];return e.forEach((e=>{(e=e.split(""))[0]=e[0].toUpperCase(),e=e.join(""),t.push(e)})),t=t.join(" "),t})})();