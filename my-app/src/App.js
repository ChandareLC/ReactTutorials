import logo from './logo.svg';
import './App.css';
import Button from "./Component/Button/button";
import HelloWorld from "./Component/HelloWorld/helloWorld";
import Post from "./Component/Post/post";
import Sidebar from "./Component/SideBar/sidebar";
import ButtonContext from "./Component/Context/buttonContext";
import UserContext from "./Component/Context/UserContext";


function App() {
    let userData = {
        name: 'Chathuranga',
        greet: function (){
            return 'Hello ' + this.name
        }
    }
  return (
    <div className="container mx-auto">
        <div className='flex'>
            <div className='w-1/5'>
           <ButtonContext.Provider value='Chathuranga Lakshan Context'>
               <UserContext.Provider value={userData}>
                <Sidebar />
               </UserContext.Provider>
           </ButtonContext.Provider>
            </div>
       <div className='w-4/5'>
             <Post/>


    </div>
        </div>
    </div>
  );
}

export default App;
