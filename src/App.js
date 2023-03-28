import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import ProfileCard from "./ProfileCard";
import alexa from "./images/alexa.png";
import cortana from "./images/cortana.png";
import siri from "./images/siri.png";

export default function App() {
  return (
    <div>
      <div className="nav-wrapper #26c6da cyan lighten-1">
        <h4 className="brand-logo center">Personal Digital Assistants</h4>
      </div>
      <div className="row container center">
        <div className="col s3">
          <ProfileCard
            title="Alexa"
            handle="@alexa99"
            image={alexa}
            desc="Alexa was created by amazon helps to buy things"
          />
        </div>
        <div className="col s3">
          <ProfileCard
            title="Cortana"
            handle="@cortana32"
            image={cortana}
            desc="Cortana was created by Microsoft. Who knows what it does?"
          />
        </div>

        <div className="col s3">
          <ProfileCard
            title="Siri"
            handle="@siri01"
            image={siri}
            desc="Siri was made by Appp and it being phased out"
          />
        </div>
      </div>
    </div>
  );
}
