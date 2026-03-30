import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Models from './components/Models'
import ModelsHeader from './components/ModelsHeader'
import Navbar from './components/Navbar'
import ParchedCard from './components/ParchedCard'
import Stats from './components/Stats'
import Tools from './components/tools'
import TransparentPricing from './components/TransparentPricing'

const getModels = async () => {
  const res = await fetch("/data.json")
  return res.json()
}
const modelPromise = getModels()


function App() {


  const [acitveTab, setActiveTab] = useState("products")
  const [cards, setCards] = useState([])




  return (

    <>
      <Navbar></Navbar>
      <Hero />
      <Stats />
      <ModelsHeader />

      <div>
        {/* name of each tab group should be unique */}
        <div className="tabs tabs-box justify-center bg-transparent">
          <input type="radio" name="my_tabs_1" className="tab rounded-full" aria-label="Products" onClick={() => setActiveTab("products")} defaultChecked />


          <input type="radio" name="my_tabs_1" className="tab rounded-full" aria-label={`Card(${cards.length})`} onClick={() => setActiveTab("cards")} />
        </div>
      </div>

      {acitveTab === "products" && <Models modelPromise={modelPromise} cards={cards} setCards={setCards} />}

      {acitveTab === "cards" && <ParchedCard cards={cards} setCards={setCards} />}

      <Tools />
      <TransparentPricing />
      <Footer />
    </>
  )
}

export default App
