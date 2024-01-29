import {useState,useEffect} from "react"

function useCurrencyInfo(currency){
    const [data, setData]=useState({})
    useEffect(()=>{
        fetch('https://openexchangerates.org/api/latest.json')
        .then((res)=>res.json)
        .then((res)=>setData(res[currency]))
    },[currency])

    return data
}
export default useCurrencyInfo;