import Header from './componentes/header.jsx'
import Body from './componentes/body.jsx'
import Footer from './componentes/footer.jsx'
import Card from './componentes/card.jsx'
import BtCarrito from './componentes/botoncarrito.jsx'
import { db } from './db'        


function App() {
  return (
    <>
      <Header />
      <Body guitarras={db}/>
      <Footer />
      
    </>
  )
}

export default App