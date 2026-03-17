import Counter from './Counter'
import './App.css'
import Batsman from './Batsman'
import Users from './Users'

function App() {

  const handleClick = () => {
    alert('I am clicked')
  }

  return (
    <>
      <section id="center">
        <h3>Vite + React</h3>

        <Users></Users>

        <Counter></Counter>
        <Batsman></Batsman>
        {/* <button>Click Me</button> */}
        <button onClick={handleClick}>Click Me</button>
      </section>

    </>
  )
}

export default App
