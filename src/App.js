import TransferList from "./TransferList";
import "./App.css";
import Cart from "./components/Cart";
import Form from "./components/Form";
import TestChild from "./folderone/TestChild";
import Test from "./foldertwo/Test";
import Todo from "./Todo";
import Testing from "./Testing";
import Slider from "./components/Slide/Slider";
import Parent from "./components/PropsVal/Parent";
import Ref from "./components/Ref";

function App() {
  return (
    <div className="App-header">
      {/* <Test/> */}
      {/* <TestChild/> */}
      {/* <Form />
      <Cart /> */}
      {/* <Todo /> */}
      {/* <TransferList /> */}
      {/* <Testing /> */}

      {/* <Slider/> */}
      {/* <Parent/> */}
      <Ref />
    </div>
  );
}

export default App;
