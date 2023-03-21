import logo from './logo.svg';
import './App.css';
import Button from "./Component/Button/button";
import HelloWorld from "./Component/HelloWorld/helloWorld";

function App() {
  return (
    <div className="container mx-auto">
      <Button name='First Button'/>
        <HelloWorld text="Hello World Good Morining "/>


    </div>
  );
}

export default App;
