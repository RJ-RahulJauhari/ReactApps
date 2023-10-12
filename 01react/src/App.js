import './App.css'
import Login from './Components/Login';
import Profile from './Components/Profile';
import UserContextProvider from './Context/UserContextProvider';


function App() {
  return (
    <UserContextProvider>
      <h1>React with Rahul</h1>
      <Login></Login>
      <Profile></Profile>
    </UserContextProvider>
  );
}

export default App;
