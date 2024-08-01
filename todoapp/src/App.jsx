import react from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Todo from './Components/Todo/Todo'


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Todo/>
      <Footer/>
    </div>
  )
}

export default App
