import './Dashboard.css';
import { Link } from 'react-router-dom';

function Dashboard () {

  return (
    <div className="dashboard-container">
        <Link to='/posts'>
          <button className="dashboard-button" type="button">Open posts list</button>
        </Link>
    </div>
  )
}

export default Dashboard;
