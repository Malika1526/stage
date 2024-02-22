import React, { useState } from 'react';


const Burgers = [

    {
        className: 'burgers',
        title: 'Cheesy', 
        description: 'Pain burger, 2 steaks de 60g, 3 cheddars, sauce fromagère, salade',
        priceSeul: 'Seul 6,60€',
        priceMenu: 'Menu 8,60€',
        image: 'asset/cheesy.png',
    },

    {
        className: 'burgers',
        title: 'Chicken',
        description: 'Pain burger, 2 tenders, cheddar, salade, sauce mayo OU mayo + chili thaï',
        priceSeul: 'Seul 5,90€',
        priceMenu: 'Menu 7,90€',
        image: 'asset/chicken.png',
    },

    {
        className: 'burgers',
        title: 'Chicken Beef',
        description: 'Pain sésame, 1 steak de 120g, 2 tenders, 2 cheddars, salade, tomate, oignons, cornichons, 2 cheddars, sauce poivre',
        priceSeul: 'Seul 7,20€',
        priceMenu: 'Menu 9,20€',
        image: 'asset/chickenBeef.png',
    },

    {
        className: 'burgers',
        title: 'Simple',
        description: 'Pain fariné, steak hachée pur boeuf, cheddar, crudités',
        priceSeul: 'Seul 5,20€',
        priceMenu: 'Menu 7,20€',
        image: '',
    },

    {
        className: 'burgers',
        title: 'Double',
        description: 'Pain fariné, steak hachée pur boeuf, cheddar, crudités',
        priceSeul: 'Seul 7,20€',
        priceMenu: 'Menu 9,20€',
        image: '',
    },

    {
        className: 'burgers',
        title: 'Triple',
        description: 'Pain fariné, steak hachée pur boeuf, cheddar, crudités',
        priceSeul: 'Seul 9,20€',
        priceMenu: 'Menu 11,20€',
        image: '',
    },

    {
        className: 'burgers',
        title: 'Menu Enfant',
        description: 'Burger ou 4 nuggets, frites, 1 compote, 1 Caprisun, 1 suprise',
        priceSeul: 'Menu 6,90€',
        priceMenu: '',
        image: 'asset/menuEnfant.png',
    },

]

const Wraps = [
    {
        className: 'wraps',
        title: 'Wrap Chicken',
        description: 'Galette, 2 tenders, cheddar, galette de pomme de terre, salade, tomate, sauce mayo OU mayo + chili thaï ',
        priceSeul: 'Seul 5,90€',
        priceMenu: 'Menu 7,90€',
        image: 'asset/wrapChicken.png',
    },

    {
        className: 'wraps',
        title: 'Wrap Beef',
        description: 'Galette, 1 steak de 120g, cheddar, galette de pomme de terre, salade, tomate, sauce mayo OU mayo + chili thaï ',
        priceSeul: 'Seul 6,90€',
        priceMenu: 'Menu 8,90€',
        image: '',
    },

]

const Naans = [
    {
        className: 'naans',
        title: 'Naan Chicken',
        description: 'Pain Naan, 2 tenders, cheddar, salade, sauce mayo OU mayo + chili thaï ',
        priceSeul: 'Seul 5,90€',
        priceMenu: 'Menu 7,90€',
        image: 'asset/naanChicken.png',
    },

    {
        className: 'naans',
        title: 'Naan Beef',
        description: 'Pain Naan, 1 steak de 120g, cheddar, salade, sauce mayo OU mayo + chili thaï',
        priceSeul: 'Seul 6,50€',
        priceMenu: 'Menu 8,50€',
        image: '',
    },

]

const Sandwichs = [
    {
        className: 'sandwichs',
        title: 'Sandwichs Poulet',
        priceSeul: 'Seul 6,00€',
        priceMenu: 'Menu 8,00€',
        image: '',
    },

    {
        className: 'sandwichs',
        title: 'Sandwichs Kefta',
        priceSeul: 'Seul 6,00€',
        priceMenu: 'Menu 8,00€',
        image: '',
    },

    {
        className: 'sandwichs',
        title: 'Sandwichs Mixte',
        priceSeul: 'Seul 6,50€',
        priceMenu: 'Menu 8,50€',
        image: '',
    },

    {
        className: 'sandwichs',
        title: 'Croque Monsieur',
        priceSeul: '3,00€',
        priceMenu: '',
        image: '',
    },

]

const Salades = [
    {
        className: 'salades',
        title: 'Végétarienne',
        description: 'Salade, tomates, concombres, maïs, oignons rouges, olives',
        priceSeul: '3,90€',
        image: 'asset/saladeVege.png',
    },

    {
        className: 'salades',
        title: 'Poulet',
        description: 'Salade, tomates, concombres, maïs, oignons rouges, olives',
        priceSeul: '6,50€',
        image: 'asset/saladePoulet.png',
    },
]

