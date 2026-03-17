import Counter from './Counter'
import './App.css'
import Batsman from './Batsman'
import Users from './Users'
import { Suspense } from 'react'
import Friends from './Friends'

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())


const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json();
}

function App() {

  const friendsPromise = fetchFriends();

  const handleClick = () => {
    alert('I am clicked')
  }

  return (
    <>
      <section id="center">
        <h3>Vite + React</h3>

        <Suspense fallback={<h3>Loading...</h3>}>
          <Friends friendsPromise={friendsPromise}></Friends>
        </Suspense>

        <Suspense fallback={<h3>Loading...</h3>}>
          <Users fetchUsers={fetchUsers}></Users>
        </Suspense>

        <Counter></Counter>
        <Batsman></Batsman>
        {/* <button>Click Me</button> */}
        <button onClick={handleClick}>Click Me</button>
      </section>

    </>
  )
}

export default App
