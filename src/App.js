import logo from './logo.svg';
import Header from './components/header_component/Header';
import JsonView from './components/json_viewer/react_json_view';
import './styles/App.css';


function App() {
  
  return (
    <div>
      <Header />

    <div className="Content-padding" style={{paddingTop: '2%'}}>
      <div>
      <div className="mdc-card"> 
        <h1 className="Geneial-Title">HGSC Sample Data</h1>
        <p className="Geneial-Body">testing a  test font to test if it will do what the test is supposed to do</p>
        <JsonView />
        </div>
        </div>
      
    </div></div>
    
  );
}

export default App;
