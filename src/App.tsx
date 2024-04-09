import './App.css';
import RtkPostList from './components/RtkPostList';
import UserList from './components/UserList';

const App = () => {
  return (
    <div className="App">
      <h2>Cimas</h2>
      {/* <UserList/> */}
      <RtkPostList/>
    </div>
  );
}

export default App;
