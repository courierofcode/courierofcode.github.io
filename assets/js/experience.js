AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Science Intern",
    cardImage: "assets/images/experience-page/loopback.png",
    place: "Dallas, Texas",
    time: "(May, 21 - Aug, 21)",
    desp: "<li>Implemented unsupervised ML for anomaly detection in on-site data for better process time.</li><li>Visualized models using Python to summarize findings during presentations.</li><li>Worked closely with clientele for a better understanding of requirements.</li>",
  },
  {
    title: "Software Engineer Intern",
    cardImage: "assets/images/experience-page/MATLAB.png",
    place: "Remote",
    time: "(May, 20 - Aug, 20)",
    desp: "<li> Utilized MATLAB & C++ to identify cost-effective pandemic intervention strategies.</li><li>Presented findings to subdivision lead after writing an executive summary with value proposition.</li><li>Improved team productivity by writing secure Python scripts to automate repetitive background tasks.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "StudentCode-in 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "Hakin-Codes",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "UTA SCRF",
    subtitle: "OurCS@DFW Competitor",
    image: "assets/images/experience-page/SCRFUTA.png",
    desp: "UTA Student Computing Research Festival was a event where I Queried & Analyzed Video Contents in a team and presented our findings which secured us the runner-up spot.",
    readmore: "https://uta.engineering/scrf/presentations.php",
  },
  {
    title: "HackUTA",
    subtitle: "Participant",
    image: "assets/images/experience-page/HackUTA2022.png",
    desp: "HackUTA is a 48 hour long hackathon organized with an aim to enable students to create a project which empowers learning..",
    readmore: "https://www.hackuta.org/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, readmore }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${readmore}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
