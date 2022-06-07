import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Meme from './Components/Meme'
import Counter from './Components/Counter'
import ReactSate from './Components/ReactState';
import { BrowserRouter as Router, Link, Route, Routes  } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <header >
          <Header></Header>
          <Meme></Meme>
          <Link to="/game"></Link>
           <Routes> 
            <Route path='/re-state' element={<ReactSate />}>
            </Route>
            <Route path='/counter' element={<Counter />}>
            </Route>
         </Routes> 
        </header>
      </div>
    </Router>
  );
}

export default App;
