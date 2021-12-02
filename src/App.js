import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from './pages/Dashboard';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/dashboard' exact component={Dashboard}/>
                <Route path='/signin' exact component={Login}/>
                <Route path='/signup' component={Registration}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
