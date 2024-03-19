import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation";
import Footer from "./customer/components/footer/Footer";
import HomePage from "./customer/pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
       <HomePage/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
