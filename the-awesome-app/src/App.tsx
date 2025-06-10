//import Message from "./components/Message"

import Counter from "./components/Counter"

function App() {
  
  return (
    <div>
      <h3>React Vite App</h3>
      {/* <Message text="React" color="blue"/>
      <Message text="Vite" color="red"/> */}

      <Counter initialValue={5} />
      {/* <Counter initialValue={10} /> */}
      
    </div>
  )
}

export default App
