import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import reactLogo from "../../assets/react.svg";
import { useInterval } from "../../hooks/useinterval";
import { updateCount } from "../../redux/slice";
import "./App.css";

const App = () => {
  const [activity, setActivity] = React.useState("");
  const [inputData, setInputData] = React.useState("");
  const [dataReceivedFromOutsystems, setDataReceivedFromOutsystems] =
    useState("");
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  function incrementCount() {
    dispatch(updateCount(count + 1));
  }

  function resetCount() {
    dispatch(updateCount(0));
  }

  useInterval(
    () =>
      fetch("https://www.boredapi.com/api/activity")
        .then((data) => data.json())
        .then((data) => setActivity(data.activity)),
    5000
  );

  function handleSubmit() {
    passDataToOutsystems(inputData);
    window.mycustomevent(inputData);
  }

  const getDataFromOutsystems = (data) => {
    setDataReceivedFromOutsystems(data);
  };

  const passDataToOutsystems = (data) => {
    return data;
  };

  useEffect(() => {
    window.getDataFromOutsystems = getDataFromOutsystems;
    window.passDataToOutsystems = passDataToOutsystems;
  }, []);

  return (
    <div>
      <h1>Hello world! This react app is embedded here.</h1>
      <a>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      {dataReceivedFromOutsystems && (
        <span className="dataFromOutsystems">{dataReceivedFromOutsystems}</span>
      )}
      <p>
        This app also persists it's state. Don't believe me? Try refreshing the
        page after incrementing the count.
      </p>
      <div className="count">
        <button id="incrementBtn" onClick={incrementCount}>
          Increment count
        </button>
        <span>Count: {count}</span>
        <button id="resetBtn" onClick={resetCount}>
          Reset count
        </button>
      </div>
      <div className="activity">
        Are you feeling bored??? Here's an activity for you:{" "}
        <b>
          <i>
            <u>{activity}</u>
          </i>
        </b>
      </div>
      <br />
      <div className="passData">
        <input
          type="text"
          placeholder="Enter data to be passed into Outsystems"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button className="sendDataBtn" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  );
};

export default App;
