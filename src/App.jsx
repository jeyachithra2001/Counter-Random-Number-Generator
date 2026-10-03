import { useState } from "react"
import Navbar from "./components/nav"
import Counter from "./pages/counter"
import RandomNum from "./pages/randomNum"
import Sidebar from "./components/sidebar"

function App() {

  const [page, setPage] = useState("counter")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <Navbar setPage={setPage} setSidebarOpen={setSidebarOpen} />
      {/* MOBILE NAVBAR */}
      <Sidebar setPage={setPage} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main>
        {page === "counter" && <Counter />}
        {page === "random" && <RandomNum />}
      </main>

    </>
  )
}

export default App
