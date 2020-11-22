import React, {useState , useEffect} from 'react';
import { NativeSelect , FormControl, StylesProvider} from '@material-ui/core'
import Styles from './CountryPicker.module.css';
import  {fetchcountries} from '../../api'
const CountryPicker =({handlecountrychange})=>{
    
        const [fetchedCountries , setfetchedCountries] = useState([])
        useEffect(()=>{
            const fetchAPI = async () =>{
                setfetchedCountries(await fetchcountries())
            }
            fetchAPI();
        },[setfetchedCountries]);





    return(
        <FormControl className = {Styles.FormControl}>
            <NativeSelect defaultValue = ""  onChange = {(e)=>handlecountrychange(e.target.value)}>
                <option value = "">Global</option>
                {fetchedCountries.map((country ,index)=><option key = {index} value = {country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}


export default CountryPicker;