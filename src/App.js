import logo from './logo.svg';
import Header from './components/header_component/Header';
import JsonView from './components/json_viewer/react_json_view';
import './styles/App.css';


function App() {
  
  return (
    <div style={{height: '100vh', backgroundColor: 'rgb(39, 40, 34)'}}>
      <Header />
      <div>
      <JsonView/>
      </div>
    </div>
    
  );
}

export default App;
