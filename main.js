const navSectionOne = document.querySelector('.info'); // container containing menu and nav links
const navSectionTwo = document.querySelector('.menu-icon'); // menu-icon
const links = document.querySelectorAll('.co'); // navigation class list
const sections = document.querySelectorAll('.sections'); // sections classlist
const windowPopup = document.querySelector('.window-popup');// container containiing the popup
const bodyButtons = document.querySelector('.all-container'); // general body contain
const PortfolioContainer = document.getElementById('portfolio'); // container for the cards

// display the popup menu bar
function menuTransition() {
  if (navSectionOne.classList.contains('phone')) {
    navSectionOne.classList.remove('phone');
  } else {
    navSectionOne.classList.add('phone');
    sections.forEach((sect) => {
      sect.classList.toggle('active');
    });
  }
}
// once click on the men-icon
navSectionTwo.addEventListener('click', menuTransition);

// hides the menu bar
function removeMenu() {
  if (navSectionOne.classList.contains('phone')) {
    navSectionOne.classList.remove('phone');
    sections.forEach((sect) => {
      sect.classList.toggle('active');
    });
  }
}

links.forEach((link) => {
  link.addEventListener('click', removeMenu);
});

// You need to update the main page so that the projects section
// is created dynamically using the information stored in that
// JavaScript object. Remember, all of the HTML in that section is created when the page loads.
// order class is to switch them , move image to the right
const cards = [
  {
    id: 'cardOne',
    title: 'Tonic',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html5', 'Ruby on rails', 'css', 'javascript'],
    image: {
      mainImg: 'images/Nature.png',
      counter: './images/Counter.png',
    },
    button: 'See Project',
  },

  {
    id: 'cardTwo',
    title: 'Multi-Post Stories',
    education: ['FACEBOOK', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: {
      mainImg: 'images/desktop-2.png',
      counter: './images/Counter.png',
    },
    button: 'See Project',
    orderClas: 'card-twos',
  },

  {
    id: 'cardThree',
    title: 'Facebook 360',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: {
      mainImg: 'images/desktop-middle.png',
      counter: './images/Counter.png',
    },
    button: 'See Project',
  },

  {
    id: 'cardFour',
    title: 'Uber Navigation',
    education: ['Uber', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    image: {
      mainImg: 'images/desktop-last.png',
      counter: './images/Counter.png',
    },
    button: 'See Project',
    orderClas: 'card-twos',
  },
];

// For each project you need to store the following pieces of data in a
// JavaScript object, at a minimum: name, description, featured image,
// technologies, link to live version, link to source
// All popup Cards
const popup = [
  {
    id: 'cardOne',
    title: 'Tonic',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'Microverse Module 02 Project: This is education project that allow user to add desire books to the list and also delete books. It makes use of local storage to preserve the data on the web browser',

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstraps'],
    image: {
      mainImg: 'images/Nature.png',
      counter: './images/Counter.png',
      liveIcon: './images/see-live.png',
      sourceIcon: './images/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;', // x image
    navigation: {
      live: 'https://lucash2022.github.io/LucasErkanaPortfolio_Website//',
      source: 'https://github.com/Lucash2022/LucasErkanaPortfolio_Website/tree/popup/',
    },
  },

  {
    id: 'cardTwo',
    title: 'Multi-Post Stories',
    education: ['FACEBOOK', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstraps'],
    image: {
      mainImg: 'images/desktop-2.png',
      counter: './images/Counter.png',
      liveIcon: './images/see-live.png',
      sourceIcon: './images/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;', // x image
    navigation: {
      live: 'https://lucash2022.github.io/LucasErkanaPortfolio_Website//',
      source: 'https://github.com/Lucash2022/LucasErkanaPortfolio_Website/tree/popup/',
    },
  },

  {
    id: 'cardThree',
    title: 'Facebook 360',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstraps'],
    image: {
      mainImg: 'images/desktop-middle.png',
      counter: './images/Counter.png',
      liveIcon: './images/see-live.png',
      sourceIcon: './images/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: 'https://lucash2022.github.io/LucasErkanaPortfolio_Website//',
      source: 'https://github.com/Lucash2022/LucasErkanaPortfolio_Website/tree/popup/',
    },
  },

  {
    id: 'cardFour',
    title: 'Uber Navigation',
    education: ['Uber', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstraps'],
    image: {
      mainImg: 'images/desktop-last.png',
      counter: './images/Counter.png',
      liveIcon: './images/see-live.png',
      sourceIcon: './images/see-source.png',
    },
    butn1: 'Seelive',
    butn2: 'See Source',
    cancel: '&times;', // x image
    navigation: {
      live: 'https://lucash2022.github.io/LucasErkanaPortfolio_Website/',
      source: 'https://github.com/Lucash2022/LucasErkanaPortfolio_Website/tree/popup/',
    },
  },
];

// all of the HTML in that section is created when the page loads.
cards.forEach((object) => {
  PortfolioContainer.innerHTML += `<div class="card">
  <img class="img ${object.orderClas}" src="${object.image.mainImg}" alt="Snapshoot Portfolio image">
  <div class="sec-content">
  <h2 class="ton-del">
   ${object.title}
  </h2>
  <ul class="education">
  <li class="cano">
    ${object.education[0]}
  </li>
  <li> <img src="${object.image.counter}" alt="counter image">${object.education[1]}</li>
  <li> <img src="${object.image.counter}" alt="counter image">${object.education[2]}</li>
  </ul>
  <p>
    ${object.description}
  </p>
  <ul class="tech">
      <li>
        ${object.technologies[0]}
      </li>
      <li>
         ${object.technologies[1]}
      </li>
      <li>
         ${object.technologies[2]}
      </li>
      <li>
        ${object.technologies[3]}
      </li>
  </ul>
  <button data-id="${object.id}" class="button" type="button">
    ${object.button}
  </button>
  </div>
  </div>`;
});

// Add a popCard or remove popup card when going to see live or see source
function pageTransition() {
  if (windowPopup.classList.contains('pop-body')) {
    windowPopup.classList.remove('pop-body');
  } else {
    windowPopup.classList.add('pop-body');
    sections.forEach((sect) => {
      sect.classList.toggle('active');
    });
  }
}
// Removes the Popup on click close button and Navigate to see live and see source on click
windowPopup.addEventListener('click', (e) => {
  const buttonClass = e.target.classList.contains('seeButtons');
  if (buttonClass) {
    windowPopup.classList.remove('pop-body');
    sections.forEach((sect) => {
      sect.classList.toggle('active');
    });
  }
});

// Loads the popup card on click
bodyButtons.addEventListener('click', (e) => {
  const buttonClass = e.target.getAttribute('data-id');
  popup.forEach((object) => {
    if (buttonClass === object.id) {
      windowPopup.innerHTML = `<div id="${object.id}" class="pop-up">
       <div class="pop-head">
         <h2 class="ton-del">
         ${object.title}
         </h2>
         <button type="button" class="cancel seeButtons">
           ${object.cancel}
         </button>
       </div>
       <ul class="education">
         <li class="cano">
           ${object.education[0]}
         </li>
         <li> <img src="${object.image.counter}" alt="counter image">${object.education[1]}</li>
         <li> <img src="${object.image.counter}" alt="counter image">${object.education[2]}</li>
       </ul>
       <div>
         <img class="pop-img" src="${object.image.mainImg}" alt="Snapshoot Portfolio image">
       <div>
         <div class="pop-bottom">
           <p class="pop-para">
             ${object.description}
           </p>
           <div class="sect-butns">
             <div>
               <ul class="tech javaht">
                 <li>
                     ${object.technologies[0]}
                 </li>
                 <li>
                     ${object.technologies[1]}
                 </li>
                 <li>
                     ${object.technologies[2]}
                 </li>
             </ul>
             <ul class="tech bootrap">
                 <li>
                     ${object.technologies2[0]}
                 </li>
                 <li>
                     ${object.technologies2[1]}
                 </li>
                 <li>
                     ${object.technologies2[2]}
                 </li>
             </ul>
             </div>
             <hr class="single-line">
             <nav class="pop-nav">
             <a class="navii1" href="${object.navigation.live}" target="_blank">
               <button class="pop-btn btn1 seeButtons" type="button">
               ${object.butn1}
                 <img class="seeButtons" src="${object.image.liveIcon}" alt="live-icon">
               </button>
             </a>
             <a class="navii2" href="${object.navigation.source}" target="_blank">
               <button class="pop-btn btn2 seeButtons"  type="button">
               ${object.butn2}
               <img class="seeButtons" src="${object.image.sourceIcon}" alt="github-icon">
               </button>
             </a>
             </nav>
           </div>
         </div>
       </div>
      </div>
     </div>`;
      pageTransition();
    }
  });
});
