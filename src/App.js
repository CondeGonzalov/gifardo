import './App.css'
import { Link, Route } from 'wouter'
import searchResult from './pages/SearchResult'
import Home from './pages/Home'
import Detail from './pages/Detail'
import logo from './logo-gifardo.png'
import Container from '@material-ui/core/Container'

export default function App() {
  

  return (
    <div className="App">
      <Container className="App-content">
        <Link to='/'>
          <img className="App-logo" src={logo} alt="" />
        </Link>
        
        <Route 
          component={Home}
          path='/'
        />
        <Route 
          component={searchResult}
          path='/search/:keyword'
        />
        <Route 
          component={Detail}
          path='/gif/:id'
        />
      </Container>
    </div>
    
  )
}

