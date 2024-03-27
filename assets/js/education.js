AOS.init();

// MOOCs Cards
const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Android University",
    cardImage: "/assets/images/education-page/codepath.png",
    moocLink: "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:2153200d-d18d-4e4d-9186-567e6512657d",
  },
  {
    title: "iOS University",
    cardImage: "/assets/images/education-page/codepath.png",
    moocLink: "https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:dddf1256-0a82-41cd-a73a-5d849b6ee1cd",
  },
  {
    title: "CS50",
    cardImage: "assets/images/education-page/edx.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },
  {
    title: "Data Analytics",
    cardImage: "assets/images/education-page/linkedin.png",
    moocLink: "https://www.linkedin.com/learning/",
  },
  {
    title: "Math",
    cardImage: "assets/images/education-page/khanacademy.png",
    moocLink: "https://www.coursera.org/browse/data-science",
  },
  {
    title: "Calculus",
    cardImage: "assets/images/education-page/coursera.png",
    moocLink: "https://www.coursera.org/browse/data-science",
  },
  {
    title: "Cryptography",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/course/cryptography-for-beginners/",
  },
  {
    title: "Cybersecurity",
    cardImage: "assets/images/education-page/codepath.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column">  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
  {
    title: "AWS Cloud Architect",
    image: "assets/images/education-page/badge-ACA.png",
    description: "Earned Feb 7, 2024",
  },
  {
    title: "Terraform Certified Associate",
    image: "assets/images/education-page/badge-TCA.png",
    description: "Earned Jan 7, 2023",
  },
  {
    title: "Google Cloud Architect",
    image: "assets/images/education-page/badge-GCA.png",
    description: "Earned Apr 7, 2024",
  },
  
  // Future Badge Placement 

  // {
  //   title: "AWS Cloud Architect",
  //   image: "assets/images/education-page/badge-ACA.png",
  //   description: "Earned Feb 7, 2024",
  // },
  // {
  //   title: "Azure Solutions Architect",
  //   image: "assets/images/education-page/badge-ASA.png",
  //   description: "Earned Mar 7, 2024",
  // },
  // {
  //   title: "Google Cloud Architect",
  //   image: "assets/images/education-page/badge-GCA.png",
  //   description: "Earned Apr 7, 2024",
  // },
  // {
  //   title: "Terraform Certified Associate",
  //   image: "assets/images/education-page/badge-TCA.png",
  //   description: "Earned Jan 7, 2023",
  // },
  // {
  //   title: "CompTIA Security+",
  //   image: "assets/images/education-page/badge-Sec.png",
  //   description: "Earned Feb 7, 2023",
  // },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/


$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
