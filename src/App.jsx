import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import TopBar from "./Components/TopBar";
import Home from "./Components/Home";
import EditProfile from "./Components/EditProfile";
function App() {
  return (
    <div className="bg-dark">
      <TopBar />
      <Home />
      <Footer />
      {/* <EditProfile /> */}
    </div>
  );
}

export default App;
