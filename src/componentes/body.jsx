import Card from './Card'

function Body({ guitarras = [] }) {
  return (
    <main className="container-xl mt-5">

      <h2 className="titulo-colaction">
        Nuestra Colección
      </h2>

      <div className="row mt-5">
        {guitarras.map((guitarra) => (
          <Card
            key={guitarra.id}
            imagen={`/img/${guitarra.image}.jpg`}
            nombre={guitarra.name}
            descripcion={guitarra.description}
            precio={guitarra.price}
          />
        ))}
      </div>
    </main>
  )
}

export default Body