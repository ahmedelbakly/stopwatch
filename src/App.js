import { useState } from "react";
import "./App.css";
import Btn from "./btn";
import Time from "./Time";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [stopped, setStopped] = useState(true)

  let mS = time.ms;
  let S = time.s;
  let M = time.m;
  let H = time.h;

  const start = () => {
    run();
    setInterv(setInterval(run, 10));
    setStopped(true)
  };
  const stop = () => {
    clearInterval(interv);
    setStopped(false)
  };
  const rest = () => {
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    setStopped(true)
  };
  const resume = () => {
    setInterv(setInterval(run, 10));
    setStopped(true)
  };

  const run = () => {
    if (mS === 60) {
      S++;
      mS = 0;
    }
    if (S === 60) {
      M++;
      S = 0;
    }
    if (M === 60) {
      H++;
      M = 0;
    }
    mS++;
    setTime({ ms: mS, s: S, m: M, h: H });
  };

 
  return (
    <div className="App">
    <div className="timer-container">
    <Time condition={time.h} />
    <Time condition={time.m} />
    <Time condition={time.s} />
    <Time condition={time.ms} />
  </div>
      <div className="btn-container">
        {!time.ms ? (
          <Btn text="start" callback={start} bg="green" color="white" />
        ) : (
          <div>
           { stopped ? <Btn text="stop" callback={stop} bg="red" color="white" />:(<> <Btn text="resume" callback={resume} bg="orange" color="white" />{" "}
           <Btn text="Rest" callback={rest} bg="blue" color="white" /></>)}
           
          </div>
        )}
      </div>
     
    </div>
  );
}

export default App;
