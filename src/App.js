import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Payment from "./pages/Payment"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import "./style/Footer/footer.css"
import "./style/Header/header.css"
import "./style/App.css"

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/Payment" element={<Payment/>}/>
        </Routes>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
