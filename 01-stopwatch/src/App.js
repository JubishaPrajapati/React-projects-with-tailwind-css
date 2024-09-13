// import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <div className='flex flex-col items-center justify-center py-8'>
        <h1 className='text-3xl font-semibold'>01-StopWatch</h1>

        <div className='text-xl font-semibold py-4'>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span> {/*converts the time from milliseconds to minutes. */}
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>  {/*converts the time from milliseconds to sec. */}
          <span>{("0" + ((time / 10) % 100)).slice(-2)} </span>             {/*converts the time from milliseconds to centisec. */}
        </div>

        <div className='w-1/3 max-w-sm flex flex-row justify-evenly'>
          {/* to show stop button only when start is clicked so using ternary operator */}
          {running ? (<button className='bg-red-600 text-white border-2 border-black rounded-lg py-1 px-4' onClick={() => { setRunning(false) }}>Stop</button>) : 
          (<button className='bg-green-600 text-white border-2 border-black rounded-lg py-1 px-4' onClick={() => { setRunning(true) }}>Start</button>)}

          <button className='bg-blue-800 text-white border-2 border-black rounded-lg py-1 px-4' onClick={() => { setTime(0) }}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
