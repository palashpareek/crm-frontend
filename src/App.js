import logo from './logo.svg';
import './App.css';
import Entry from './pages/entry/Entry_page';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard';
import AddTicket from './pages/new-ticket/AddTicket';
import TicketLists from './pages/ticket-list/TicketLists';
import TicketPage from './pages/ticket/TicketPage';

function App() {
  return (
    <div className="App">
     {/*<Entry />*/} 
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketLists /> */}
        <TicketPage />
      </DefaultLayout>
    </div>
  );
}

export default App;
