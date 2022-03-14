import React from 'react';
import Tbale, { Table } from 'react-bootstrap'

const TicketTable = ({tickets}) =>{
       return (
              
        <Table striped bordered hover>
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
                 <td>{row.subject}</td>
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