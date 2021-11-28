import { Button } from "bootstrap"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TicketDetails from "./TicketDetails";
import { useNavigate } from 'react-router-dom';


export const Ticket = ({ticket}) => {
    const history = useNavigate();

    return (
        < >
            <tr className = "ticket"> 
                <td>{ticket.id}</td>
                <td>{ticket.subject}</td>
                <td>{ticket.priority}</td>
                <td>{ticket.status}</td>
                <td>{ticket.createdDate}</td>
                <td><button onClick={() => history('TicketDetails')} >click</button></td>
            </tr>
                   
        </>
    )
}
