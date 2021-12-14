import React, {useState} from 'react';
import divingLanding from '../../image/Безымянный (2).png';
import movies from '../../image/Безымянный.png';
import dashboard from '../../image/dashboard.png';
import './Works.css';
import demoVideo from '../../image/bandicam 2021-12-14 18-39-59-621.mp4';
import Modal from '../Modal/Modal';

export default function Works() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const openModalHendler = () => {
    setmodalIsOpen(!modalIsOpen);
  }
  
  return (
    <div className="works" id="works">
      <h2>WORKS</h2>
      <ul className="works_list">
        <li>
          <img src={dashboard} alt="diving landing" width="500" />
          <div className="description">
            <p><b>Kanban board</b><br/>
              Used <a href="https://board-apiapp.herokuapp.com/api/boards" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>board-apiapp.herokuapp.com</a> API for the backend<br />
              Registration and authentication implemented<br /> Drag and drop events used<br />
              Written with react, redax, react hooks
            </p>

            <div className="buttons_container">
              <button type="button">
                <a href="https://peaceful-almeida-c7958e.netlify.app">TRY IT YOURSELF</a>
              </button>
              <button onClick={openModalHendler} type="button">DEMO VIDEO</button>
            </div>
          </div>
        </li>

        <li>
          <img src={movies} alt="movies landing" width="500" />
          <div className="description">
            <p><b>Movies service</b><br/>
                Used <a href="https://www.themoviedb.org/" style={{color: 'rgba(0, 0, 0, 0.6)'}}>themoviedb.org</a> API for the backend<br/>
                Written with react, redax
            </p>

            <div className="buttons_container">
              <button type="button">
                <a href="https://angry-mestorf-bfac13.netlify.app">TRY IT YOURSELF</a>
              </button>
            </div>
          </div>
        </li>

        <li>
          <img src={divingLanding} alt="movies landing" width="500" />
          <div className="description">
            <p><b>Diving school landing page</b><br/>
                Has a working navigation<br/>
               Used HTML, CSS and JavaScript for animation
            </p>

            <div className="buttons_container">
              <button type="button">
                <a href="https://naughty-hermann-3246c3.netlify.app">TRY IT YOURSELF</a>
              </button>
            </div>
          </div>
        </li>
      </ul>

      {modalIsOpen && <Modal handleClose={() => setmodalIsOpen(false)}>
        <video src={demoVideo} style={{width: 900}} controls autoPlay/>
      </Modal>}
      
    </div>
  );
}