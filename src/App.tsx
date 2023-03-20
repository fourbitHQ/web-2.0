import About from './components/About'
import Features from './components/Features'
import FooterSection from './components/Footer'
import HeaderSection from './components/Header'
import Hero from './components/Hero'
import NewsLetter from './components/NewsLetter'
import Pricing from './components/Pricing'
import Projects from './components/Projects'
import Services from './components/Services'

function App() {

  return (
    <div>
      <HeaderSection/>

    {/* <!-- Start creasoft-wrap section --> */}
    <main className="creasoft-wrap">

        {/* <!-- Start line animation section --> */}
        <div className="line_wrap">
            <div className="line_item"></div>
            <div className="line_item"></div>
            <div className="line_item"></div>
            <div className="line_item"></div>
            <div className="line_item"></div>
        </div>
        {/* <!-- End line animation section --> */}

        <Hero/>
        {/* <Services/> */}
        <About/>
       <Features/>
        <Projects/>
        <Pricing/>
        <NewsLetter/>
        <FooterSection/>

    </main>

</div>
  )
}

export default App
