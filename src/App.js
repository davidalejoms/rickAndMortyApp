import "./App.css"
import Card from "./components/Card/Card.jsx"
import Cards from "./components/Cards/Cards.jsx"
import Nav from "./components/Nav/Nav"
import characters, { Rick } from "./data.js"

function App() {
  return (
    <div className="App">
      <Nav />

      <Cards characters={characters} />
      {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
    </div>
  )
}

export default App
