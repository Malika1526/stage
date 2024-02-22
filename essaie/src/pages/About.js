import React from 'react'

function About() {
  return (


    <section class="about_section layout_padding">
      <div class="container  ">

        <div class="row">
          <div class="col-md-6 ">
            <div class="img-box">
              <img src="asset/about.png" alt="" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="detail-box">
              <div class="heading_container">
                <h2 id='apropos'>
                  Restauration Rapide & Salon De Thé
                </h2>
              </div>
              <p>
                Nous vous proposons une offre salon de thé / cafétéria: petits déjeuners, milkshakes, jus de fruits, pâtisseries ... mais également une offre de restauration rapide : burgers, sandwichs chauds, assiettes... Venez également découvrir nos spécialités marocaines telles que le thé à la menthe, le msemen, la harcha.
              </p>
              <a href="#contact">
                Retrouvez-nous !
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

