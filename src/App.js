import "./App.css";
import {useSelector,  useDispatch} from "react-redux";
import {incNumber, decNumber} from "./actions/index"

function App() {

  //Selector current state ko le k ai ga by using selector hook
  const myState = useSelector(state => state.changeTheNumber)

  // Dispatch action ko trigger krta ha by using dispatch hook
  const dispatch = useDispatch();


  return (
    <>
      <div className="container">
        <h1>Increment and Decrement Counter</h1>
        <h4>Using React and Redux</h4>

        <div className="quantity">
          <button className="quantity_minus" title="Decrement" onClick={ ()=> dispatch(decNumber())}>
            {" "}
            <span>-</span>
          </button>
          <input name="quantity" type="text" className="quantity_input" value={myState} />
          <button className="quantity_plus" title="Increment" onClick={ ()=> dispatch(incNumber(5)) }>
            {" "}
            <span>+</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
