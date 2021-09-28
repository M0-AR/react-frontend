import './App.css';
import Login from "./Login";
import Sidebar  from './component/dashboard/Sidebar';
import Container from './component/dashboard/Container';
import Header from './component/dashboard/Header';

function App() {
  return (
    <div>
      <div className="flex w-screen h-screen" >
        <Sidebar />
        <div className="w-screen ">
          <Container />
          <Header />
        </div>
      </div>

    </div>
  );
}

export default App;
