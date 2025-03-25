
import './App.css'
import Profile from './components/Profile.jsx'
import UserContextProvider from './context/userContextProvider.jsx'
import Login from './components/Login.jsx';


function App() {
  return (
    <UserContextProvider>
      <div className="border-2 p-10 rounded-2xl">
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App
