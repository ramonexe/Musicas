import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { GlobalStyles } from './styles/globals'
import ListaMusicas from './pages/ListaMusicas'
import { ToastContainer } from 'react-toastify'
import AdicionarMusica from './pages/AdicionarMusica'

function App() {

  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<ListaMusicas/>} />
        <Route path="/adicionar" element={<AdicionarMusica />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App