import React from 'react'
import { Cards, CountryPicker, Chart } from './components';
import styles from './App.module.css'
import { fetchdata } from './api';
import coronaImage from './img/image.png'

class App extends React.Component {

    state = {
        data: {},
        country: "",
    }
    async componentDidMount() {
        const fetchedData = await fetchdata();
        this.setState({ data: fetchedData })
    }

    handlecountrychange = async (country) => {
        const fetchedData = await fetchdata(country);
        this.setState({ data: fetchedData, country: country })

    }
    render() {
        const { data, country } = this.state;
        return (

            <div className={styles.container} >
            <img className = {styles.img} Src= {coronaImage} alt = "COVID-19"></img>
                <Cards data={data} />
                <CountryPicker handlecountrychange={this.handlecountrychange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}





export default App;