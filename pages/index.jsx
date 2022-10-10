import BookCall from "../components/BookCall";
import ClientWords from "../components/ClientWords";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="font-nunito text-white "> 
        <Hero />
        <ClientWords />
        <Footer />
        {/* <BookCall /> */}
        
    </div>
  )
}
