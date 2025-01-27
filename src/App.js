import TransferList from "./TransferList";
import "./App.css";
import Cart from "./components/Cart";
import Form from "./components/Form";
import TestChild from "./folderone/TestChild";
import Test from "./foldertwo/Test";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      {/* <Test/> */}
      {/* <TestChild/> */}
      {/* <Form />
      <Cart /> */}
      {/* <Todo /> */}
      <TransferList />
    </div>
  );
}

export default App;
