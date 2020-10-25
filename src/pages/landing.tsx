import React from 'react';
import { FiMap, FiUser, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';


import logoImg from '../../src/images/lanLogo.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="CNT" />        

        <main>

          <h1>Pesquisa CNT de Rodovias</h1>
          <p>Sinalização e à Geometria da Via.</p>
        </main>
        <div className="location">

          
          <div>

          </div>


          <div>
            <label htmlFor="image[]" className="new-image">
              <FiUser size={32} color="#003771" />
              <input></input>
            </label>
            

            <label htmlFor="image[]" className="new-image">
              <FiLogIn size={32} color="#003771" />
              <input></input>
            </label>
            

          </div>


        </div>
        
        <Link to="/cnt" className="enter-app">
          <FiMap size={26} color="#FFF" />
        </Link>
      </div>
    </div>

  );
}

export default Landing;