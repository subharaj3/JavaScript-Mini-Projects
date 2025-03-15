let header=document.querySelector('.header');
let searchbox=document.querySelector('.searchbox');
let searchboxInput=document.querySelector('#search');
let mainCont=document.querySelector('.main-cont');
let back1=document.querySelector('#back1');
let back2=document.querySelector('#back2');
let dateText=document.querySelector('#date-para');
let placeText=document.querySelector('#location-para');

let body=document.querySelector('body');
let mainTempIcon=document.querySelector('#main-temp-icon-img');
let mainTempPara=document.querySelector('#main-temp-para');
let TypePara=document.querySelector('#weather-type-para');
let minMaxTemp=document.querySelector('#min-max-temp');
let speed=document.querySelector('#speed');
let arr=document.querySelector('.arr');
let sunRisePara=document.querySelector('#sr-para');
let sunSetPara=document.querySelector('#ss-para');
let HumPara=document.querySelector('#hum-para');
let RFpara=document.querySelector('#RF-para'); 
let UVPara=document.querySelector('#UV-para');
let PressurePara=document.querySelector('#pressure-para');
let ChanceRainPara=document.querySelector('#chance-rain-para');
let DayPara1Text=document.querySelector('#day-para-1text');
let DayPara2Text=document.querySelector('#day-para-2text');
let DayPara0Temp=document.querySelector('#day-para-0temp');
let DayPara1Temp=document.querySelector('#day-para-1temp');
let DayPara2Temp=document.querySelector('#day-para-2temp');
let aqi=document.querySelector('#aqi');
let direction=document.querySelector('#dir');

let AqiCont=document.querySelector('.container-aqi');
let AqiMainContVal=document.querySelector('#main-cont-aqi-paraval');
let AqiMainContType=document.querySelector('#main-cont-aqi-paratype');
let PM2val=document.querySelector('#PM2Val');
let PM10val=document.querySelector('#PM10Val');    
let SOval=document.querySelector('#SOVal');
let NOval=document.querySelector('#NOVal');
let Oval=document.querySelector('#OVal');
let COval=document.querySelector('#COVal');
let AQIHeadText=document.querySelector('.aqi-head-text');

const date=new Date();
const type={
    0:'Clear',
    1:'Mainly Clear',
    2:'Partly Cloud',
    3:'Overcast',
    45:'Fog',
    48:'Depositing Fog',
    51:'Light Drizzle',
    53:'Moderate Drizzle',
    55:'Heavy Drizzle',
    56:'Light Freezing Drizzle',
    57:'Heavy Freezing Drizzle',
    61:'Light Rain',
    63:'Moderate Rain',
    65:'Heavy Rain',
    66:'Light Freezing Rain',
    67:'Heavy Freezing Rain',
    71:'Light Snow Fall',
    73:'Moderate Snow Fall',
    75:'Heavy Snow Fall',
    77:'Snow grains',
    80:'Light Rain Showers',
    81:'Moderate Rain Showers',
    82:'Heavy Rain Showers',
    85:'Light Snow Showers',
    85:'Heavy Snow Showers',
    95:'Thunderstorm',
    96:'Thunder with Light Hail',
    99:'Thunder with Heavy Hail',
}

let td=date.getDate();
let tm=date.getMonth()+1;
let ty=date.getFullYear();
dateText.innerText=`${td}/${tm}/${ty}`;

let placeVal;
let data;
let city;

header.addEventListener('click',()=>{
    searchbox.classList.remove('hid');
    searchbox.style.animation='slidedown 1s ease';
    mainCont.classList.add('fil');
});

back1.addEventListener('click',()=>{
    searchbox.classList.add('hid');
    mainCont.classList.remove('fil');
});

searchboxInput.onkeydown=(evt)=>{
    if(evt.key == 'Enter'){
        placeVal=searchboxInput.value;
        searchbox.classList.add('hid');
        mainCont.classList.remove('fil');
        ValueChanger(placeVal);
    }
}

