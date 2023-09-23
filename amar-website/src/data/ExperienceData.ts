interface ExperienceDataType {
  title: string;
  date: string;
  details: string[];
}

export const ExperienceData: ExperienceDataType[] = [
  {
    title: 'Full Stack Developer | FreshPrep',
    date: ' Jun 2021 - Present',
    details: [
      'Develop and maintain features on a Ruby on Rails application with a Vue.js front end',
      'Creating performant client-facing pages in collaboration with marketing and UX design teams',
      'Utilizing CircleCI and Cloud Build to process test suits and further CICD progression',
      'Creating internal tools in admin portal for all departments',
      'Designing data model migration to support the growing needs of FreshPrep',
      'Mentoring newer developers with an emphasis on sustainable coding practices',
      'Participating with senior developers in migration a currently, large monolithic app into microservices'
    ],
  },
  {
    title: 'Full Stack Developer | Cricket Property Management',
    date: 'Feb 2021 - Jul 2021',
    details: [
      'React Application development with Typescript and from scratch in order to achieve business requirements of managing Property Owners and Tenants.',
      'Implemented CRUD operations on MarinaDB SQL backend, using Node.js/Express server.',
      'Integrated Firebase Authentication, payment, repair and request managing system.',
      'Integrated Circel CI for CI/CD development process.',
      'Created responsive front end UI/UX design through MaterialUI, mockups and wireframes.',
      'Integrated TSLint for code readability and functionality'
    ],
  },
  {
    title: 'Full Stack Developer | Swift Water Consulting',
    date: 'Sept 2020 - Dec 2020',
    details: [
      'React Native Application development from scratch in order to achieve remote access to existing software.',
      'Implemented full functionality for retrieving and pushing information to current relational database.',
      'Implemented UI/UX graph as an svg using existing and newly entered endpoints.',
      'Developed in-app offline mode and caching using async storage.',
      'Completed entire application in a team of 5 using agile methodology within a 12 week deadline.'
    ],
  },
  {
    title: 'Full Stack Developer | Logo.com',
    date: 'Apr 2020 - June 2020',
    details: [
      'Created a RESTful API using Node.Js.',
      'API returns information about a requested color in various formats including HSL, RGB, CMYK, HEX, Pantone along with formats of complementary, triad, analogous colors.',
      'Used AWS codestar, gateway and lambda to setup CI/CD.',
      'Created responsive UI/UX front-end to consume API in Vue.js and Bootstrap.',
      'Added an additional feature to request color palette from uploaded image using JQuery.',
      'Currently used in production by Logo.com – a company that has generated 19 million logos and brands for customers.'
    ],
  },
];




