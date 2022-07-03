import React from 'react';
import { Child } from './components/STATE_LIFTING/Child';



function App() {
  const data ="I an from parent";
  const handleChildData=(childData)=>{
    console.log(childData)
  }
  return (
    <div>
      <Child data={data} onChildData={handleChildData}/>
    </div>
  
  )
}

export default App