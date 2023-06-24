import './App.css';

import React, {useState} from  'react';

const App=()=>{


const[result,setResult]=useState("");


const clickHandler=(event)=>{

  setResult(result.concat(event.target.value))
}
const clearDisplay=()=>{
  setResult("");
}
const calculate=()=>{
  setResult(eval(result).toString());
}


const handleClickC = ()=>{
  setResult(result.substring(0,result.length-1));
};



  return(
   
    <div className='calc'>
    
     <h1>Calculator</h1>
     <input type="text" placeholder="0" id="answer" value={result}/> 



<input type="button" value ="(" className='op' onClick={clickHandler}/>  
<input type="button" value =")" className='op' onClick={clickHandler}/> 
<input type="button" value ="%" className='op' onClick={clickHandler}/> 
<button className='btn'  onClick={handleClickC} name="C" id="C">C</button>
<input type="button" value ="AC" className='ac' onClick={ clearDisplay}/> 


  
   <input type="button" value ="7" className='button' onClick={clickHandler}/>  
    <input type="button" value ="8" className='button' onClick={clickHandler}/>  
    <input type="button" value ="9" className='button' onClick={clickHandler}/>  
    <input type="button" value ="/" className='on' onClick={clickHandler}/>  

    <input type="button" value ="4" className='button' onClick={clickHandler}/>  
    <input type="button" value ="5" className='button' onClick={clickHandler}/>  
    <input type="button" value ="6" className='button' onClick={clickHandler}/>
    <input type="button" value ="*" className='on' onClick={clickHandler}/>

    <input type="button" value ="1" className='button' onClick={clickHandler}/>  
    <input type="button" value ="2" className='button' onClick={clickHandler}/>  
    <input type="button" value ="3" className='button' onClick={clickHandler}/>
    <input type="button" value ="-" className='on' onClick={clickHandler}/>

    
    <input type="button" value ="0" className='button' onClick={clickHandler}/> 
    <input type="button" value ="." className='button' onClick={clickHandler}/>  
    <input type="button" value ="=" className='button1' onClick={calculate} />
    <input type="button" value ="+" className='button' onClick={clickHandler}/>
    <input type="button" value ="ANSWER" className='ans' onClick={calculate} />
   
   </div>
   
    
  );
}

export default App
