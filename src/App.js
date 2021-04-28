import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import MainTemplate from './templates/MainTemplate';
import SteamStat from './pages/SteamStats/SteamStat';
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <MainTemplate exact path="/" Component={SteamStat}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
