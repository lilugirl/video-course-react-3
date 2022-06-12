import {useRef,useState} from 'react'
import Study from './Study'

function App() {
  const [open ,setOpen]=useState(false)

  return (
    <div className="App">
      <button onClick={()=>setOpen(true)}>打开</button>
      <Study open={open} onClose={()=>setOpen(false)} />
    </div>
  );
}

export default App;
