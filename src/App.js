import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from './templates/MainTemplate';
import SteamStat from './pages/SteamStats/SteamStat';
import landing from './pages/Landing/landing';
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <MainTemplate exact path="/" Component={SteamStat}/>
      <Route path="/landing" component={landing}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
