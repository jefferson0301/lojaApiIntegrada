

import './App.css'
import Principal from './pages/Principal'
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Header from './Components/comons/Header';
import Footer from './Components/comons/Footer';


function App() {
  

  return (
    
      // 

      <>
        <BrowserRouter>
          <Header />  
          <Routes>
              <Route path="/" element={ <Principal/> } />
              {/* <Route path="/produto/:id" element={ <Produto  /> } /> */}
              <Route path="*" element={<Principal />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        
      </>
    
  )
}

export default App