import logo from './logo.svg';
import './App.css';
import Button from "./Component/Button/button";
import HelloWorld from "./Component/HelloWorld/helloWorld";
import Post from "./Component/Post/post";
import Sidebar from "./Component/SideBar/sidebar";


function App() {
  return (
    <div className="container mx-auto">
        <div className='flex'>
            <div className='w-1/5'>

                <Sidebar name='Chathuranga Lakshan'></Sidebar>
            </div>
       <div className='w-4/5'>
             <Post/>


    </div>
        </div>
    </div>
  );
}

export default App;
