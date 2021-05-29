import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from './templates/MainTemplate';
import SteamStat from './components/SteamStats/SteamStat';
import intro from './pages/IntroPage/intro';
import Nav from './pages/Nav/Nav';
import 'antd/dist/antd.css';
import MostPlayedGame from './components/SteamStats/MostPlayedGame';
import SteamStatPage from './pages/SteamStat/SteamStatPage';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <MainTemplate exact path="/" Component={SteamStatPage}/>
      <MainTemplate exact path="/most-played" Component={MostPlayedGame} />
      <Route path="/intro" component={intro}/>
    </Switch>
    </BrowserRouter>

  );
}

export default App;
