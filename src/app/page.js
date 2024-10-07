import CardsSection from './_Components/card'
import Footer from './_Components/Footer'
import Header from './_Components/Header'
import Hero from './_Components/hero'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" dir="rtl">
  <Header/>
      <main className="pt-32"> 
      <Hero/>
      <CardsSection/>
      </main> 
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}