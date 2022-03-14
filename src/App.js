import logo from './logo.svg';
import './App.css';
import Entry from './pages/entry/Entry_page';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
     {/*<Entry />*/} 
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
