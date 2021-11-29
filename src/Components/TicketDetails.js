import React,{useState,useEffect} from 'react';
import { LoadingSpinner } from "./LoadingSpinner";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


export const TicketDetails = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state.ticketId;
    const [ticket,setTicket] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError]  = useState('');

    useEffect(() => {
        const getTicketDetail = async () => {
          fetchTasks()
        }
        getTicketDetail()
      }, [])
    
    const fetchTasks = async () => {
        console.log(id);
        fetch(`http://localhost:8080/showTicket/${id}`).then((response) => {
              if(response.ok) return response.json();
              throw new Error('something went wrong');
            })
            .then((response) => {
                setIsLoading(false);
                setTicket(response.data.ticket);
              })
            .catch((error) => {
                setIsLoading(false);
                setError(error.message);
            });
      }
      if(error) return <h1>{error}</h1>

    return(
        isLoading ? <LoadingSpinner/> :
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:'flex', flexDirection:"row-reverse"}}>
                <button type="button" class="btn-close btn-lg" aria-label="Close" onClick={() => navigate(-1)}></button>
            </div>
             <h4>Ticket Details</h4>
             <table  className = "table header-fixed" style={{width:"1000px"}}>
                <thead>
                </thead>
                <tbody>
                    <tr className = "cursor-pointer" > 
                        <td>ID:</td>
                        <td>{ticket.id}</td>
                    </tr>
                    <tr className = "cursor-pointer" > 
                        <td>SUBJECT:</td>
                        <td>{ticket.subject}</td>
                    </tr>
                    <tr className = "cursor-pointer" > 
                        <td>DESCRIPTION:</td>
                        <td>{ticket.description !== null ?ticket.description:"-"}</td>
                    </tr>
                    <tr className = "cursor-pointer" > 
                        <td>PRIORITY:</td>
                        <td>{ticket.priority !== null ?ticket.priority:"-"}</td>
                    </tr>
                    <tr className = "cursor-pointer" > 
                        <td>STATUS:</td>
                        <td>{ticket.status !== null ?ticket.status:"-"}</td>
                    </tr>
                    <tr className = "cursor-pointer" > 
                        <td>TYPE:</td>
                        <td>{ticket.type !== null ?ticket.type:"-"}</td>
                    </tr>
                    <tr className = "cursor-pointer" > 
                        <td>EMAIL IN CC:</td>
                        <td>{ticket.emailsInCC ? ticket.emailsInCC.map(item => {
                            return (
                            <h5>item</h5>
                            );
                        }):"-"}</td>
                    </tr>
                    <tr className = "cursor-pointer" > 
                        <td>REQUESTER ID:</td>
                        <td>{ticket.requesterId !== null ?ticket.requesterId:"-"}</td>
                    </tr>
                    
                 </tbody>
            </table>
        </div>

    )

}
