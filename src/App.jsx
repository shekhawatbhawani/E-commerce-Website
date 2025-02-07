import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import SliderFirst from "./Components/SliderFirst";
import { cardsData } from "./Constant/sliderData";
import CardDetails from "./Components/CardDetails";
import OrderLocation from "./Components/OrderLocation";
import SignIn from "./Components/SignIn";
import Review from "./Components/Review";
import OrderSuccess from "./Components/Ordersuccessful ";
import About from "./Components/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/sign" element={<SignIn />} />
          <Route path="/review" element={<Review />} />
          <Route path="/order-submitted" element={<OrderSuccess />} />
          <Route path="/about" element={<About />} />

          <Route path="/ttt" element={<CardDetails />} />
          <Route path="/order" element={<OrderLocation />} />
          <Route path="/contact" element={<Contact />} />
          {cardsData.map((e, i) => (
            <Route
              key={i}
              path={`/items/${i}`} // Giving each item a unique path based on index
              element={
                <SliderFirst
                  img={e.img}
                  name={e.title}
                  cost={e.cost}
                  location={e.location}
                  distance={e.distance}
                />
              }
            />
          ))}

        <Route path="/items" element={cardsData.map((e,i)=>{
          return(
            <SliderFirst
            key={i}
            img={e.img}
            name={e.title}
            cost={e.cost}
            location={e.location}
            distance={e.distance}
          />
          )
        })}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
