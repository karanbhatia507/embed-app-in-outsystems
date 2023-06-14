import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateCount } from '../../redux/slice';
import reactLogo from '../../assets/react.svg';
import { useInterval } from '../../hooks/useInterval';
import './App.css'

const App = () => {
  const [activity, setActivity] = React.useState("");
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  function incrementCount() {
    dispatch(updateCount(count+1));
  }

  function resetCount() {
    dispatch(updateCount(0));
  }

  // useInterval(() => fetch('https://www.boredapi.com/api/activity').then(data => data.json()).then(data => setActivity(data.activity)), 5000);

  return (
    <div>
    <h1>Hello world! This react app is embedded here.</h1>
    <a>
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
    <p>This app also persists it's state. Don't believe me? Try refreshing the page after incrementing the count.</p>
    <div className='count'>
      <button id='incrementBtn' onClick={incrementCount}>Increment count</button>
      <span>Count: {count}</span>
      <button id='resetBtn' onClick={resetCount}>Reset count</button>
    </div>
    {/* <div className='activity'>Feeling Bored? Here's an activity for you: <b><i><u>{activity}</u></i></b></div> */}
    </div>
  );
};

export default App;
