import React, {useState} from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

function App() {
  // const [todo, setTodo] = useState('Hi')
  // const todoChange = (e) => {
  //     setTodo(e.target.value);
  // }
// let CalcArr=[];
  const x = 'REACT!';
  const MenuItems = [
    {
      name: 'One',
      url: '#'
    },
    {
      name: 'Two',
      url: '#'
    },
    {
      name: 'Three',
      url: '#'
    },
    {
      name: 'Four',
      url: '#'
    }];
  const MenuButtons =
      [
        '1 Button',
        '2 Button',
        '3 Button',
        '4 Button',
      ];

  const onButtonClick = (n) => {
    if (n==='Viktoria' || n==='Victoria' || n==='Виктория' || n=== 'Vika' || n==='Вика')
      alert(`${n}, I Love You!`);
    else alert(`Hello ${n}!`);
  }


  return (
      <div className="container">
        <Header MenuItems={MenuItems} titile={x} version='0.0.5'/>
        <Content MenuButtons={MenuButtons} onButtonClick={onButtonClick}/>
        <Footer MenuItems={MenuItems}/>
        {/*{todo} <input type='text' placeholder='...' onChange={todoChange}/>*/}
      </div>

  );
}

export default App;
