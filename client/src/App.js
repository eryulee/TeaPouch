import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllTeas, postTea, deleteTea, putTea } from '../services/teas';
import { getAllFlavors } from '../services/flavors';
import Flavors from './screens/Flavors';
import Teas from './screens/Teas';
import TeaCreate from './screens/TeaCreate';
import TeaEdit from './screens/TeaEdit';
import TeaDetail from './screens/TeaDetail';
import './App.css';
import Login from './screens/Login';
import Register from './screens/Register';



function App() {
  const [teas, setTeas] = useState([]);
  const [flavors, setFlavors] = useState([]);
  const history = useHistory()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

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
  
  return (
    <div className="App">
      


      <Switch>
          <Route path='/flavors'>
            <Flavors flavors={flavors} />
        </Route>
        <Route path='/teas/:id/edit'>
          {currentUser ? <TeaEdit teas={teas} handleTeaUpdate={handleTeaUpdate} /> : handleRedirect}
        </Route>
        <Route path='/teas/:id'>
          <TeaDetail flavors={flavors} currentUser={currentUser}
            handleRedirect={handleRedirect}/>
        </Route>
        <Route path='/teas/new'>
          {user ? <TeaCreate handleTeaCreate={handleTeaCreate} /> : handleRedirect}
        </Route>
        
      <Route path='/teas'>
        <Foods teas={teas} handleTeaDelete={handleTeaDelete} />
      </Route>
        
          <Route path='/login'>
            <Login handleLogin={handleLogin} />
          </Route>
          <Route path='/register'>
            <Register handleRegister={handleRegister} />
          </Route>
          <Route path='/'>
            <Home currentUser={currentUser}/>
          </Route>
        </Switch>
        
     
    </div>
  );
}

export default App;
