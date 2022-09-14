import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  { MonthProvider } from './Context/MonthContext';
import { ExpensesProvider } from './Context/ExpensesContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MonthProvider>
    <ExpensesProvider>

      <App />
    </ExpensesProvider>
  </MonthProvider>
  
);


