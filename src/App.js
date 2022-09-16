
import './App.css';
import Main from './components/Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CommonExpensives from './components/CommonExpensives';
import MonthMoney from './components/MonthMoney';
import Header from './components/Header';
import TotalAmount from './components/TotalAmount';
import FilterList from './components/FilterList';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/filter" element={<FilterList />}/>
      
      <Route path="/commonExpensives" element={<CommonExpensives />}/>
      <Route path="/monthMoney" element={<MonthMoney />}/>
          
        
     
    </Routes>
    <FilterList />
    <TotalAmount />
  </BrowserRouter>
  );
}

export default App;
