

import './App.css'
import Principal from './pages/Principal'
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from './Components/comons/Header';
import Footer from './Components/comons/Footer';
import Carrinho from './pages/Carrinho';
import ContactUs from './pages/ContactUs';


function App() {
  

  return (
    
      // 

      <>
        <BrowserRouter>
          <Header />  
          <Routes>
              <Route path="/" element={ <Principal/> } />
              <Route path="/carrinho" element={ <Carrinho/> } /> 
              <Route path="/contato" element={ <ContactUs/> } /> 
              <Route path="*" element={<Principal />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        
      </>
    
  )
}

export default App
