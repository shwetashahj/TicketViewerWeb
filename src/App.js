import React,{useState,useEffect} from 'react';
import { Tickets } from './Components/Tickets';
import { TicketDetails } from './Components/TicketDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const url = 'http://localhost:8080/getTickets?page={page}';

export default function App(){
  
  return (<BrowserRouter>
    
     <Routes>
                <Route path="/" element={ <Tickets/> }  />
                <Route path="/TicketDetails" element= {<TicketDetails/>} />
       </Routes>
  </BrowserRouter>);
}