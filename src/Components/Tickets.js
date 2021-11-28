import { Ticket } from "./Ticket";
import Pagination from "react-js-pagination";
import React,{useState,useEffect} from 'react';


export const Tickets = () => {

  const [tickets,setTickets] = useState([]);
  const [error, setError]  = useState('');
  const perPage = 25;
  const [count,setCount] = useState(0);
  const [currentPage,setCurrentPage] = useState(0);


  useEffect(() => {
    const getTickets = async () => {
      fetchTasks(1)
    }
    getTickets()
  }, [])

  const fetchTasks = async (page) => {
    fetch(`http://localhost:8080/getTickets?page=${page}&per_page=${perPage}`).then((response) =>{
          if(response.ok) return response.json();
          throw new Error('something went wrong');
        }).then(
          
         (response) => {
           setTickets(response.data.tickets);
           setCount(response.data.count);
          }
         
        )
        .catch((error) => setError(error.message));
    return tickets
  }
  
  if(error) return <h1>{error}</h1>

  const handlePageChange = async(pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber)
    fetchTasks(pageNumber)
  }

    return (
        <>
            <table  className = "ticket">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>SUBJECT</th>
                    <th>PROIRITY</th>
                    <th>STATUS</th>
                    <th>CREATED DATED</th>
                </tr>
                </thead>
                <tbody>
                {tickets.map(item => {
                    return (
                    <Ticket key = {item.id} ticket = {item}></Ticket>
                    );
                })}
                </tbody>
            </table>
            <div className="d-flex justify-content-center">
                    <Pagination
                     activePage={currentPage}
                     itemsCountPerPage={perPage}
                     totalItemsCount={count}
                     pageRangeDisplayed={10}
                     itemClass='page-item'
                     linkClass='btn btn-light'
                     onChange={handlePageChange}
                     />
        </div>
        </>
    )
}
