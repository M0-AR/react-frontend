import './App.css';
import Sidebar  from './component/dashboard/Sidebar';
import Container from './component/dashboard/Container';
import Header from './component/dashboard/Header';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

// function App() {
//   return (
//     <div>
//       <div className="flex w-screen h-screen" >
//         <Sidebar />
//         <div className="w-screen ">
//           <Header />
//           <Container />
//         </div>
//       </div>



function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/booking' exact component={Booking}/>
                <Route path='/about' exact component={About}/>
                <Route path='/signin' exact component={Login}/>
                <Route path='/signup' component={SignUp}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
