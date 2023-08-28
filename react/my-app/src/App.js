import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Message from './components/Message'
import FunctionClick from './components/FunctionClick' 
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import FunctionalCounter from './components/FunctionalCounter';
import Products from './components/Products';
import Form from './components/Form'


function App() {
  return (
    <div className="App">
      {/* {/* <Greet name='shi' age= '2' />
      
      <Greet name= 'tshego' age= '4'>
        <p>
          this is children props
        </p>
      </Greet>

      <Greet name= 'rati' age= '6'>
        <button> Click me</button> 
      </Greet>

      <Welcome name='ot' position='17'/>
      <FunctionClick/>
      <ClassClick/> 
      <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <NameList /> */}
      {/* < StyleSheet primary= {true}/> */}
      {/* <FunctionalCounter /> */}
      {/* <Products></Products> */}
      <Form />
      




    </div>

  );
}

export default App;
