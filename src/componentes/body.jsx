import Card from './Card'

function Body() {
  return (
    <main className="container-xl mt-5">

      <h2 className="titulo-colaction">
        Nuestra Colección
      </h2>

      <div className="row mt-5">
        
            <Card
                imagen="/img/guitarra_02.jpg"
                nombre="Borland"
            />
            <Card
                imagen="/img/guitarra_03.jpg"
                nombre="Vai"
            />
            <Card
                imagen="/img/guitarra_04.jpg"
                nombre="Thompson"
            />
            <Card
                imagen="/img/guitarra_05.jpg"
                nombre="Cobain"
            />
       
        
        </div>
    </main>
  )
}

export default Body