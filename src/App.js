import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './pages/Login/Login';

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
