import axios from 'axios'
// Card function
const url = 'https://covid19.mathdro.id/api';

export const fetchdata = async (country) => {
    let changebleurl = url;
    if(country){
        changebleurl  = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changebleurl)

        return { confirmed, recovered, deaths, lastUpdate }



    } catch (error) {
        console.log(error)
    }
}
// chart function
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,


        }));
        return modifiedData;



    } catch (error) {

    }
}

// countrypicker 

export const fetchcountries = async () =>{
    try {
        const { data:{countries}} = await axios.get(`${url}/countries`)
        return countries.map((country)=>country.name)

    } catch(error) {
        console.log(error)
    }
}