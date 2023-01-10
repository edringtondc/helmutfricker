import React from "react";
import ContactForm from "../Components/ContactForm/ContactForm";
import { Phone, Envelope } from "react-bootstrap-icons";
import "./Home.css"
import Header from "../Images/Header.jpg"


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
            <h3>Beaver Creek Plaza</h3>
            <h4 className="text">
              Every Wednesday, Friday and Sunday from 1pm-3pm this winter
              through March 31, 2023
            </h4>
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
