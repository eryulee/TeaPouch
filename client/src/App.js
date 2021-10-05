import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllTeas, postTea, deleteTea, putTea } from './services/teas';
import { getAllFlavors } from './services/flavors';
import Flavors from './screens/Flavors';
import Teas from './screens/Teas';
import TeaCreate from './screens/TeaCreate';
import TeaEdit from './screens/TeaEdit';
import TeaDetail from './screens/TeaDetail';
import './App.css';
import Login from './screens/Login';
import Register from './screens/Register';
import { verifyUser, loginUser, registerUser, removeToken } from './services/auth';
import Home from './screens/Home.jsx'




function App() {
  const [teas, setTeas] = useState([]);
  const [flavors, setFlavors] = useState([]);
  const history = useHistory()
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setCurrentUser(user) : setCurrentUser(null)
    }
    fetchUser()
  }, [])

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  useEffect(() => {
    const fetchTeas = async () => {
      const teaList = await getAllTeas();
      setTeas(teaList);
    };
    fetchTeas();
  }, []);

  useEffect(() => {
    const fetchFlavors = async () => {
      const flavorList = await getAllFlavors();
      setFlavors(flavorList);
    };
    fetchFlavors();
  }, []);

  const handleTeaCreate = async (teaData) => {
    const newTea = await postTea(teaData);
    setTeas((prevState) => [...prevState, newTea]);
    history.push('/teas');
  };

  const handleTeaDelete = async (id) => {
    await deleteTea(id);
    setTeas((prevState) => prevState.filter((teaItem) => teaItem.id !== id));
  };

  const handleTeaUpdate = async (id, teaData) => {
    const updatedTea = await putTea(id, teaData);
    setTeas((prevState) =>
      prevState.map((tea) => {
        return tea.id === Number(id) ? updatedTea : tea;
      })
    );
    history.push('/teas');
  };

  const handleRedirect = () => {
    history.push('/sign-in')
    alert('Please sign in first')
  }

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };
  
  return (
    <div className="App">
      


      <Switch>
          <Route path='/flavors'>
          <Flavors flavors={flavors} handleLogout={handleLogout} handleVerify={handleVerify} currentUser={currentUser}/>
        </Route>
        <Route path='/teas/:id/edit'>
          {currentUser ? <TeaEdit teas={teas} handleTeaUpdate={handleTeaUpdate} handleLogout={handleLogout} /> : handleRedirect}
        </Route>
        <Route path='/teas/:id'>
          <TeaDetail flavors={flavors} currentUser={currentUser}
            handleRedirect={handleRedirect}/>
        </Route>
        <Route path='/teas/new'>
          {currentUser ? <TeaCreate handleTeaCreate={handleTeaCreate} handleLogout={handleLogout} /> : handleRedirect}
        </Route>
        
      <Route path='/teas'>
        <Teas teas={teas} handleTeaDelete={handleTeaDelete} handleLogout={handleLogout} />
      </Route>
        
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path='/'>
          <Home currentUser={currentUser} handleLogout={handleLogout}/>
          </Route>
        </Switch>
        
     
    </div>
  );
}

export default App;
