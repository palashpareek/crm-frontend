import React from 'react';
import  { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const TicketTable = ({tickets}) =>{
       return (
        <Table  bordered hover>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Subjesct</th>
                    <th>Status</th>
                    <th>Logging Date</th>
                </tr>
            </thead>

            <tbody>
                {tickets.length ? tickets.map((row)=> (
                 <tr key={row.id}>
                 <td>{row.id}</td>
                 <Link to={`/ticket${row.id}`}>
                 <td>{row.subject}</td>
                 </Link>
                 <td>{row.status}</td>
                 <td>{row.addedAt}</td>
             </tr>
             )) : 
             <tr>
             <td colSpan="4" className='text-center'>No ticket to show</td>
               </tr>
             }

            </tbody>
        </Table>
       )
};

export default TicketTable;