const openMenu = document.querySelector('.menu-bar');
const closeMenu = document.querySelector('.close-bar');
const menuLists = document.querySelector('.toolbar-2 ul');
const speakersContainer = document.querySelector('.speakrs-container');
const homeIC = document.querySelector('.home-IC');
const { body } = document;
const showmorebtn = document.querySelector('.more-content');
const showlessbtn = document.querySelector('.less-content');
const partners = document.querySelector('.home-partners');
const foot = document.querySelector('.home-foot');
const MenuArray = [body, closeMenu, menuLists, openMenu, homeIC];

openMenu.addEventListener('click', () => {
  for (let z = 0; z < MenuArray.length; z += 1) {
    MenuArray[z].classList.add('active');
  }
});
closeMenu.addEventListener('click', () => {
  for (let z = 0; z < MenuArray.length; z += 1) {
    MenuArray[z].classList.remove('active');
  }
});

window.onscroll = () => {
  for (let z = 0; z < MenuArray.length; z += 1) {
    MenuArray[z].classList.remove('active');
  }
};
/* -----------------------Create Feature Section-------------------------*/
const featuredSpeaker = [
  {
    idNo: 0,
    speakerNo: 'speaker-one',
    speakerImg: 'assets/Andrea Goldsmith.png',
    speakerName: 'Andrea Goldsmith',
    speakerTitle: 'Dean of Engineering and Applied Science at Princeton University',
    abstract: 'As 5G takes to the airwaves, we now turn our imagination to the next generation of wireless technology, The promise of this technology has created an international race to innovate, with significant investment by government as well as industry.',
  },
  {
    idNo: 1,
    speakerNo: 'speaker-two',
    speakerImg: 'assets/Richard G Baraniuk.png',
    speakerName: 'Richard G. Baranuk',
    speakerTitle: 'Professor of Electrical and Computer Engineering at Rice',
    abstract: 'We study the geometry of deep learning through the lens of approximation theory via splines. The enabling insight is that a large class of deep networks can be written as a composition of continuous piecewise affine (CPA) spline operators.',
  },
  {
    idNo: 2,
    speakerNo: 'speaker-three',
    speakerImg: 'assets/Michael l Jordan.png',
    speakerName: 'Michael l.Jordan',
    speakerTitle: 'Distinguished Professor in the Department of Electrical Engineering and Computer Science at the University of California, Berkeley',
    abstract: 'Artificial intelligence (AI) has focused on a paradigm in which intelligence inheres in a single, autonomous agent.  Social issues are entirely secondary in this paradigm. When AI systems are deployed...',
  },
  {
    idNo: 3,
    speakerNo: 'speaker-four',
    speakerImg: 'assets/Christos Harilos.png',
    speakerName: 'Christos Harilaos',
    speakerTitle: 'Donovan Family Professor of Computer Science at Columbia University',
    abstract: 'There is little doubt that cognitive phenomena are the result of neural activity.  However, there has been slow progress towards articulating an overarching computational theory of how exactly this happens.',
  },
  {
    idNo: 4,
    speakerNo: 'speaker-five',
    speakerImg: 'assets/Arjun R Pillai.png',
    speakerName: 'Arjun R. Pillai',
    speakerTitle: 'Co-founder & CEO | Profoundis',
    abstract: 'We work in the interesting domain of Natural Language Processing, Text analytics and more. Vibe is our product which delivers holistic, accurate, and relevant prospect & customer information to improve Enterprise sales & marketing productivity.',
  },
  {
    idNo: 5,
    speakerNo: 'speaker-six',
    speakerImg: 'assets/Ayanna Howard.png',
    speakerName: 'Ayanna Howard',
    speakerTitle: 'Chief Technology Officer at Zyrobotics',
    abstract: 'In recent years, deep neural network-based text-to-speech (TTS) models have been developed to generate high-fidelity audio that can be indistinguishable from genuine speech. A major limitation of most of these models, however, is that they can only synthesize voices from the training set.',
  },
];

function createFeature() {
  featuredSpeaker.forEach((project) => {
    const sectionTemplate = `
    <div class="${project.speakerNo}">
      <div class="speaker-img">
          <img src="${project.speakerImg}" alt="speaker-img">
          <div class="middle">
                <a class="speaker-links" href="https://www.facebook.com/ieeeICASSP"><i class="fa-brands fa-facebook-f fa-xl"></i></a>
                <a class="speaker-links" href="https://twitter.com/ieeeICASSP"><i class="fa-brands fa-twitter fa-xl"></i></a>
                <a class="speaker-links" href="https://www.linkedin.com/company/ieee"><i class="fa-brands fa-linkedin fa-xl"></i></a>
          </div>
      </div>
      <article class="speaker-profile">
        <h4>${project.speakerName}</h4>
        <p class="Stitle">${project.speakerTitle}</p>
        <p>${project.abstract}</p>
      </article>
  </div>
    `;
    speakersContainer.innerHTML += sectionTemplate;
  });
}
createFeature();
/* -----------------------Create Feature Section-------------------------*/

const speaker3 = document.querySelector('.speakers .speaker-three');
const speaker4 = document.querySelector('.speakers .speaker-four');
const speaker5 = document.querySelector('.speakers .speaker-five');
const speaker6 = document.querySelector('.speakers .speaker-six');

const moreLess = [speaker3, speaker4, speaker5, speaker6, partners, foot, showmorebtn, showlessbtn];

showmorebtn.addEventListener('click', () => {
  for (let i = 0; i < moreLess.length; i += 1) {
    moreLess[i].classList.add('active');
  }
});

showlessbtn.addEventListener('click', () => {
  for (let i = 0; i < moreLess.length; i += 1) {
    moreLess[i].classList.remove('active');
  }
});
