import { useNavigate } from 'react-router-dom';

export const Ticket = ({ticket}) => {
    const history = useNavigate();

    return (
        <tr className = "cursor-pointer" onClick={() => history('TicketDetails')}> 
            <th scope="row">{ticket.id}</th>
            <td>{ticket.subject}</td>
            <td>{ticket.priority}</td>
            <td>{ticket.status}</td>
            <td>{ticket.createdDate}</td>
        </tr>
    )
}
