import lineaviva from "../assets/images/projects/lineaviva/lineaviva.png";
import rickandmorty from "../assets/images/projects/jump2digital/rick_and_morty.png";
import kibus from "../assets/images/projects/kibus/kibus.png";
import udefine from "../assets/images/projects/udefine/udefine.png";
import website_personal from "../assets/images/projects/website_personal/website_personal_v1.png";
import pucelamatch from "../assets/images/projects/pucelamatch/pucela_match.png";

export const projects = [
  {
    id: 1,
    url: "website_personal_v1.0",
    images: {
      main: website_personal,
    },
    technologies: ["Javascript", "CSS", "HTML"],
    category: "personal",
    es: {
      title: "Website Personal V1.0",
      description:
        'Mi sitio web personal lo construí desde cero bajo la guía de un tutor. Fue el proyecto final del bootcamp "Frontend Bootstrapping" en Medellín, Colombia. Utilicé JavaScript básico, HTML y CSS para crear este sitio web, que me permitió aprender los fundamentos del desarrollo web y sentar las bases para futuros proyectos. Este proyecto demuestra mi capacidad para aprender y aplicar nuevas habilidades en el desarrollo web.',
    },
    en: {
      title: "Website Personal V1.0",
      description:
        'My personal website was built from scratch under the guidance of a tutor. It was the final project of the "Frontend Bootstrapping" bootcamp in Medellín, Colombia. I used basic JavaScript, HTML, and CSS to create this website, which allowed me to learn the fundamentals of web development and lay the groundwork for future projects. This project demonstrates my ability to learn and apply new skills in web development.',
    },
    github: "https://github.com/willyprados/willyprados.github.io",
    website: "https://willyprados.github.io",
  },
  {
    id: 2,
    url: "udefine",
    images: {
      main: udefine,
    },
    technologies: ["Astro", "Tailwind CSS"],
    category: "recommended",
    es: {
      title: "uDefine",
      description:
        "Creado como parte del proyecto de grado de la formación profesional. Este proyecto lo desarrolle desde cero. Creé el diseño en Figma, implementé estilos con Tailwind y utilicé Astro como framework. El diseño de la página lo inspire en la combinación de colores de la Marca SAP. Implementé el proyecto en Cloudflare.",
    },
    en: {
      title: "uDefine",
      description:
        "Created as part of the graduation project of the professional training. This project was developed from scratch. I created the design in Figma, implemented styles with Tailwind, and used Astro as the framework. The design of the page was inspired by the color scheme of the SAP Brand. I deployed the project on Cloudflare.",
    },
    github: "https://github.com/willyprados/uDefine-Astro",
    website: "https://udefine-astro.pages.dev/en/",
  },
  {
    id: 4,
    url: "rickandmorty",
    images: {
      main: rickandmorty,
    },
    technologies: ["JavaScript", "CSS", "HTML"],
    category: "practice",
    es: {
      title: "Rik and Morty",
      description:
        "Creado como parte del Hackathon 'Jump2Digital', este proyecto lo desarrolle desde cero. Creé la estructura HTML, implementé estilos CSS y utilicé JavaScript. El diseño de la página lo inspire en la combinación de colores del sitio web de la api. Accedí a datos de personajes de la API de Rick and Morty a través de JavaScript e implementé el proyecto en Cloudflare. Este proyecto demuestra mis habilidades en desarrollo frontend, integración de API y despliegue en la nube.",
    },
    en: {
      title: "Rick and Morty",
      description:
        "Created as part of the 'Jump2Digital' Hackathon, this project was developed from scratch. I handled the HTML structure, implemented pure CSS styles, and utilized JavaScript. The design of the page was inspired by the color scheme of the parent website. I accessed character data from the Rick and Morty API through JavaScript and deployed the project on Netlify. This project demonstrates my skills in front-end development, API integration, and cloud deployment.",
    },
    github: "https://github.com/willyprados/jump2digital",
    website: "https://jump2digital.pages.dev/",
  },
  {
    id: 6,
    url: "lineaviva",
    images: {
      main: lineaviva,
    },
    technologies: ["JavaScript", "CSS", "HTML"],
    category: "experiments",
    es: {
      title: "LíneaVIVA",
      description:
        "Línea Viva es un proyecto de revista digital desarrollado con el objetivo de difundir contenido corporativo y editorial de forma accesible y atractiva. El sitio fue diseñado y maquetado íntegramente con HTML, CSS y algo de JavaScript, asegurando un rendimiento óptimo y una experiencia de usuario clara. Uno de los requisitos técnicos principales fue garantizar la compatibilidad con navegadores antiguos, incluyendo Internet Explorer 7, lo que implicó aplicar técnicas de maquetación y scripts adaptados a estándares heredados. La revista se publica y promociona mensualmente a través del portal oficial de ISAGEN, sirviendo como canal digital informativo para sus usuarios y colaboradores.",
    },
    en: {
      title: "LíneaVIVA",
      description:
        "Línea Viva is a digital magazine project developed with the aim of disseminating corporate and editorial content in an accessible and attractive way. The site was designed and coded entirely with HTML, CSS, and some JavaScript, ensuring optimal performance and a clear user experience. One of the main technical requirements was to ensure compatibility with older browsers, including Internet Explorer 7, which involved applying layout techniques and scripts adapted to legacy standards. The magazine is published and promoted monthly through ISAGEN's official portal, serving as an informative digital channel for its users and collaborators.",
    },
    github: "https://github.com/willyprados/ISAGEN-amazine-133",
    website:
      "https://www.isagen.com.co/LineaVIVA/lineaviva_edicion_133/html/page-01.html",
  },
  {
    id: 7,
    url: "kibus",
    images: {
      main: kibus,
    },
    technologies: ["React.js", "Style Components", "Vite"],
    category: "practice",
    es: {
      title: "Kibus",
      description:
        "Este proyecto sirvió como prueba técnica para la empresa Rocket Digital. Fue construido usando Vite, React.js y Style Components.",
    },
    en: {
      title: "Kibus",
      description:
        "This project served as a technical test for the company Rocket Digital. It was built using Vite, React.js, and Style Components.",
    },
    github: "https://github.com/willyprados/kibus-prueba",
    website: "https://kibus.netlify.app",
  },
  {
    id: 8,
    url: "pucelamatch",
    images: {
      main: pucelamatch,
    },
    technologies: ["Javascript", "CSS", "HTML"],
    category: "experiments",
    es: {
      title: "Pucela Match",
      description:
        "Pucela Match es una aplicación interactiva inspirada en la dinámica de Tinder, la desarrolle para el Ayuntamiento de Valladolid y presentada en un estand institucional durante un evento en Valladolid. Su propuesta convierte el aprendizaje en un juego: los participantes debían deslizar perfiles de personajes históricos y decidir si habían tenido o no relación con la ciudad. El objetivo era poner a prueba el conocimiento local de forma divertida, fomentando el interés por la historia y la cultura vallisoletana mediante una experiencia gamificada, intuitiva y social que invitaba a competir, descubrir curiosidades y aprender mientras se jugaba.",
    },
    en: {
      title: "Pucela Match",
      description:
        "Pucela Match is an interactive application inspired by the dynamics of Tinder, developed for the City Council of Valladolid and presented at an institutional stand during an event in Valladolid. Its proposal turns learning into a game: participants had to swipe profiles of historical characters and decide whether they had a relationship with the city or not. The goal was to test local knowledge in a fun way, fostering interest in the history and culture of Valladolid through a gamified, intuitive, and social experience that invited competition, discovery of curiosities, and learning while playing.",
    },
    github: "https://github.com/willyprados/puselamatch",
    website: "https://pucelamatch.pages.dev/",
  },
];
