import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
  github,
  bootstrap,
  collage,
  nti,
  iti,
  comfy,
  movies,
  lissome,
  leon,
  kasper,
  firebaseTask,
  weatherApp,
  bondi,
  dashboard,
  elzero,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "Mearn Full stack Developer",
    company_name: "Information Technology Institute",
    icon: iti,
    iconBg: "#383E56",
    date: "Mar 2023 - Jun 2023",
    points: [
      "Developing and maintaining web applications using html, CSS, JS, React.js, Mongodb, Node.js,Express.js and other related technologies.",
      "Collaborating with iti developer to create high-quality websites.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Design",
    company_name: "National Telecommunication Institute",
    icon: nti,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using html, CSS, JS and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Electronics and Commenication Engineer",
    company_name: "Mansoura University",
    icon: collage,
    iconBg: "#383E56",
    date: "Sep 2017 - Aug 2022",
    points: [
      "Grade: Excellent with honors.",
      "Graduation Project: (mobile application using Flutter) - Grade: Excellent.",
    ],
  },
];

const projects = [
  {
    name: "Movies",
    description: `Website that use a rest apis to fetch the movies and the trending movies, tv series and popular actors/actress.
       User can search about any movie, series, or actor also can see the details of them all.`,
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Restapi",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "React-Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Context",
        color: "pink-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/Safaa-Ebrahim/movies",
    source_deplyment_link: "https://movies-kappa-six.vercel.app/",
  },
  {
    name: "Furniture E-commerce (Comfy)",
    description: `Comfy is a MERN fullstack furniture Ecommerce project that has the following features:"
      1- Regiseteration / logging-in system
      2- Shopping cart
      3- Product details
      4- Checkout process
      5- User account
      6- Admin dashboard
      7- Search for products
      8- Filter products by price, categoty and brand
      9- Contact form `,
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Express js",
        color: "pink-text-gradient",
      },
      {
        name: "React-Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: comfy,
    source_code_link: "https://github.com/Comfy-team/comfy-frontend",
    source_deplyment_link: "https://comfy-frontend.vercel.app/",
  },
  {
    name: "Firebase & React Task",
    description: `practise of learning firebase and react, has the following features:
    1- Regiseteration / logging-in system.
    2- sigin with email/password and google.
    3- User account.
    4- crud operation of book store.
    5- uploading images.
`,
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "React-Bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: firebaseTask,
    source_code_link: "https://github.com/Safaa-Ebrahim/react-firebase",
    source_deplyment_link: "https://firebase-crud-auth-pi.vercel.app/login",
  },
  {
    name: "Elzero Templet",
    description: "Elzero responsive templet",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Animation",
        color: "blue-text-gradient",
      },
    ],
    image: elzero,
    source_code_link: "https://github.com/Safaa-Ebrahim/Elzero",
    source_deplyment_link: "https://safaa-ebrahim.github.io/Elzero/",
  },
  {
    name: "Weather App",
    description: `The Weather Forecasting user
     can: 1- input the name of a city or location to get weather information for that specific area. 
     2- Weather Display: Once the user enter a location, the app fethes data from a weather api and displays the information.
     3- observe the weather for the next 5-6 days.`,
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "RestApi",
        color: "pink-text-gradient",
      },
    ],
    image: weatherApp,
    source_code_link: "https://github.com/Safaa-Ebrahim/Weather-App",
    source_deplyment_link: "https://weather-app-forecasting.vercel.app/",
  },
  {
    name: "Bondi Templet",
    description: "Bondi responsive templet using bootstap",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: bondi,
    source_code_link: "https://github.com/Safaa-Ebrahim/bondi-templet",
    source_deplyment_link: "https://safaa-ebrahim.github.io/bondi-templet/",
  },
  {
    name: "Lissome Templet",
    description: "Lissome responsive templet using bootstap",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
    ],
    image: lissome,
    source_code_link: "https://github.com/Safaa-Ebrahim/Lissome-Templet",
    source_deplyment_link: "https://safaa-ebrahim.github.io/Lissome-Templet/",
  },
  {
    name: "Dashboard Templet",
    description: "Dashboard responsive templet",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: dashboard,
    source_code_link: "https://github.com/Safaa-Ebrahim/Dashboard",
    source_deplyment_link: "https://safaa-ebrahim.github.io/Dashboard/",
  },
  {
    name: "Kasper Templet",
    description: "Kasper responsive templet",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: kasper,
    source_code_link: "https://github.com/Safaa-Ebrahim/Kasper-Template",
    source_deplyment_link: "https://safaa-ebrahim.github.io/Kasper-Template/",
  },
  // {
  //   name: "Leon Temple",
  //   description: "Leon Responsive templet",
  //   tags: [
  //     {
  //       name: "HTML",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "CSS",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: leon,
  //   source_code_link: "https://github.com/Safaa-Ebrahim/Leon-Templet",
  //   source_deplyment_link: "https://safaa-ebrahim.github.io/Leon-Templet/",
  // },
  
];

export { services, technologies, experiences, projects };
