import { useNavigate } from 'react-router-dom';

export const Ticket = ({ticket}) => {
    const history = useNavigate();

    return (
        <tr className = "cursor-pointer" onClick={() => history('TicketDetails',{state:{ticketId:ticket.id}})}> 
            <th scope="row">{ticket.id}</th>
            <td>{ticket.subject !== null ?ticket.subject:"-"}</td>
            <td>{ticket.priority !== null ?ticket.priority:"-"}</td>
            <td>{ticket.status !== null ?ticket.status:"-"}</td>
            <td>{ticket.createdDate !== null ?ticket.createdDate:"-"}</td>
        </tr>
    )
}