const ValueChanger=async (placeVal)=>{
    placeText.innerText=placeVal;
    placeVal=placeVal.split(',');

    let country=placeVal[placeVal.length-1].replace(' ','%20');
    city=placeVal[0].replace(' ','%20');

    let Coordinate = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&country=${country}&count=1&language=en&format=json`;
    let promise=await fetch(Coordinate);
    data=await promise.json();

    let latitude=data['results'][0]['latitude'];
    let longitude=data['results'][0]['longitude'];

    let Weather = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=uv_index_max,sunset,temperature_2m_max,temperature_2m_min,sunrise,wind_speed_10m_max,weather_code,precipitation_probability_max,wind_direction_10m_dominant&current=wind_speed_10m,is_day,temperature_2m,wind_direction_10m,precipitation,apparent_temperature,weather_code,relative_humidity_2m,surface_pressure&timezone=auto`;
    promise=await fetch(Weather);
    data=await promise.json();

    if(data['current']['is_day']==0){
        body.style.background='url("Night.jpg") no-repeat';
        body.style.backgroundSize='cover';
        mainTempIcon.src='moon.png';
        mainTempIcon.style.animation='none';
    }
    else{
        body.style.background='url("back.jpg") no-repeat';
        body.style.backgroundSize='cover';
        mainTempIcon.src='https://img.icons8.com/?size=100&id=arTIUtO5zOTy&format=png&color=000000';
        mainTempIcon.style.animation='rotatesun 10s linear infinite 0s';
    }

    if(data['current']['wind_direction_10m']>10 && data['current']['wind_direction_10m']<=80){
        direction.innerText='North-East';
    }
    else if(data['current']['wind_direction_10m']>80 && data['current']['wind_direction_10m']<=100){
        direction.innerText='East';
    }
    else if(data['current']['wind_direction_10m']>100 && data['current']['wind_direction_10m']<=170){
        direction.innerText='South-East';
    }
    else if(data['current']['wind_direction_10m']>170 && data['current']['wind_direction_10m']<=190){
        direction.innerText='South';
    }
    else if(data['current']['wind_direction_10m']>190 && data['current']['wind_direction_10m']<=260){
        direction.innerText='South-West';
    }
    else if(data['current']['wind_direction_10m']>260 && data['current']['wind_direction_10m']<=280){
        direction.innerText='West';
    }
    else if(data['current']['wind_direction_10m']>280 && data['current']['wind_direction_10m']<=350){
        direction.innerText='North-West';
    }
    else{
        direction.innerText='North';
    }

    mainTempPara.innerText=`${data['current']['temperature_2m']} ° C`;
    TypePara.innerText=type[data['current']['weather_code']];
    minMaxTemp.innerText=`${data['daily']['temperature_2m_max'][0]} ° C / ${data['daily']['temperature_2m_min'][0]} ° C`;
    speed.innerText=`${data['current']['wind_speed_10m']} km/h`;
    arr.style.transform=`rotate(${data['current']['wind_direction_10m']}deg)`;
    sunRisePara.innerText=`Sunrise: ${data['daily']['sunrise'][0].split('T')[1]}`;
    sunSetPara.innerText=`Sunset: ${data['daily']['sunset'][0].split('T')[1]}`;
    HumPara.innerText=`${data['current']['relative_humidity_2m']} %`;
    RFpara.innerText=`${data['current']['apparent_temperature']} °C`;
    UVPara.innerText=data['daily']['uv_index_max'][0];
    PressurePara.innerText=`${(data['current']['surface_pressure']/1000).toFixed(2)} atm`;
    ChanceRainPara.innerText=`${data['daily']['precipitation_probability_max'][0]} %`;
    DayPara1Text.innerText=`${data['daily']['time'][2]}`;
    DayPara2Text.innerText=`${data['daily']['time'][3]}`;
    DayPara0Temp.innerText=`${data['daily']['temperature_2m_max'][1]} ° / ${data['daily']['temperature_2m_min'][1]} °`;
    DayPara1Temp.innerText=`${data['daily']['temperature_2m_max'][2]} ° / ${data['daily']['temperature_2m_min'][2]} °`;
    DayPara2Temp.innerText=`${data['daily']['temperature_2m_max'][3]} ° / ${data['daily']['temperature_2m_min'][3]} °`;

    let Aqiurl=`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=ozone,carbon_monoxide,nitrogen_dioxide,pm10,sulphur_dioxide,pm2_5`;
    promise=await fetch(Aqiurl);
    data=await promise.json();
    aqi.innerHTML=`<i class="fa-solid fa-mask-ventilator"></i> AQI - ${data["current"]['pm2_5']}`;

    if(data["current"]['pm2_5']<=50){
        AqiMainContType.innerText='Good';
    }
    else if(data['current']['pm2_5']>50 && data['current']['pm2_5']<=100){
        AqiMainContType.innerText='Moderate';
    }
    else if(data['current']['pm2_5']>100 && data['current']['pm2_5']<=200){
        AqiMainContType.innerText='Unhealthy for Sensitive Groups';
    }
    else if(data['current']['pm2_5']>200 && data['current']['pm2_5']<=300){
        AqiMainContType.innerText='Unhealthy';
    }
    else if(data['current']['pm2_5']>300 && data['current']['pm2_5']<=400){
        AqiMainContType.innerText='Very Unhealthy';
    }
    else{
        AqiMainContType.innerText='Hazardous';
    }
   
    AQIHeadText.innerText=`${city.replace('%20',' ')} Published at ${data["current"]['time'].split('T')[1]}`;
    AqiMainContVal.innerText=data["current"]['pm2_5'];
    PM2val.innerText=data["current"]['pm2_5'];
    PM10val.innerText=data["current"]['pm10'];
    SOval.innerText=data["current"]['sulphur_dioxide'];
    NOval.innerText=data["current"]['nitrogen_dioxide'];
    Oval.innerText=data["current"]['ozone'];
    COval.innerText=data["current"]['carbon_monoxide'];

    aqi.addEventListener("click",()=>{
        AqiCont.classList.remove('hid');
        AqiCont.style.animation='slideup 1s ease';
        mainCont.classList.add('fil');
    });

    back2.addEventListener('click',()=>{
        AqiCont.classList.add('hid');
        mainCont.classList.remove('fil');
    });    
};