const Assiettes = [
    {
        className: 'assiettes',
        title: 'Poulet',
        description: 'Sauces : Ketchup, Mayonnaise, Andalouse, Américaine, Algérienne, Hannibal, Samouraï, Blanche, Poivre, Harissa',
        description2: 'Menu : frite + canette 33cl',
        priceSeul: 'Seul 10,00€',
        priceMenu: 'Menu 11,00€',
        image: '',
    },

    {
        className: 'assiettes',
        title: 'Kefta',
        description: 'Sauces : Ketchup, Mayonnaise, Andalouse, Américaine, Algérienne, Hannibal, Samouraï, Blanche, Poivre, Harissa',
        description2: 'Menu : frite + canette 33cl',
        priceSeul: 'Seul 10,00€',
        priceMenu: 'Menu 11,00€',
        image: '',
    },

    {
        className: 'assiettes',
        title: 'Mixte',
        description: 'Sauces : Ketchup, Mayonnaise, Andalouse, Américaine, Algérienne, Hannibal, Samouraï, Blanche, Poivre, Harissa',
        description2: 'Menu : frite + canette 33cl',
        priceSeul: 'Seul 11,00€',
        priceMenu: 'Menu 12,00€',
        image: '',
    },

]


const Frites = [
    {
        className: 'frite',
        title: 'Petite frite',
        description: "Frites fraîches préparées sur place, 1 sauce incluse",
        priceSeul: '3,00€',
        image: 'asset/frite.png',
    },

    {
        className: 'frite',
        title: 'Grande frite',
        description: "Frites fraîches préparées sur place, 1 sauce incluse",
        priceSeul: '4,00€',
        image: 'asset/frite.png',
    }
]

const PetitsDejeuners = [
    {
        className: 'petitsDejeuners',
        title: 'Classique',
        description: "2 oeufs au plat, 1 boisson chaude*, pain, vache qui rit, olives, jus d'orange pressé 20cl",
        description2: "Sans jus d'orange 5,50€",
        priceSeul: '7,00€',
        image: '',
    },

    {
        className: 'petitsDejeuners',
        title: 'Traditionnel',
        description: "Msemen OU Harcha, 1 boisson chaude*, jus d'orange pressé 30cl",
        priceSeul: '7,50€',
        image: '',
    },

    {
        className: 'petitsDejeuners',
        title: 'Royal',
        description: "Formule classique + kefta OU dinde",
        description2: "Sans jus d'orange 8,00€",
        priceSeul: '9,50€',
        image: '',
    },

    {
        className: 'petitsDejeuners',
        title: 'Royal',
        description: "Formule classique + viande mixte kefta ET dinde",
        priceSeul: '10,50€',
        image: '',
    }
]

const Pâtisseries = [

    {
        className: 'patisserie',
        title: 'Msemen',
        description: "1 garniture au choix : Miel, Chocolat, Frommage, Huile d'olive",
        priceSeul: '3,00€',
        image: 'asset/msemen.png',
    },

    {
        className: 'patisserie',
        title: 'Harcha',
        description: "1 garniture au choix : Miel, Chocolat, Frommage, Huile d'olive",
        priceSeul: '3,00€',
        image: 'asset/harcha.png',
    },

    {
        className: 'patisserie',
        title: 'Pâtisserie',
        description: "",
        priceSeul: '2,50€',
        image: 'asset/patisserie.png',
    },

    {
        className: 'patisserie',
        title: 'Gâteau',
        description: "",
        priceSeul: '2,50€',
        image: 'asset/gateau.png',
    },

    {
        className: 'patisserie',
        title: 'Tiramisu',
        description: "",
        priceSeul: '3,00€',
        image: 'asset/tiramisu.png',
    },
]

const BoissonsChaudes = [

    {
        className: 'boissonsChaudes',
        title: 'Thé à la menthe',
        priceSeul: '2,00€',
        image: 'asset/theMenthe.png',
    },

    {
        className: 'boissonsChaudes',
        title: 'Thé miel',
        priceSeul: '2,50€',
        image: 'asset/theMiel.png',
    },

    {
        className: 'boissonsChaudes',
        title: 'Thé aux herbes',
        priceSeul: '2,50€',
        image: 'asset/theHerbe.png',
    },

    {
        className: 'boissonsChaudes',
        title: 'Expresso',
        priceSeul: '1,70€',
        image: 'asset/expresso.png',
    },

    {
        className: 'boissonsChaudes',
        title: 'Nescafé',
        priceSeul: '2,00€',
        image: 'asset/nescafe.png',
    },

    {
        className: 'boissonsChaudes',
        title: 'Grand crème',
        priceSeul: '2,00€',
        image: 'asset/grandCreme.png',
    },

    {
        className: 'boissonsChaudes',
        title: 'Chocolat chaud',
        priceSeul: '2,00€',
        image: 'asset/chocolatChaud.png',
    },
]

