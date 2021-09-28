import Sidebar  from '../components/dashboard/Sidebar';
import Container from '../components/dashboard/Container';
import Header from '../components/dashboard/Header';

function Dashboard() {
  return (
    <div>
      <div className="flex w-screen h-screen" >
        <Sidebar />
        <div className="w-screen ">
          <Header />
          <Container />
        </div>
      </div>
    </div>
    );
}

export default Dashboard;