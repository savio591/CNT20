import React from 'react';
import { FiUser, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import '../styles/pages/landing.css';


import logoLogin from '../../src/images/cnt_logo_login.png';

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoLogin} alt="CNT" className="logo_login" />

                <div className="ct_login">
                    <div>
                        <p>Nome de Usuário</p>
                        <label htmlFor="image[]" className="new-image">
                            <FiUser size={32} color="#003771" />
                            <input></input>
                        </label>

                        <p>Senha</p>
                        <label htmlFor="image[]" className="new-image">
                            <FiLogIn size={32} color="#003771" />
                            <input></input>
                        </label>


                    </div>


                </div>

                <Link to="/cnt" className="enter-app">
                <p>Entrar</p>
                </Link>
            </div>
        </div>

    );
}

export default Landing;