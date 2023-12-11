import './App.css';
import DoneRemainingStatus from './Components/DoneRemainingStatus';
import ArrayExample from './Components/ArrayExample';
import ConditionalRenderingExample from './Components/ConditionalRenderingExample';
import ToggleButton from './Components/ToggleButton';

function App() {
  return (
    <div className="App">
      <DoneRemainingStatus />
      <hr />
      <hr />
      <hr />
      <ArrayExample/>
      <hr />
      <hr />
      <hr />
      <ConditionalRenderingExample/>
      <hr />
      <hr />
      <hr />
      <ToggleButton/>
    </div>
  );
}

export default App;
