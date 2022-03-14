import logo from './logo.svg';
import './App.css';
import Entry from './pages/entry/Entry_page';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard';
import AddTicket from './pages/new-ticket/AddTicket';

function App() {
  return (
    <div className="App">
     {/*<Entry />*/} 
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
