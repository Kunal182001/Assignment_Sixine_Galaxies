import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/home/Home'
import Products from './components/Whyyourproduct/Products'
import Bestseller from './components/Bestseller/Bestseller'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import Loading from './components/Loadingscreen/Loading'


function App() {
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    const loadingscreen = setTimeout(() => {
      setisloading(false);
    }, 5000)

    return () => clearTimeout(loadingscreen);
  }, []);

  return (
    <>
      {isloading ? <Loading onComplete={() => setisloading(false)} /> :
        <>
          <Home />
          <Products />
          <Bestseller />
          <FAQ />
          <Footer />
        </>
      }
    </>
  )
}

export default App
