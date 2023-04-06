import './App.css';
import A from './ChildToParent/A';
import One from './parentToChild/One';


function App() {
  return (
    <div className="App">

      <div className='Div'>
        <h2><u>Parent to Child</u></h2>
        <One/>
      </div>
      <div className='Div'>
      <h2><u>Child to Parent</u></h2>
        <A/>
      </div>
    </div>
  );
}

export default App;
