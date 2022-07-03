import React from 'react';
import { Child } from './components/STATE_LIFTING/Child';



function App() {
  const data ="I an from parent";
  return (
    <div>
      <Child data={data}/>
    </div>
  
  )
}

export default App