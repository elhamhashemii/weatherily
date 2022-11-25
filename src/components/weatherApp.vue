<template>
    <div class="w-app">
        <div class="main-card">
            <div class="input-form">
                <!-- <img src="@/assets/search.png" alt=""> -->
                <input type="text" placeholder="Enter city name . . ." v-model="cityName"  @keypress="ShowCurrentWeather">
            </div>
            <div class="results">
                <div class="header">
                    <div class="navigation">

                        <span @click="toggleDay">Today</span>
                        <span @click="toggleWeek">Week</span>
                    </div>
                    <div class="degrees">
                        <!-- <img src="@/assets/celsius.png" alt="" id="celcius"> -->
                        <img src="@/assets/farenheit.png" alt="" id="farenheit">
                        <img src="@/assets/peruvian.png" alt="">
                    </div>
                </div>
                <!-- <week-data v-if="week" :degree="description"></week-data> -->
                <div class="current-weather weather-row">
                    <div class="w-card">
                        <p v-if="today">{{description}}</p>
                    </div>
                    <div class="w-card">
                        <p v-if="today">{{description}}</p>
                    </div>
                    <div class="w-card">kkk</div>
                    <div class="w-card">kkk</div>
                    <div class="w-card">kkk</div>
                    <div class="w-card">
                        <input type="text">
                    </div>
                </div>
                <!-- <div class="weather-row">
                    <div class="w-card">llll</div>
                    <div class="w-card">llll</div>
                    <div class="w-card">llll</div>
                    <div class="w-card">llll</div>
                    <div class="w-card">llll</div>
                </div>
                <div class="weather-row">
                    <div class="w-card">llll</div>
                    <div class="w-card">llll</div>
                    <div class="w-card">llll</div>
                    <div class="w-card">llll</div>
                    <div class="w-card">llll</div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            APIkey:'b839b5af67b665afba8cd4d178a14287',
            cityName: '',
            today : true,
            week: false,
            description: ''
        }
    },
    methods:{
        ShowCurrentWeather(e){
            if(e.key == 'Enter'){
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.APIkey}`)
                .then(res => {
                    console.log(res)
                    console.log(res.data.weather[0].description)
                    this.description = res.data.weather[0].description
                })
            }
        },
        toggleDay(){
            // this.today = true
            this.week = false
        },
        toggleWeek(){
            this.week = true
            this.today = false
        }
    }
}
</script>

<style scoped>
.w-app{
    background-color: #dcdcdc;
    min-height: 100vh;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-card{
    min-height: 80vh;
    min-width: 80%;
    display: flex;
}
.input-form{
    background-color: #fff;
    width: 15%;
    border-radius: 25px 0px 0px 25px;
    padding: 50px 20px 20px 30px;
}
.input-form img{
    width: 20px;
    height: 20px;
}
.input-form input{
    font-family: 'Comfortaa';
    padding: 10px;
    letter-spacing: 1px;
    border: none;
}
.input-form input:focus{
    outline: none;
}
.results{
    background-color: #f8f8f8;
    width: 85%;
    border-radius: 0px 25px 25px 0px;
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.header{
    display: flex;
    justify-content: space-between;
}
.navigation{
    display: flex;
    width: 120px;
    justify-content: space-between;
}
.degrees{
    display: flex;
    width: 100px;
    justify-content: space-between;
}
.degrees img{
    width: 40px;
    height: 40px;
    cursor: pointer;
}
#celcius, #farenheit{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    padding: 7px;
    margin-top: 5px;
}
#farenheit{
    filter: invert(1);
}
.navigation span{
    text-decoration: none;
    color: #c9c9c9;
    padding-top: 5px;
    padding-bottom: 5px;
    font-weight: bold;
    cursor: pointer;
}
.navigation span:hover, .activeNav{
    font-weight:bolder;
    color: #111;
    border-bottom: 2px solid #111;
}
.weather-row{
    display: flex;
    align-items: start;
    height: 50vh;
}
.w-card{
    background-color: #fff;
    border-radius: 10px;
    margin: 10px;
    width: 100px;
    height: 50px;
}
</style>
