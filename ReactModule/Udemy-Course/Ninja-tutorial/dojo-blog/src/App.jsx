import Navbar from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'

const App = () => {
  
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="content">
          <Home/>
        </div>
      </div>
    </>
  )
}

export default App
