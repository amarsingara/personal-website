
interface ProjectsType {
  title: string
  description: string
  image: string,
  image2?: string,
  image3?: string,
  image4?: string,
  image5?: string,
  image6?: string,
  GitHub: string
  hosted: string
}

import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'

import swiftwater from '../assets/swiftwater.png'
import swiftwater1 from '../assets/swiftwater1.png'
import swiftwater2 from '../assets/swiftwater2.png'
import swiftwater3 from '../assets/swiftwater3.png'
import swiftwater4 from '../assets/swiftwater4.png'
import swiftwater5 from '../assets/swiftwater5.png'

import school from '../assets/school.png'
import school1 from '../assets/school1.png'
import school2 from '../assets/school2.png'
import school3 from '../assets/school3.png'

import ios from '../assets/ios.jpg'
import ios1 from '../assets/ios1.png'
import ios2 from '../assets/ios2.png'
import ios3 from '../assets/ios3.png'
import ios4 from '../assets/ios4.png'

import pokemon from '../assets/pokemon1.png'



export const ProjectsData: ProjectsType[] = [
  {
    title: 'Logo.com Color API',
    description: `An api for retrieving information about a requested color in various formats. HSL, RGB, CMYK, HEX.`,
    image: logo1,
    image2: logo2,
    image3: logo3,
    GitHub: '',
    hosted: 'https://3risp0qjdd.execute-api.us-east-2.amazonaws.com/Prod/colors?hex=001199',
  },
  {
    title: 'Swiftwater Consulting',
    description: `Mobile application for offline caching used in water measurments of remote locations.`,
    image: swiftwater,
    image2: swiftwater1,
    image3: swiftwater2,
    image4: swiftwater3,
    image5: swiftwater4,
    image6: swiftwater5,
    GitHub: '',
    hosted: 'https://swiftwaterconsulting.ca/',
  },
  {
    title: 'Android School Finder',
    description: `The app allows users to find high schools throughout the city of Burnaby. Provides enhanced and detailed statistics of each school along with a ranking`,
    image: school,
    image2: school1,
    image3: school2,
    image4: school3,
    GitHub: 'https://github.com/amarsingara/Android_School_Finder',
    hosted: ``,
  },
  {
    title: 'iOS Weather App',
    description: `Mobile app to show weather based on user location via longitude and latitude.`,
    image: ios,
    image2: ios1,
    image3: ios2,
    image4: ios3,
    image5: ios4,
    GitHub: 'https://github.com/jvina/IOS-Project-WeatherApp',
    hosted: '',
  },
  {
    title: 'Pokemon API',
    description: `API taking on the beloved Pokemon theme. Designed with a complete MySQL relational database using AWS with utilized stored procedures with respective endpoints.`,
    image: pokemon,
    GitHub: 'https://johnpoku.com/pokeAPI/doc/documentation.html',
    hosted: `https://johnpoku.com/pokeAPI/index.html`,
  }
];
