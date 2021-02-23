import React, { Component, useState,useEffect } from "react";
import  '../styles/App.css';

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition,setBallPosition] = useState({
    left: "0",
    top: "0",
  });
  const handListner=()=> {
    switch (event.keyCode) {
        case 39:
            console.log(ballPosition.left+" "+ballPosition.top);
            setBallPosition
                (

                    {
                        left: ballPosition.left  -  5 + 10,
                        top: ballPosition.top,
                    }
                );
                console.log(ballPosition.left);
            break
        case 40:
            console.log("down");
            setBallPosition
                (

                    {

                        left: ballPosition.left,
                        top: ballPosition.top - 5 + 10,

                    }
                ); break
        case 37:
            console.log("left");
            setBallPosition
                (

                    {

                        left: ballPosition.left - 5,
                        top: ballPosition.top,

                    }
                ); break
        case 38:
            console.log("up");
            setBallPosition
                (

                    {

                        left: ballPosition.left,
                        top: ballPosition.top - 5,

                    }
                ); break
        

    }


}



useEffect(()=>{
    document.addEventListener("keydown", handListner);
    
    return function() {document.removeEventListener("keydown",handListner)};
}
        ,[{ballPosition}]);
  const reset = () => {
      console.log(ballPosition.left+" "+ballPosition.top)
    setRenderBall(false);
  };
  const handleclick=()=>{
    setRenderBall(true);
  }
  const renderChoice = () => {
    if(renderBall)
    {
        console.log(ballPosition.left+" "+ballPosition.top)
      return <div
      className="ball"
      
      style={{
         
          left: ballPosition.left + "px",
          top: ballPosition.top + "px",
          position: "absolute",

      }}></div>
      
    }
    else
    {
      return <button onClick={handleclick} className="start">Start</button>
    }
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
