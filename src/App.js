import './App.css';
import Entry from './pages/entry/Entry_page';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard';
import AddTicket from './pages/new-ticket/AddTicket';
import TicketLists from './pages/ticket-list/TicketLists';
import TicketPage from './pages/ticket/TicketPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from './components/private-route/PrivateRoute';

function App() {
  return (
    <div className="App">
     <Router>
       < Switch>
      
           <Route exact path="/" >  <Entry /></Route>
         
          <PrivateRoute path="/dashboard" ><Dashboard /></PrivateRoute>
          <PrivateRoute path="/add-ticket"><AddTicket /></PrivateRoute>
          <PrivateRoute path="/tickets" ><TicketLists /></PrivateRoute>
          <PrivateRoute path="/ticket:tId"><TicketPage /></PrivateRoute>
       

        </ Switch>
      </Router>
    
    </div>
  );
}

export default App;
