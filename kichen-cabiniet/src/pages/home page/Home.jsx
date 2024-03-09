import Navbar from '../../components/home-component/navbar-section/Navbar'
import Hero from '../../components/home-component/hero -section/Hero'
import Featured from '../../components/home-component/featured-products/Featured'


import './home.css'
import Testimonials from '../../components/home-component/testimonials-section/Testimonials'
import Call from '../../components/home-component/call to action/Call'
import Footer from '../../components/home-component/footer-section/Footer'



function Home() {
  return (
    <div>
        
        <Navbar/>
        <Hero/>
        <Featured/>
        <Testimonials/>
        <Call/>
        <Footer/>
    </div>
  )
}

export default Home;