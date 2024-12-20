import { useState } from "react"



function App() {
  const [count, setCount] = useState(0)
  const increase = () => {
    setCount(count + 1)
  }
  const reset = () => {
    setCount(0)
  }
  const decrease = () => {
    setCount(count - 1)
  }
  return (

    <div className=" h-screen">
      
      <div className=" flex justify-center text-4xl pt-10">
        <h1 >COUNTER: {count}</h1>
      </div>
      <div className="w-full h-[80vh] flex justify-evenly pt-40 items-center text-3xl">
        <button onClick={increase} className=" w-[8%]  border border-black rounded-full"> + </button>
        <button onClick={reset} className=" w-[8%] border border-black rounded-full"> 0 </button>
        <button onClick={decrease} className=" w-[8%] border border-black rounded-full"> - </button>
      </div>
      
    </div>
  )
}

export default App