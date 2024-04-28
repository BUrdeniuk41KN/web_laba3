
import TraficLight from './Components/Trafic_Lights/Trafic_Light' 

function App() {
  return (
    <div className="App">
      {/* Params  (Red, Yelow, Green)*/}
      <TraficLight tlColorDef = "Red" typeOne = "vertical" typeTwo = "horizontal"/>
    </div>
  );
}

export default App;
