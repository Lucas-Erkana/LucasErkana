const menu = document.querySelector('#union');
const navigation = document.querySelector('nav');


menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navigation.classList.toggle('nav-toggle');
});

navigation.addEventListener('click', (event) => {
  const { target } = event;
  if (target.nodeName === 'NAV' || target.nodeName === 'DIV') {
     navigation.classList.remove('nav-toggle'); }
});

window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  navigation.classList.remove('nav-toggle');
});

const cards = [
  {
    id: 'cardOne',
    title: 'Tonic',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: ' Microverse Module 02 Project: This is education project that allow user to add desire books to the list and also delete books. It makes use of local storage to preserve the data on the web browser',
    technologies: ['html5', 'css3', 'javascript', 'ES6'],
    image: {
      mainImg: 'svg_files/Nature.png',
      counter: './svg_files/Counter.png',
    },
    button: 'See Project',
  },

  {
    id: 'cardTwo',
    title: 'Multi-Post Stories',
    education: ['FACEBOOK', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['html', 'css', 'javascript'],
    image: {
      mainImg: 'svg_files/desktop-2.png',
      counter: './svg_files/Counter.png',
    },
    button: 'See Project',
    orderClas: 'card-twos',
  },

  {
    id: 'cardThree',
    title: 'Facebook 360',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['html', 'css', 'javascript'],
    image: {
      mainImg: 'svg_files/desktop-middle.png',
      counter: './svg_files/Counter.png',
    },
    button: 'See Project',
  },

  {
    id: 'cardfour',
    title: 'Uber Navigation',
    education: ['Uber', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['html', 'css', 'javascript'],
    image: {
      mainImg: 'svg_files/desktop-last.png',
      counter: './svg_files/Counter.png',
    },
    button: 'See Project',
    orderClas: 'card-twos',
  },
];
// All popup Cards array
const popupCards = [
  {
    id: 'cardOne',
    title: 'Tonic',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Microverse Module 02 Project: This is education project that allow user to add desire books to the list and also delete books. It makes use of local storage to preserve the data on the web browser",

    technologies: ['html5', 'css3', 'javascript', 'React'],
    technologies2: ['github', 'ruby', 'Bootstrap'],
    image: {
      mainImg: 'svg_files/Nature.png',
      counter: './svg_files/Counter.png',
      liveIcon: './svg_files/see-live.png',
      sourceIcon: './svg_files/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: '#',
      source: '#',
    },
  },

  {
    id: 'cardTwo',
    title: 'Multi-Post Stories',
    education: ['FACEBOOK', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstrap'],
    image: {
      mainImg: 'svg_files/desktop-2.png',
      counter: './svg_files/Counter.png',
      liveIcon: './svg_files/see-live.png',
      sourceIcon: './svg_files/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: 'https://lucash2022.github.io/LucasErkanaPortfolio_Website//',
      source: 'https://github.com/Lucash2022/LucasErkanaPortfolio_Website',
    },
  },

  {
    id: 'cardThree',
    title: 'Facebook 360',
    education: ['CANOPY', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstrap'],
    image: {
      mainImg: 'svg_files/desktop-middle.png',
      counter: './svg_files/Counter.png',
      liveIcon: './svg_files/see-live.png',
      sourceIcon: './svg_files/see-source.png',
    },
    butn1: 'See live',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: 'https://lucash2022.github.io/LucasErkanaPortfolio_Website//',
      source: 'https://github.com/Lucash2022/LucasErkanaPortfolio_Website',
    },
  },

  {
    id: 'cardfour',
    title: 'Uber Navigation',
    education: ['Uber', '&nbsp; Back End Dev', '&nbsp; 2015'],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",

    technologies: ['html', 'css', 'javascript'],
    technologies2: ['github', 'ruby', 'Bootstrap'],
    image: {
      mainImg: 'svg_files/desktop-last.png',
      counter: './svg_files/Counter.png',
      liveIcon: './svg_files/see-live.png',
      sourceIcon: './svg_files/see-source.png',
    },
    butn1: 'Seelive',
    butn2: 'See Source',
    cancel: '&times;',
    navigation: {
      live: 'https://lucash2022.github.io/LucasErkanaPortfolio_Website//',
      source: 'https://github.com/Lucash2022/LucasErkanaPortfolio_Website',
    },
  },
];

const body = document.querySelector('#portfolio');
const section = document.createElement('section');
section.className='container-2';
body.appendChild(section);

cards.forEach((object) => {
  section.innerHTML += `<div class="card">
  <img class="img ${object.orderClas}" src="${object.image.mainImg}" alt="Snapshoot Portfolio image">
  <div class="section_content">
  <h2 class="cardheading">
   ${object.title}
  </h2>
  <ul class="minihead">
  <li class="cano">
    ${object.education[0]}
  </li>
  <li> <img src="${object.image.counter}" alt="counter image">${object.education[1]}</li>
  <li> <img src="${object.image.counter}" alt="counter image">${object.education[2]}</li>
  </ul>
  <p>
    ${object.description}
  </p>
  <ul class="used-lang">
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
  <button id="${object.id}" data-id="${object.id}" class="button" type="button">
    ${object.button}
  </button>
  </div>
  </div>`;

});







const mainbody  = document.querySelector('body');
const buttonOne = document.getElementById('cardOne')
const btn = 'cardOne'

buttonOne.addEventListener('click',()=>{
  const main = document.createElement('div');
  main.className='main'
  const popup = document.createElement('div');
  popupCards.forEach((object) => {
    console.log(object.id)
    if (btn === object.id) {
      main.innerHTML = `<div id="${object.id}">
       <div class="pop-head">
         <h2 class="cardheading">
         <span class="closeBtn">&times</span>
         ${object.title}
         </h2>

       </div>
       <ul class="education">
         <li class="cano">
           ${object.education[0]}"
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
             <ul class="used-lang bootrap">
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
               <button class="pop-btn btn1 butz" type="button">
               ${object.butn1}
                 <img class="butz" src="${object.image.liveIcon}" alt="live-icon">
               </button>
             </a>
             <a class="navii2" href="${object.navigation.source}" target="_blank">
               <button class="pop-btn btn2 butz"  type="button">
               ${object.butn2}
               <img class="butz" src="${object.image.sourceIcon}" alt="github-icon">
               </button>
             </a>
             </nav>
           </div>
         </div>
       </div>
      </div>
     </div>`;
    }
  }
  );
  main.appendChild(popup);
  mainbody.appendChild(main);

  const close = document.querySelector('.closeBtn');
  close.addEventListener('click',()=>{
    mainbody.removeChild(main);
  })
});

