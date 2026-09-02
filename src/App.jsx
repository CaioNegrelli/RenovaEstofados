import ComoFunciona from './components/ComoFunciona'
import Contato from './components/Contato'
import Diferenciais from './components/Diferenciais'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import QuemSomos from './components/QuemSomos'
import Servicos from './components/Servicos'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <QuemSomos />
        <Servicos />
        <ComoFunciona />
        <Contato />
      </main>
      <Footer />
    </div>
  )
}

export default App
