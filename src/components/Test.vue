<template>
<div>
    <h1 @click="showMeRes">test</h1>
    <p>
        <span>{{description}}</span>
    </p>
    <p>
        <span style="color:red">{{temp}} Kelvin</span>
    </p>
    <p>
        <span style="color:blue">{{tempMax}} Kelvin</span>
    </p>
    <p>
        <span style="color:red">{{tempMin}} Kelvin</span>
    </p>
     <p>
        <span style="color:green">{{humidity}}</span>
    </p>
    <input type="text" v-model="cityName">
</div>
    
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            cityName:'',
            APIkey:'248158a7de9cd52b73ed2050635061a1',
            description: ''  ,
            temp: '',
            tempMax: '',
            tempMin: '',
            humidity: ''
        }
    },
    methods:{
        showMeRes(){
            
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.APIkey}`)
                .then(res => {
                    console.log(res)
                    this.description = res.data.weather[0].description
                    this.temp = res.data.main.temp
                    this.tempMax = res.data.main.temp_max
                    this.tempMin = res.data.main.temp_min
                    this.humidity = res.data.main.humidity
                })
        }
    }
}
</script>