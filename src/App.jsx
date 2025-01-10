import { Route, Routes } from 'react-router-dom'
import './App.css'
import { PLayerLayout } from './Layouts/PlayerLayout'
import { Home } from './components/pages/Home'

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<PLayerLayout><Home /></PLayerLayout>} />
      <Route path="/search" element={<PLayerLayout>search</PLayerLayout>} />
      </Routes>
    </>
  )
}

export default App
