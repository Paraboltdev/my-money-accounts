import { createContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const MonthContext = createContext();

const MonthProvider = ({ children }) => {
  const [concept, setConcept] = useState("");
  const [money, setMoney] = useState("");
  const [movements, setMovements] = useState([]);
  // const total = money.reduce((acc,el)=> acc+el)
  const [totalAmount, setTotalAmount] = useState([]);
  const totalPlus = totalAmount.reduce((acc, currVal) => acc + currVal, 0);
  const [plus, setPlus] = useState(totalPlus);

  useEffect(() => {
    const myMoney = JSON.parse(localStorage.getItem("monthMoney"));

    if (myMoney) {
      setMovements(myMoney);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("monthMoney", JSON.stringify(movements));
  }, [movements]);

  const date = new Date();
  console.log(date);

  const newMove = {
    concept,
    money,

    id: uuid(),
  };

  const handleConcept = (e) => {
    setConcept(e.target.value);
  };
  const handleMoney = (e) => {
    setMoney(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovements((prevSetMovements) => [...prevSetMovements, newMove]);
    setTotalAmount((prevTotalAmount) => [
      ...prevTotalAmount,
      parseFloat(newMove.money),
    ]);
    setMoney("");
    setConcept("");
  };
  const handleReset = () => {
    setMovements([]);
  };

  const data = {
    handleReset,
    handleConcept,
    handleSubmit,
    handleMoney,
    totalAmount,
    setTotalAmount,
    concept,
    setConcept,
    money,
    setMoney,
    movements,
    setMovements,
    totalPlus,
  };
  return <MonthContext.Provider value={data}>{children}</MonthContext.Provider>;
};

export default MonthContext;
export { MonthProvider };
