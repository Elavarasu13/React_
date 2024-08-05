
import './App.css';
import Demo from './components/Demo';

const favPlayers= ['sachin ','rohit','kohli','dhoni'];

const color = ['red' , 'blue' ,'green' ,"black"];

function App() {
  return (
    <div className="App">
      
      {/* <ul>
        {favPlayers.map((item ,index) => (<li key ={index}>{item}</li>))}
      </ul>

      <ol>
        {color.map((item,index) => (<li key={index}>{item}</li>))}

      </ol> */}
      <Demo/>
       
    </div>
  );
}

export default App;
