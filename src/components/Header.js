import React from 'react'

function Header() {
  const Texte = [

    {
      id: 1,
      title: 'Restauration rapide',
      description: 'Dégustez nos burgers, naans, wraps, salades... Une diversité de choix pour satisfaire toutes les envies',
    },

    {
      id: 2,
      title: 'Salon thé',
      description: 'Voyagez au Maroc à travers chaque gorgée chez OKLM. Venez déguster nos spécialités dans une ambiance chaleureuse ',
    },

    {
      id: 3,
      title: 'Cafétéria',
      description: 'Commencez votre journée du bon pied chez OKLM avec nos délicieux petits-déjeuners. Un début de journée savoureux qui vous attend !',
    }
  ]
  return (
    <>
      <div className="hero_area">
        <div className="bg-box">
          <img src="asset/header.png" alt="" />
        </div>
        <header className="header_section">

          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <img src="asset/logo.png" alt="" />
              </a>

              <div className="collapse navbar-collapse sticky-top" id="navbarSupportedContent">
                <ul className="navbar-nav  mx-auto ">
                  <li className="nav-item active">
                    <a className="nav-link" href="#carte">Notre carte <span className="sr-only"></span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#apropos">A propos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <section className="slider_section">
          <div id="customCarousel1" className="carousel slide" data-bs-ride="carousel" >



            <div className="carousel-inner">
              {Texte.map((element, index) => (
                <div key={element.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-7 col-lg-6">
                        <div className="detail-box">
                          <h1>
                            {element.title}
                          </h1>
                          <p>
                            {element.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-indicators" data-bs-interval="1000">
              <li type="button" data-bs-target="#customCarousel1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></li>
              <li type="button" data-bs-target="#customCarousel1" data-bs-slide-to="1" aria-label="Slide 2"></li>
              <li type="button" data-bs-target="#customCarousel1" data-bs-slide-to="2" aria-label="Slide 3"></li>
            </div>

          </div>
        </section>


      </div>



    </>
  )
}

export default Header




