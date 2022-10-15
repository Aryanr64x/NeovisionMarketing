

import BookACall from "../components/BookACall";
import ClientWords from "../components/ClientWords";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Result from "../components/Result";


export default function Home() {
  return (
    <div className="font-nunito text-white "> 
        <Hero />
        <ClientWords />
        <Result />
        <BookACall />
        <Footer />
    
        
    </div>
  )
}
