import React from "react";
import "./experience.css";


const data=[
  {
    id:1,
    lang:"html",
    icon:"devicon-html5-plain-wordmark"
  },
  {
    id:2,
    lang:"css",
    icon:"devicon-css3-plain-wordmark"
  },
  {
    id:3,
    lang:"javascript",
    icon:"devicon-javascript-plain"
  },
  {
    id:4,
    lang:"Typescript",
    icon:"devicon-typescript-plain"
  },
  {
    id:5,
    lang:"bootstrap",
    icon:"devicon-bootstrap-plain"
  },
  {
    id:6,
    lang:"tailwind",
    icon:"devicon-tailwindcss-plain"
  },
  {
    id:7,
    lang:"react",
    icon:"devicon-react-original-wordmark"
  },
  {
    id:19,
    lang:"nextjs",
    icon:"devicon-nextjs-original"
  },
  {
    id:8,
    lang:"redux & redux toolkit",
    icon:"devicon-redux-original"
  },
  {
    id:9,
    lang:"jquery",
    icon:"devicon-jquery-plain-wordmark"
  },
  {
    id:10,
    lang:"sass",
    icon:"devicon-sass-original"
  },
  {
    id:11,
    lang:"git & github",
    icon:"devicon-github-original-wordmark"
  },
  {
    id:12,
    lang:"flutter",
    icon:"devicon-flutter-plain"
  },
  {
    id:13,
    lang:"php",
    icon:"devicon-php-plain"
  },
  {
    id:14,
    lang:"mysql",
    icon:"devicon-mysql-plain-wordmark"
  },
  {
    id:15,
    lang:"adobe photoshop",
    icon:"devicon-photoshop-plain"
  },
  {
    id:16,
    lang:"adobe XD",
    icon:"devicon-xd-plain"
  },
  {
    id:17,
    lang:"figma",
    icon:"devicon-figma-plain"
  },
  {
    id:18,
    lang:"gulp",
    icon:"devicon-gulp-plain"
  },
  
]
function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front End Development</h3>
          <div className="experience__content" >
            {
              data.map((lang) =>{
                return (
                  <article className="experience__details" key={lang.id}>
                    <div title ={lang.lang}>
                      {/* <h4>{lang.lang}</h4> */}
                      <i className={lang.icon} style={{fontSize:60}}></i>

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
