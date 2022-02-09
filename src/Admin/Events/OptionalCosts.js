import React,{Component} from "react"
import {useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import OptionalCostsForm from "../Forms/BackEnd/OptionalCostsForm";
import { useSnackbar } from 'notistack';

const OptionalCosts = (props) => {
   
    const [bomEvent, setEvent] = useState({});
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const params = useParams();

    const eventid = params.eventid;
    console.log(params.eventid);
    
    //use for edit information to be set
    //useEffect(()=>{
    //  fetch("https://bomreactapi.azurewebsites.net/Events/GetSingleEvent/" + eventid)
    //  .then(res => res.json())
    //  .then(
    //    (result) => {
    //      setEvent(result)
     //     enqueueSnackbar('Found specific event');
     //   }
     // )
    //});

    return(
         <OptionalCostsForm />           
        )
        
    }


export default OptionalCosts