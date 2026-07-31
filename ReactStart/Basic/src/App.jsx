import CoreConcepts from "./Components/CoreConcepts"
import Header from "./Components/Header"
import Examples from "./Components/Examples"

function App() {

  return (
    <div>
      <Header/>
      <main className="w-[90%] max-w-4xl m-auto ">
        <CoreConcepts/>
        <Examples/>
      </main>
    </div>
  )
}

export default App
