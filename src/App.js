import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/navigationBar";
import Banner from "./img/1.png";
import BodyContent from "./components/bodycontent";
import Footer from "./components/footer";


function App() {
  return (
    <div className="App">
      {/* <img src={Banner} alt="" width={400}   /> */}
      <NavigationBar img={Banner}></NavigationBar>
      <BodyContent></BodyContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