const BoissonsFraiches = [

    {
        className: 'boissonsFraiches',
        title: 'Coca Cola en verre',
        priceSeul: '2,00€',
        image: 'asset/coca.png',
    },

    {
        className: 'boissonsFraiches',
        title: 'Red Bull',
        priceSeul: '2,00€',
        image: 'asset/redBull.png',
    },

    {
        className: 'boissonsFraiches',
        title: 'Diabolo',
        priceSeul: '2,50€',
        image: 'asset/diabolo.png',
    },

    {
        className: 'boissonsFraiches',
        title: 'Canette 33 cl',
        priceSeul: '1,50€',
        image: '',
    },

    {
        className: 'boissonsFraiches',
        title: 'Eau',
        priceSeul: '1,00€',
        image: 'asset/eau.png',
    }
]

const MilkShake = [

    {
        className: 'milkShake',
        title: '1 parfum',
        description: 'Kinder, Oreo, Nutella, Snickers, Daim, Spéculoos, Mangue, Banane, Ananas',
        priceSeul: '4,50€',
        image: 'asset/milkShake.png',
    },

    {
        className: 'milkShake',
        title: '2 parfums',
        description: 'Kinder, Oreo, Nutella, Snickers, Daim, Spéculoos, Mangue, Banane, Ananas',
        priceSeul: '5,50€',
        image: 'asset/milkShake.png',
    },
]

const JusDeFruits = [
    {
        className: 'jusDeFruits',
        title: 'Lait + 1 fruit',
        priceSeul: '4,00€',
        image: 'asset/laitFruit.png',
    },

    {
        className: 'jusDeFruits',
        title: 'Lait + 2 fruits',
        priceSeul: '4,50€',
        image: 'asset/laitFruit.png',
    },

    {
        className: 'jusDeFruits',
        title: "Jus d'orange",
        priceSeul: '3,50€',
        image: 'asset/jusOrange.png',
    },

    {
        className: 'jusDeFruits',
        title: "Jus d'orange + 1 fruit",
        priceSeul: '4,00€',
        image: 'asset/jusFruit.png',
    },

    {
        className: 'jusDeFruits',
        title: "Jus d'orange + 2 fruits",
        priceSeul: '4,50€',
        image: 'asset/jusFruit.png',
    },

    {
        className: 'jusDeFruits',
        title: "Cocktail Tropical",
        priceSeul: '4,50€',
        image: 'asset/jusTropical.png',
    },

]

const dataFilter = [
    {
        class: "burgers",
        name: "Burgers",
    },

    {
        class: "wraps",
        name: "Wraps",
    },

    {
        class: "naans",
        name: "Naans",
    },

    {
        class: "sandwichs",
        name: "Sandwichs",
    },

    {
        class: "salades",
        name: "Salades",
    },

    {
        class: "assiettes",
        name: "Assiettes",
    },

    {
        class: "petitsDejeuners",
        name: "Petits déjeuners",
    },

    {
        class: "frite",
        name: "Frites",
    },

    {
        class: "patisserie",
        name: "Pâtisserie",
    },

    {
        class: "boissonsChaudes",
        name: "Boissons Chaudes",
    },

    {
        class: "boissonsFraiches",
        name: "Boissons Fraîches",
    },

    {
        class: "milkShake",
        name: "Milk Shake",
    },

    {
        class: "jusDeFruits",
        name: "Jus de fruits",
    }
]

function MenuFilter() {
  const [activeFilter, setActiveFilter] = useState('burgers'); // État pour stocker le filtre actif

  // Vos données
  const allElements = [...Burgers, ...Wraps, ...Naans, ...Sandwichs, ...Salades, ...Assiettes, ...Frites, ...PetitsDejeuners, ...Pâtisseries, ...BoissonsChaudes, ...BoissonsFraiches, ...MilkShake, ...JusDeFruits];

  // Fonction pour mettre à jour le filtre actif
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    
    <section className="food_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2 id='carte'>Notre carte</h2>
        </div>
        <ul className="filters_menu">
          {/* <li className={activeFilter === '*' ? 'active' : ''} onClick={() => handleFilterClick('*')}>Tous</li> */}
          {dataFilter.map((element, index) => (
            <li key={index} className={activeFilter === element.class ? 'active' : ''} onClick={() => handleFilterClick(element.class)}>{element.name}</li>
          ))}
        </ul>
        <div className="filters-content">
          <div className="row grid">
            {allElements.filter(element => activeFilter === '*' || element.className === activeFilter).map((element, index) => (
              <div key={index} className={"col-sm-6 col-lg-4 all " + element.className}>
                <div className="box">
                  <div>
                    <div className="img-box">
                      <img src={element.image} alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>{element.title}</h5>
                      <p>{element.description}</p>
                      <p>{element.description2}</p>
                      <div className="options">
                        <h6>{element.priceSeul}</h6>
                        <h6>{element.priceMenu}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuFilter;
