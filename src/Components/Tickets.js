import { Ticket } from "./Ticket";
import Pagination from "react-js-pagination";
import React,{useState,useEffect} from 'react';
import { LoadingSpinner } from "./LoadingSpinner";
import { ErrorPage } from "./ErrorPage";


export const Tickets = () => {
  const [tickets,setTickets] = useState([]);
  const [error, setError]  = useState('');
  const perPage = 25;
  const [count,setCount] = useState(0);
  const [currentPage,setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const getTickets = async () => {
      fetchTasks(1)
    }
    getTickets()
  }, [])

  const fetchTasks = async (page=1, showLoading=true) => {
    setIsLoading(showLoading);
    fetch(`http://localhost:8080/getTickets?page=${page}&per_page=${perPage}`).then((response) => {
          if(response.ok) return response.json();
          throw new Error('something went wrong');
        })
        .then((response) => {
            setIsLoading(false);
            setTickets(response.data.tickets);
            setCount(response.data.count);
          })
        .catch((error) => {
            setIsLoading(false);
            setError(error.message);
        });
  }
  
  if(error) return <ErrorPage retryCallback={ fetchTasks }/>

  const handlePageChange = async(pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setCurrentPage(pageNumber)
    fetchTasks(pageNumber, false)
  }

  return (
    isLoading ? <LoadingSpinner/> :
      <div style={{display:"flex", flexDirection:"column"}}>
        <h4>Tickets</h4>
        <table  className = "table table-hover header-fixed" style={{marginBottom:"60px"}}>
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">SUBJECT</th>
                <th scope="col">PROIRITY</th>
                <th scope="col">STATUS</th>
                <th scope="col">CREATED DATED</th>
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
        <div style={{position:"fixed", bottom:"0", maxHeight:"60px", backgroundColor:"white", width:"100%", display:"flex", justifyContent:"center"}}>
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={perPage}
                  totalItemsCount={count}
                  pageRangeDisplayed={10}
                  itemClass="page-item"
                  linkClass="page-link"
                  onChange={handlePageChange}
                  activeClass='active'
                  prevPageText='Prev'
                  nextPageText='Next'
                  firstPageText='First'
                  lastPageText='Last'
                  />
        </div>
      </div>
  );
}
