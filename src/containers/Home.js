import React from "react";
import IframeContainer from "../Components/IframeContainer/IframeContainer"
import "./Home.css"


export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <div className="body">
          {/* <h1 className="main">Helmut Fricker</h1> */}

          <div className="info">
            <h2 className="heading">A Beaver Creek Legend</h2>
            <IframeContainer url="https://www.youtube.com/embed/7WdiNocKAvc"/>
          </div>
        </div>
      </div>
    </div>
  );
}
