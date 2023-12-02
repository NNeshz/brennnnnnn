import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Proposal } from './components/Proposal'
import { WeddingDate } from './components/WeddingDate'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Proposal />} />
          <Route path="/she-said-yes" element={<WeddingDate />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
