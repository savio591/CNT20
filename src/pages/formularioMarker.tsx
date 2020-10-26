import React from "react";
import { Link } from 'react-router-dom';


import '../styles/pages/formularioForm.css';
import imgg from '../images/cnt-white.png';
import i_1_1 from '../images/form/1_1.svg';

export default function CreateOrphanage() {
    return (
        <div id="page-formulario">
            <header>
                <img src={imgg} alt="logo" />
                <div className="header_textos">
                    <h3>Olá, visitante!</h3>
                    <Link to="/" className="enter-app">
                        <h3>Sair</h3>
                    </Link>
                </div>

            </header>
            <main>
                <div className="titulos">
                    <h1>Formulário de Pesquisa CNT  de Rodovias 2020</h1>
                    <h2>Rota: 1 - Km1 -  Brusque/SC</h2>
                </div>
                {/* Container 1*/}
                <div className="ct">
                    <h2>1 - Geometria da Vila</h2>
                    <div className="grids">
                        <div className="ct_1-1 testes">
                            <h3>1.1 - Tipo de Rodovia</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="test" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="test" value="2" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                                <label>
                                    <input type="radio" name="test" value="3" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                                <label>
                                    <input type="radio" name="test" value="3" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                                <label>
                                    <input type="radio" name="test" value="3" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-2">
                            <h3>1.2 - Perfil da Rodovia</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="1_2" value="2" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-3">
                            <h3>1.3 - Faixa Adicional de Subida</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="1_2" value="2" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-4">
                            <h3>1.4 - Pontes/Viadutos</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="1_2" value="2" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-5">
                            <h3>1.5 - Curvas Perigosas</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="1_2" value="2" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-6">
                            <h3>1.6 - Acostamento</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="1_2" value="2" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Container 2*/}
                <div className="ct">
                    <h2>2 - Pavimento</h2>
                    <div className="grids">
                        <div className="ct_1-1 testes">
                            <h3>2.1 - Condições de superfície</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="test" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="test" value="2" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                                <label>
                                    <input type="radio" name="test" value="3" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                                <label>
                                    <input type="radio" name="test" value="3" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                                <label>
                                    <input type="radio" name="test" value="3" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-2">
                            <h3>2.2 - Velocidade devido ao pavimento</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="1_2" value="2" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                                <label>
                                    <input type="radio" name="1_2" value="2" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-3">
                            <h3>2.3 - Ponto Crítico</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="1_2" value="2" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Container 3*/}
                <div className="ct">
                    <h2>3 - Sinalização</h2>
                    <div className="grids">
                        <div className="ct_1-1 testes">
                            <h3>3.1 - Sinalização Horizontal</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="test" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="test" value="2" />
                                    <img src={i_1_1} alt='test' />
                                </label>
                            </div>
                        </div>
                        <div className="ct_1-2">
                            <h3>3.1.1 - Faixa Central</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="1_2" value="2" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-3">
                            <h3>3.1.2 - Faixas Laterais</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="1_2" value="2" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-4">
                            <h3>3.2 - Defensas</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="1_2" value="2" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-5">
                            <h3>3.3 - Sinalização Vertical</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="1_2" value="2" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                            </div>
                        </div>
                        <div className="ct_1-6">
                            <h3>3.3.1 - Placa de velocidade</h3>
                            <div className="spacing">
                                <label>
                                    <input type="radio" name="1_2" value="1" />
                                    <img src={i_1_1} alt='test' />
                                </label>

                                <label>
                                    <input type="radio" name="1_2" value="2" />
                                    <img src={i_1_1} alt='test' />

                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div >
    );
}