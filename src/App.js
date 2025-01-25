import "./App.css";
import Cart from "./components/Cart";
import Form from "./components/Form";
import TestChild from "./folderone/TestChild";
import Test from "./foldertwo/Test";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      {/* <Test/> */}
      {/* <TestChild/> */}
      {/* <Form />
      <Cart /> */}
      <Todo/>
    </div>
  );
}

export default App;
