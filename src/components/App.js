import React, { Component, useEffect, useState } from "react";
import '../styles/App.css';
function App() {

    const [renderBall, setRenderBall] = useState(false);
    const [posi, setPosi] = useState(0);
    const [ballPosition, setBallPosition] = useState({ left: "0", top: "0" });
    const handListner=()=> {
        switch (event.keyCode) {
            case 39:
                console.log("k");
                setBallPosition
                    (

                        {

                            left: ballPosition.left + 5,
                            top: ballPosition.top,
                        }
                    );
                break
            case 40:
                console.log("down");
                setBallPosition
                    (

                        {

                            left: ballPosition.left,
                            top: ballPosition.top + 5,

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


    const buttonClickHandler = () => {
        //console.log(1);
        setRenderBall(true);
    }
    const renderBallOrButton = () => {
        if (renderBall) {
            //console.log(1);
            return <div
                className="ball"
                style={{
                    left: ballPosition.left + "px",
                    top: ballPosition.top + "px",
                    position: "absolute",

                }}></div>
        } else {
            return <button onClick={buttonClickHandler} >Click For One Ball</button>
        }
    }

    // bind ArrowRight keydown event



    return (
        <div className="playground">
            {renderBallOrButton()}
        </div>
    )

}


export default App;