import { Hero } from "./_components/hero";
import { About } from "./_components/about";
import { Services } from "./_components/services";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './globals.css'; // Mantenha a importação do seu CSS global

// ... o restante do seu componente Layout
export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
    </main>
  )
}