import React from 'react';


function Footer() {
    return (
        <>

            <footer className="footer_section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 footer-col">
                            <div className="footer_detail">
                                <img className="logo" src="asset/logo.png"/>
                                <p>
                                Retrouvez-nous facilement et venez faire une pause gourmande OKLM !
                                </p>
                            
                            </div>
                        </div>


                        <div className="col-md-4 footer-col">
                            <div className="footer_contact">
                                <h4 id='contact'>
                                    Contact
                                </h4>
                                <div className="contact_link_box">
                                    <a href="https://maps.app.goo.gl/QMsakpxB1E1K4MqP6">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        <span>
                                            34 rue Roger Salengro <br /> 59260 Hellemmes Lille<br />
                                        </span>
                                    </a>
                                    <a href="" />
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        07 73 70 81 94 <br /> 03 74 46 10 00
                                    </span>

                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 footer-col">
                            <h4>
                                Horaires d'ouverture
                            </h4>
                            <p>
                                Tous les jours
                            </p>
                            <p>
                                09.00 - 23.00
                            </p>
                        </div>
                    </div>


                    {/* <div className="footer-info">
                        <p />

                        <a href="https://themewagon.com/" target="_blank">ThemeWagon</a>
                        <p />
                    </div> */}
                </div>

            </footer>



        </>
    )
}

export default Footer