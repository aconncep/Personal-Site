import React, { useState, useEffect } from "react";
import axios from 'axios';
import Particles from "react-particles-js";
import Socialicons from "../components/Socialicons";
import Layout from "../components/Layout";

function Home(){
  const [information, setInformation] = useState("");
  const paramConfig = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true
        }
      },
      color: {
        value: "#24A0ED"
      },
      opacity: {
        value: 0.05
      },
      size: {
        value: 15,
        random: true,
        anim: {
          speed: 3,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: true,
        opacity: 0.3687847739990702
      },
      move: {
        random: true,
        speed: 0.75,
        direction: "right",
        out_mode: "out"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": true,
              "mode": "grab"
          },
          "onclick": {
              "enable": true,
              "mode": "bubble"
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 200,
              "line_linked": {
                  "opacity": .7
              }
          },
          "bubble": {
              "distance": 200,
              "size": 6,
              "duration": .8,
              "opacity": .8,
              "speed": 5
          },
          "repulse": {
              "distance": 100,
              "duration": 1.5
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  }
  };
  useEffect(() =>{
    axios.get('/api/information')
    .then( response => {
      setInformation(response.data);
    })
  }, [])
  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <Particles className="mi-home-particle" params={paramConfig} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hi, I am <span className="color-theme">{information.name}</span>
                </h1>
                <p>{information.aboutContent}</p>
                <Socialicons bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
