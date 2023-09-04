import React from "react";
import ContactForm from "../Components/ContactForm/ContactForm";
import { Phone, Envelope } from "react-bootstrap-icons";
import "./Home.css";
import Header from "../Images/Header.jpg";

export default function Entertainment() {
  return (
    <div className="Home">
      <div className="lander">
        <div className="body">
          {/* <h1 className="main">Helmut Fricker</h1> */}

          <div className="info">
            <h2 className="">World Class Musician and Entertainer</h2>
            {/* <Header /> */}
            <img src={Header} alt="Header" />
            <p className="text">
              Available for public and private performances. You can see
              Helmut's public performances listed below including my appearances
              on the Beaver Creek Plaza throughout the winter. More details
              below.
              <br />
              <span className="strong">
                Just listen for the famous Helmut Fricker yodel!
              </span>
            </p>
            <hr className="line" />
            <h2 className="title">Public Performances</h2>
            <div className="performanceList">
              <h3 className="title">Beaver Creek Plaza:</h3>

              <h4 className="text">June 17th thru September 16th 2023</h4>
              <h3>
                Catch Helmut every Wednesday, Friday and Sunday from 1pm-3pm
              </h3>

              <br />
              <h3 className="title">Beaver Creek Oktoberfest:</h3>
              <h4 className="text">September 1-3, 2023</h4>
              <h5>
                <p>
                  <span className="bold">Friday 9/1</span>: 4pm Keg Tapping
                </p>
                <p className="bold">Saturday & Sunday: </p>
                <p>Main Stage at 12:30pm -1:30pm</p>
                <p>Mountain Side Stage (Chophouse lawn) at 3:00-3:45pm</p>
              </h5>

              <br />
              <h3 className="title">Vail Oktoberfest:</h3>
              <h4 className="text">Lionshead September 8-10, 2023</h4>
              <h5>
                <p>
                  <span className="bold">Friday 9/8</span>: 4-7pm
                </p>
                <p>
                  <span className="bold">Saturday 9/9</span>: 12:30-3:30pm
                </p>
                <p>
                  <span className="bold">Sunday 9/10</span>: 12:30-3:30pm
                </p>
              </h5>

              <h3 className="title">Vail Oktoberfest:</h3>
              <h4 className="text">Vail Village September 15-17, 2023</h4>
              <h5>
                <p>
                  <span className="bold">Friday 9/15</span>: 4-7pm
                </p>
                <p>
                  <span className="bold">Saturday 9/16</span>: 12:30-3:30pm
                </p>
                <p>
                  <span className="bold">Sunday 9/17</span>: 12:30-3:30pm
                </p>
              </h5>
            </div>
            <p>
              Please check with Beaver Creek and Vail’s website for any changes
              to dates and times especially for the Oktoberfest's.
            </p>
            <hr className="line" />
            <h2 className="title">Performance Inquiries</h2>
            <h4 className="text subtitle">
              Contact Helmut directly for pricing and schedule
            </h4>
            <p>
              <Phone /> (970) 471-2779
            </p>
            <p>
              <Envelope /> helmutfricker@gmail.com
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
