import React from "react";
import "./experience.css";
import { BsPatchCheck } from "react-icons/bs";


const data=[
  {
    lang:"html",
  },
  {
    lang:"css",
  },
  {
    lang:"javascript",
  },
  {
    lang:"Typescript",
  },
  {
    lang:"bootstrap",
  },
  {
    lang:"tailwind",
  },
  {
    lang:"react",
  },
  {
    lang:"redux & redux toolkit",
  },
  {
    lang:"jquery",
  },
  {
    lang:"sass",
  },
  {
    lang:"git & github",
  },
  {
    lang:"pug js",
  },
  {
    lang:"php",
  },
  {
    lang:"mysql",
  },
  {
    lang:"adobe photoshop",
  },
  {
    lang:"adobe XD",
  },
  {
    lang:"figma",
  },
  
]
function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>my Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front End Development</h3>
          <div className="experience__content">
            {
              data.map(({lang}) =>{
                return (
                  <article className="experience__details">
              <BsPatchCheck className="experience__details-icon" />
              <div>
                <h4>{lang.toUpperCase()}</h4>
              </div>
            </article>
                )
              })
            }
            
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Experience;
