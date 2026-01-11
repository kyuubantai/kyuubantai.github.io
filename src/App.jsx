import { useState } from 'react'
import './App.css'

function App() {
  return (
      <div>
        <nav className="navigation">
          <ul>
            <li>About Me</li>
            <li>Experiences</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Language</li>
          </ul>
        </nav>
        <header className="hero-section">
        <h1>It's a pleasure to meet you !</h1>
        <h2>I am KITA Djessy-Alberto</h2>
        <p className="subtitle">
          Student at Claude Bernard University Lyon 1 | C++/Python Developer
        </p>
      </header>
      <section className="info">
        <article className="intro">
        <h1>About Me</h1>
        <p>
        Since little, i already have a thing with informatics, my mom said that when i was in kindergarten,
        when others worked with PCs assigned to us, i was the only one who knew how to work from my teacher's computer station.
        Later on, this passion was always with me everywhere, in sci-fi movies, books, videogames, Youtube videos or even what's actually
        happening with ai and its big development.
        <br></br>
        Now, i want to be part of this story, gaining skills and experiences to one day, live in this sci-fi world
        I've always dreamt of since little.
        <br></br>
        And if you share the same dream with me, why not walk together in this crazy
        but amazing journey ? 
        </p>
        </article>
        <article className = "exp">
          <h1>Skills/Experiences</h1>
          <p>
            <strong>Programming Languages :</strong> 
            <ul className="prog">
              <li>C++ : 4/5 </li>
              <li>Python : 4/5 </li>
              <li>C# : 4/5 </li>
              <li>Java : 3/5 </li>
              <li>Javascript : 2/5 </li>
              <li>PHP : 3/5</li>
              <li>CSS : 4/5</li>
              <li>SQL: 4/5</li>
              <li>HTML(i know, it's not a programming langage but whatever): 4/5 </li>
            </ul>
            <strong>Other Programming Languages (Functional programming essentially)</strong>
            <ul className="prog2">
              <li>Scheme:3/5</li>
              <li>Ocaml: 3/5</li>
              <li>Prolog: 2/5</li>
            </ul>
            <strong>Tools</strong>
            <ul className="tool">
              <li>Linux : 3/5</li>
              <li>Git:3/5</li>
              <li>MySQL: 4/5</li>
              <li>phpMyAdmin: 4/5</li>
              <li>Node: 2/5</li>
              <li>React: 2/5</li>
              <li>Unity:4/5</li>
            </ul>
            <strong>Soft skills</strong>
            <ul className="soft">
              <li>Communication: 5/5</li>
              <li>Teamwork : 4/5</li>
              <li>Autonomy : 4/5</li>
              <li>Customer support : 5/5</li>
            </ul>
            <strong>Languages</strong>
            <ul className="lang">
              <li>French : 5/5 (native)</li>
              <li>English : 5/5</li>
              <li>Spanish : 2/5</li>
            </ul>
          </p>
        </article>
        <article className="work">
          <h1>Projects</h1>
          <strong>Individual Projects</strong>
          <ul>
            <li> 
              <a href = 'https://github.com/kyuubantai/TAS-project'>TAS</a>
              <p>A project built in C++/Python, i was inspired by a Youtube video on Super Mario bros's speedrun and 
                how TAS helped the community to find new glitches and complete the run faster. So i thought why not create one that
                can help humanity with the same spirit !</p>
                <strong>Status : Work in progress</strong>
              </li>
          </ul>
          <strong>Contributions in Group/Business Projects</strong>
          <ul>
            <li>
              <a href='https://github.com/Tutur699/projetam2espbelkit'>Prison Escape(School Project)</a>
              <p>A video game in Unity where players are prisonners or cops and the goal is to escape for one side or capture prisonners for the other side.
                The purpose of this project was to create an AI enemy and perform the Turing test to the players.
              </p>
              <br></br>
              <strong>My Contribution :</strong>
              <p>Inventory for the items and AI enemy</p>
              <strong>Status : Unfinished</strong>
              </li>
              <br></br>
            <li><a href='https://github.com/NumCaps69/ProjetJavaSmallWorld'>SmallWorld(School Project)</a>
            <p>A game built in Java based on the board game called : "SmallWorld"</p>
            <strong>My Contribution :</strong>
            <p>Loop core for the game and counting points</p>
            </li>
            <li><a href = 'https://github.com/kyuubantai/l-antagoniste'>L'Antagoniste(School Project)</a>
            <p>A turn based video game in C++ </p>
            <strong>My Contribution :</strong>
            <p>Combat System</p>
            <strong>Status : Unfinished</strong>
            </li>
          </ul>
        </article>
        <artcile className="contact">
          <h1>Contact</h1>
          <a href="mailto:kitapro@outlook.com">Feel free to contact me !</a>  
        </artcile>
      </section>
      <footer className="bas">
      </footer>
      </div>
  )
}

export default App
