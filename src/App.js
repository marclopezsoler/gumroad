import "./App.scss";
import Header from "./assets/Header";
import LandingContainer from "./components/LandingContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="item_1" >
        <LandingContainer/>
        <LandingContainer />
      </div>
    </div>
  );
}

export default App;
