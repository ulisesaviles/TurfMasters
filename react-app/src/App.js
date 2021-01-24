import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import { Bounce } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Bounce>
          <img src={logo} className="App-logo test" alt="logo" />
        </Bounce>
        <Counter />
        <Slide direction="right">
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
          <h3>Me gusta Daniela</h3>
        </Slide>
      </header>
    </div>
  );
}

export default App;
