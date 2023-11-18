import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import "./index.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Presentation from "./components/Presentation";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Presentation />
      <Categories />
      <Items />
      <About />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
