import React from "react";
import ContactForm from "../Components/ContactForm/ContactForm";
import IframeContainer from "../Components/IframeContainer/IframeContainer"
import Paypal from "../Components/Paypal/Paypal";
import "./Home.css"


export default function Bobbleheads() {
  return (
    <div className="Home">
      <div className="lander">
        <div className="body">
          {/* <h1 className="main">Helmut Fricker</h1> */}

          <div className="info">
            <h2 className="heading">Helmut Fricker Bobbleheads!</h2>
            <p className="text">
                These make great gifts for anyone who has seen Helmut entertain in the valley over the past 40 years
        
            </p>
            <IframeContainer url="https://www.youtube.com/embed/NApHnzTYeiw"/>
\            
            <h2 className="title">
            He Yodels and Plays the Alphorn!
            </h2>

            
            <p className="text">
               A must have for anyone who has seen Helmut entertain in the valley over the past 40 years!            
            </p>
            <hr className="line" />
            <h2 className="title">
               Get yours today for $40!     
            </h2>
            <Paypal />

            <hr className="line" />
            <h2 className="title">
               For bulk purchase inquiries please contact us via the form below     
            </h2>
            <ContactForm />
            
            

          </div>
        </div>
      </div>
    </div>
  );
}
