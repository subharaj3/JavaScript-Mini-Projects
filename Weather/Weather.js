let header=document.querySelector('.header');
let searchbox=document.querySelector('.searchbox');
let searchboxInput=document.querySelector('#search');
let mainCont=document.querySelector('.main-cont');
let back1=document.querySelector('#back1');
let back2=document.querySelector('#back2');
let back3=document.querySelector('#back3');
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
let day5forecast=document.querySelector('.day5-forecast');
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

let cont5day=document.querySelector('.container-5day');
let day5Para=document.querySelectorAll(".day5-para");
let dayParaType=document.querySelectorAll(".day-para-type");
let min=document.querySelectorAll(".min");
let max=document.querySelectorAll(".max");
let iconPara=document.querySelectorAll(".icon-para");
let speedPara=document.querySelectorAll(".speed-para");

const date=new Date();
const type={
    0:['Clear','https://img.icons8.com/?size=100&id=arTIUtO5zOTy&format=png&color=000000'],
    1:['Mainly Clear','pngwing.com.png'],
    2:['Partly Cloud','pngwing.com3.png'],
    3:['Overcast','pngwing.com4.png'],
    45:['Fog','pngwing.com5.png'],
    48:['Depositing Fog','pngwing.com6.png'],
    51:['Light Drizzle','pngwing.com7.png'],
    53:['Moderate Drizzle','pngwing.com8.png'],
    55:['Heavy Drizzle','pngwing.com8.png'],
    56:['Light Freezing Drizzle','pngwing.com10.png'],
    57:['Heavy Freezing Drizzle','pngwing.com11.png'],
    61:['Light Rain','pngwing.com12.png'],
    63:['Moderate Rain','pngwing.com13.png'],
    65:['Heavy Rain','pngwing.com14.png'],
    66:['Light Freezing Rain','pngwing.com15.png'],
    67:['Heavy Freezing Rain','pngwing.com16.png'],
    71:['Light Snow Fall','pngwing.com17.png'],
    73:['Moderate Snow Fall','pngwing.com18.png'],
    75:['Heavy Snow Fall','pngwing.com19.png'],
    77:['Snow grains','pngwing.com20.png'],
    80:['Light Rain Showers','pngwing.com21.png'],
    81:['Moderate Rain Showers','pngwing.com22.png'],
    82:['Heavy Rain Showers','pngwing.com23.png'],
    85:['Light Snow Showers','pngwing.com24.png'],
    85:['Heavy Snow Showers','pngwing.com25.png'],
    95:['Thunderstorm','pngwing.com27.png'],
    96:['Thunder with Light Hail','pngwing.com28.png'],
    99:['Thunder with Heavy Hail','pngwing.com29.png'],
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
    }
    else{
        body.style.background='url("back.jpg") no-repeat';
        body.style.backgroundSize='cover';
        mainTempIcon.src='https://img.icons8.com/?size=100&id=arTIUtO5zOTy&format=png&color=000000';
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
    TypePara.innerText=type[data['current']['weather_code']][0];
    mainTempIcon.src=type[data['current']['weather_code']][1];
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

    let i=1;
    day5Para.forEach((each)=>{
        each.innerText=data['daily']['time'][i];
        i++;
    });
    i=1;
    dayParaType.forEach((each)=>{
        each.src=type[data['daily']['weather_code'][i]][1];
        i++;
    });
    i=1;
    max.forEach((each)=>{
        each.innerText=`${data['daily']['temperature_2m_max'][i]} °C`;
        i++;
    });
    i=1;
    min.forEach((each)=>{
        each.innerText=`${data['daily']['temperature_2m_min'][i]} °C`;
        i++;
    });
    i=1;
    speedPara.forEach((each)=>{
        each.innerText=`${data['daily']['wind_speed_10m_max'][i]} km/h`;
        i++;
    });
    i=1;
    iconPara.forEach((each)=>{
        each.style.transform=`rotate(${data['daily']['wind_direction_10m_dominant'][i]}deg)`;
        i++;
    });

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

    day5forecast.addEventListener("click",()=>{
        cont5day.classList.remove('hid');
        cont5day.style.animation='slideside 1s ease';
        mainCont.classList.add('fil');
    });

    back3.addEventListener('click',()=>{
        cont5day.classList.add('hid');
        mainCont.classList.remove('fil');
    });
};