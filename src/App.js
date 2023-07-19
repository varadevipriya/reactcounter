import { useState } from 'react';
import './App.css';
function App(){
  const [count,setCount]=useState(0);
  const [color,setColor] = useState('black');

  function addition(){
    setCount(count+1);
    setColor("green");
  }
  function substraction(){
    setCount(count-1);
    setColor("red");
  }
  function reset(){
    setCount(0);
    setColor("black");
  }
  return (

    
   
    <div className='App'>
      <div className='box'>
       <p className='number' style={{fontSize: '28px',color: color}}>{count}</p>
      
       <button className='add' onClick={addition}>Add</button>
       <button className='sub' onClick={substraction}>Sub</button>
      <button className='reset' onClick={reset}>Reset</button>
    

    </div>
    </div>
    

  );
}
export default App
  

