import Header, { HeaderPhone } from "./Components/Header";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Timeline from "./Components/Timeline";
import Services from "./Components/Services";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";

// import "./Style/app.scss";
// import "./Style/header.scss";
// import "./Style/home.scss";
// import "./Style/footer.scss";
// import "./Style/contact.scss";
// import "./Style/mediaquery.scss";
// import "./Style/services.scss";
// import "./Style/testimonial.scss";
// import "./Style/work.scss";


function App() {
  

  return  (
    <>
      <HeaderPhone  />
      <Header  />
      <Home  />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) 
}

export default App;
