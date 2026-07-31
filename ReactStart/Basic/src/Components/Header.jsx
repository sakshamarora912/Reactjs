import img from '../assets/react-core-concepts.png';

const Header = () => {
 const description=['Fundamental','Crucial','Core'][Math.floor(Math.random()*3)]

  return (
    <header className="text-center my-12">
        <img className="m-auto h-20 w-40 object-cover" src={img}/>
        <h1 className="m-0 font-roboto-condensed text-7xl font-bold pb-6 bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-400 bg-clip-text text-transparent filter drop-shadow-lg">React Essential</h1>
        <p className="m-0 text-lg text-grey font-roboto-condensed">{description} React concepts you will need for almost any app you are going to build!</p>
    </header>
  )
}

export default Header