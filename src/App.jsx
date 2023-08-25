import './App.css'
import { Route , Routes } from 'react-router-dom'
import Tokenaddress from './components/Token/Tokenaddress'
import PairAddress from './components/Pair/PairAddress'
import Redirect from './components/Redirect/Redirect'
import Sidebar from './components/Sidebar/Sidebar'
function App() {
  return (
    <>
    <Sidebar />
     <Routes>
      <Route path='/' element={<Redirect/>} />
      <Route path='/token' element={<Tokenaddress />} />
      <Route path='/pair' element={<PairAddress />} />
     </Routes>
    </>
  )
}

export default App
