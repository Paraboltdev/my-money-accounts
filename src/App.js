
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

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Main />}/>
      
      <Route path="/commonExpensives" element={<CommonExpensives />}/>
      <Route path="/monthMoney" element={<MonthMoney />}/>
          
        
     
    </Routes>
    <TotalAmount />
  </BrowserRouter>
  );
}

export default App;
