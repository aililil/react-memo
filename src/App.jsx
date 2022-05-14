import './App.css';
import Frame from './components/Frame';
import Calendar from './components/Calendar'
import Picker from './component/Picker'

function App () {
  return (
    <div className="App">
      <Picker dataArry={[1, 2, 3, 4, 5, 6, 7]} />
      <Frame />
      <Calendar />
    </div>
  );
}

export default App;
