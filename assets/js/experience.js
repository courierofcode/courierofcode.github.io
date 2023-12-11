AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Systems Engineer",
    cardImage: "assets/images/experience-page/USACE.png",
    place: "Dallas, Texas",
    time: "(Dec, 22 - Dec, 23)",
    desp: "<li>Designed & implemented scalable web & mobile apps using Kubernetes and Terraform while logging data.</li>\
    <li>Utilized Prometheus & Grafana to visualize traffic bottlenecks from log data & implemented load balancers.</li>\
    <li>Implemented CI/CD pipelines with Ansible, UCB, and Jenkins to automate software testing & deployment.</li>\
    <li>Designed & developed 3D world simulator UI modeled after USACE water & power control objectives.</li>\
    <li>Deployed world simulator to the web according to accessibility requirements using the React framework.</li>",
  },
  {
    title: "OIT & CX Associate",
    cardImage: "assets/images/experience-page/UTA.png",
    place: "Arlington, Texas",
    time: "(Aug, 20 - Aug, 22)",
    desp: "<li>Architected and implemented a test plan for Linux server migration to AWS ensuring minimal downtime.</li>\
    <li>Installed, and maintained IT hardware and software, including OSs & apps with Intune & MS group policy.</li>\
    <li>Provided on-call technical support to customers, including troubleshooting hardware & software lab issues.</li>",
  },
  {
    title: "AV Supervisor",
    cardImage: "assets/images/experience-page/UTA.png",
    place: "Arlington, Texas",
    time: "(Jul, 19 - May, 20)",
    desp: "<li>Represented UTA professionally in high-stress environments, implementing new event configurations daily.</li>\
    <li>Led teams to set up seating, audio, and visual equipment for university in & outdoor events and workshops.</li>\
    <li>Dynamically allocated compute resources for both internal and external campus events, prioritizing internal.</li>",
  },
  {
    title: "AV Technician",
    cardImage: "assets/images/experience-page/UTA.png",
    place: "Arlington, Texas",
    time: "(Feb, 19 - Jul, 19)",
    desp: "<li>Learned quickly how to program sound & light boards, adapting a mindset of lifelong learning.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap"> 
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
      <div class="card volunteerCard" style="height: 550px;width:400px">
      
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
    image: "assets/images/experience-page/SCRFUTA21.png",
    desp: "UTA Student Computing Research Festival was a event where I Queried & Analyzed Video Contents in a team and presented our findings which secured us the runner-up spot.",
    href: "https://uta.engineering/scrf/presentations.php",
  },
  {
    title: "HackUTA",
    subtitle: "Participant",
    image: "assets/images/experience-page/HackUTA22.png",
    desp: "HackUTA is a 48 hour long hackathon organized with an aim to enable students to create a project which empowers learning..",
    href: "https://www.hackuta.org/",
  },
  {
    title: "AmazonHealthAI",
    subtitle: "Competitor",
    image: "assets/images/experience-page/AmazonHealthAI.png",
    desp: "",
    href: "https://www.hackuta.org/",
  },
  {
    title: "XRP NFT Launch Party",
    subtitle: "Competitor",
    image: "assets/images/experience-page/XRP.png",
    desp: "",
    href: "https://www.hackuta.org/",
  },
  {
    title: "NEAR MetaBUILD III",
    subtitle: "Competitor",
    image: "assets/images/experience-page/NEAR.png",
    desp: "",
    href: "https://www.hackuta.org/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
