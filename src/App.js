import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from './templates/MainTemplate';
import SteamStat from './pages/SteamStats/SteamStat';
import Landing from './pages/Landing/landing';
import Nav from './pages/Nav/Nav';
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <MainTemplate exact path="/" Component={SteamStat}/>
      <Route path="/landing" component={Landing}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
