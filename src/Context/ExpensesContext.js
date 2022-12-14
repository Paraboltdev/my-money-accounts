import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const Theoptions = [
  {
    name: "Electricidad"},
    {name: "Agua"},
    {  name: "Gas"},
    { name: "Ocio"},
    { name: "Alimentación"},
    {name: "Varios"},
    
];
const ExpensesContext = createContext();

const ExpensesProvider = ({ children }) => {
    const [options, setOptions] = useState(Theoptions);
    const [concept, setConcept] = useState("");
    const [money, setMoney] = useState();
    const [expMovements, setExpMovements] = useState([]);
    
    const [selected, setSelected]= useState()
  
  const [totalExpAmount, setTotalExpAmount] = useState([]);

  
  useEffect(()=>{
    const myBillsAccounts = JSON.parse(localStorage.getItem('monthBills'))
    
    if(myBillsAccounts){
      setExpMovements(myBillsAccounts)
    }
    
  },[])
  
  useEffect(()=>{
    localStorage.setItem('monthBills', JSON.stringify(expMovements))
  },[expMovements])

  const newMove = {
    selected,
   
    concept,
    money,
    totalExpAmount,
    id: uuid(),
  };
console.log(newMove)
  const handleConcept = (e) => {
    setConcept(e.target.value);
  };
  const handleMoney = (e) => {
    setMoney(e.target.value);
  };
  const handleMOvements = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpMovements((prevSetMovements) => [...prevSetMovements, newMove]);
    setTotalExpAmount((prevtotalAmount)=> [...prevtotalAmount, parseFloat(newMove.money)])
  };

  const amount = totalExpAmount.reduce((acc, currVal)=> acc + currVal,0)
const handleSelected= (e) =>{
  setSelected(e.target.value)
}
  const data = {
    handleConcept,
    handleSubmit,
    handleMoney,
    totalExpAmount,
    setTotalExpAmount,
    options,
    concept,
    setConcept,
    money,
    setMoney,
    expMovements,
     setExpMovements,
    handleSelected,
    amount
  };

  return (
    <ExpensesContext.Provider value={data}>{children}</ExpensesContext.Provider>
  );
};

export default ExpensesContext;
export { ExpensesProvider };
