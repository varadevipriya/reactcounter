import { useState } from 'react';
import './App.css';
function App(){
  const [count,setCount]=useState(0);

  function addition(){
    setCount(count+1);
  }
  function substraction(){
    setCount(count-1);
  }
  function reset(){
    setCount(0);
  }
  return (

    
   
    <div className='App'>
      <div className='box'>
       <p className='number'>{count}</p>
      
       <button className='add' onClick={addition}>Add</button>
       <button className='sub' onClick={substraction}>Sub</button>
      <><button className='reset' onClick={reset}>Reset</button></>
    

    </div>
    </div>
    

  );
}
export default App
  

