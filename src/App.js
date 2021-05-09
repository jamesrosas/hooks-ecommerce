import './App.css';
import DarkMode from './components/DarkMode'
import Facts from './components/Facts';

function App() {
  return (
   <div className="master-container">
     <header>
       <h1>Tha E commerce</h1>
       <DarkMode/>
     </header>
       <Facts className="facts-container"/>
   </div>
  );
}

export default App;
