import logo from './logo.svg'
import './App.css'
import SalesForce from './pages/SalesForce'
import Header from './components/header/Header'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='layout'>
        <SalesForce />
      </div>
    </div>
  )
}

export default App
