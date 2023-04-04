import logo from './logo.svg';
import './App.css';
import Button from "./Component/Button/button";
import HelloWorld from "./Component/HelloWorld/helloWorld";
import Post from "./Component/Post/post";
import Sidebar from "./Component/SideBar/sidebar";
import ButtonContext from "./Component/Context/buttonContext";
import UserContext from "./Component/Context/UserContext";
import Navigation from "./Component/Navigation/navigation";
import {ErrorBoundary} from "./Component/ErrorBoundary/ErrorBoundary";


function App() {
    let userData = {
        name: 'Chathuranga',
        greet: function (){
            return 'Hello ' + this.name
        },
    };

    let topBar = (
        <div>
            <a href="">Chathuranaga</a>
            <div>{userData.greet()}</div>
        </div>
    )
  return (
    <div className="container mx-auto">
        <div className='flex'>
            <div className='w-1/5'>
                {/*<Sidebar name ={topBar}>*/}
                {/*</Sidebar>*/}
                <Sidebar>
                    <div>
                        <a href=''>CHathuranga Lakshan</a>
                        <div> {userData.greet()}</div>
                    </div>
                </Sidebar>
            </div>
            <div className='w-4/5'>
             <Post/>


    </div>
        </div>
    </div>
  );
}

export default App;
