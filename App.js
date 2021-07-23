import './App.css';
import avatar from './assets/Signup.jpg';
import { Signup } from './components/Signup';
import { Confirmation } from './components/Confirmation';
function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
          <img className="img-fluid w-100" src={avatar} alt=""/>
        </div>

      </div>
    </div>
  );
}

export default App;
