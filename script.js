const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

async function getInfo(event){
    event.preventDefault();
    let cityVal = cityName.value;
    // console.log(cityVal);
    if(cityVal === ""){
        city_name.innerText = 'Please enter city name';
        datahide.classList.add('data_hide');
    }else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7925384cb7c3171156041a4ae051a5ce`;
            console.log(url);
            const response = await fetch(url);
            // console.log(response);
            const data =  await response.json();
            // console.log(data);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;

            const tempmood = arrData[0].weather[0].main;
            // conditions to check weather status
            if(tempmood === "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            else if(tempmood === "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else if(tempmood === "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            datahide.classList.remove('data_hide');
        }catch{
            city_name.innerText = `City Not Found`;
            datahide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click', getInfo);








const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const getCurrentDay = () => {
  let currentTime = new Date();
  console.log(weekdays[currentTime.getDay()]);
  let days = weekdays[currentTime.getDay()];
  let day = document.getElementById("day");
  day.innerText = days;
};
getCurrentDay();

const getCurrentDate = () => {
  let today_date = document.getElementById("today_date");
  let time = new Date();
  let month = months[time.getMonth()];
  let day = time.getDate();
  let year = time.getFullYear();
  console.log(month + "/" + day);

  let dat = `${month} ${day}`;
  today_date.innerHTML = dat;
};
getCurrentDate();
