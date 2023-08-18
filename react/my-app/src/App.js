import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name='shi' age= '2' />
      
      <Greet name= 'tshego' age= '4'>
        <p>
          this is children props
        </p>
      </Greet>

      <Greet name= 'rati' age= '6'>
        <button> Click me</button> 
      </Greet>
    </div>
  );
}

export default App;
