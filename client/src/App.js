import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux'
import './App.css';
import Alert from './components/alert/Alert'
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Role from './pages/ChooseRole/ChooseRole'
import Verify from './pages/verify/Verify'
import Profile from './pages/profile/Profile'
import Songs from './pages/songs/Songs';
import MusicPlayer from './components/musicPlayer/MusicPlayer';
import MusicPlayerPage from './pages/musicPlayerPage/MusicPlayerPage';

function App() {
  const token = useSelector(state => state?.auth?.token)
  return (
    <Router>
      <div className="App"> 
        
        <Alert />
        {token && <MusicPlayer />}
        <Switch>
          { token && 
              <Switch> 
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/profile/:id'} component={Profile}/>
                <Route exact path={'/songs'} component={Songs} />
                <Route exact path={'/:playlistId/songs'} component={Songs} />
                <Route exact path={'/songs/:id'} component={MusicPlayerPage} />
                <Route path='*'>
                  <Redirect to='/' />
                </Route>
              </Switch>
          }
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/register'} component={Register} />
            <Route exact path={'/register/role'} component={Role} />
            <Route exact path='/verify/:_id/:verificationLink/login' component={Verify} />
            <Route path='*'>
              <Redirect to='/' />
            </Route>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;
