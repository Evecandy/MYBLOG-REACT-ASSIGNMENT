import NavBar from "./components/NavBar";
import SideBar from "./components/Sidebar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Style from "./Style.css";
import gif from "./gif.gif";

function App() {
  return (
    <div className="gridContainer">
       <img src={gif} />
      <div className="NavBar">
      <NavBar />
     </div>

      <div className="SideBar">
      <SideBar />
      </div>
      <div className="Content">
      <Content />
      </div>
      <div className="Footer">
      <Footer />
      </div>
    </div>

  ) ;
}

export default App;
