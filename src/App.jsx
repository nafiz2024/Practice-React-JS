import Counter from './counter'
import './App.css'

function App() {

  const handleClick = () => {
    alert('I am clicked')
  }

  return (
    <>
      <section id="center">
        <h3>Vite + React</h3>
        <Counter></Counter>
        {/* <button>Click Me</button> */}
        <button onClick={handleClick}>Click Me</button>
      </section>

    </>
  )
}

export default App
