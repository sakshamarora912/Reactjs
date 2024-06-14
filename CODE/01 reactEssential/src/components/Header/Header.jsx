import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

<<<<<<< HEAD


export default function Header() {
  const description = ['Fundamental', 'Crucial', 'Core'][Math.floor(Math.random() * 3)];
=======
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];
>>>>>>> da0d305d9099cf0fe5009c3c7683bf25fa46f048

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}