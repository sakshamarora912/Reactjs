import { Link } from "react-router-dom"
const HomePage = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>My Home Page</h1>
        <p>Go to <Link to="/products">thsi lists of our products</Link></p>
    </div>
  )
}

export default HomePage