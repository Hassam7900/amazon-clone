import './App.css';
import Routers from "./component/Routers/Routers";
import {BrowserRouter as Router} from "react-router-dom";
import StateProvider from "./contextApi/contextProvider";
import { initialState, reducer } from "./contextApi/Reducers/reducer";

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <div className="App">
            <Routers/>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
