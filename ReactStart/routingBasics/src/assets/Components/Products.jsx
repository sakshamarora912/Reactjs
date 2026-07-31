import { Link } from "react-router-dom"
const Demo_Products=[
    {id:'p1',title:'Products_1'},
    {id:'p2',title:'Products_2'},
    {id:'p3',title:'Products_3'},
]

const Products = () => {
  return (
   <div style={{textAlign:"center"}}>
    <h1>Product Page</h1>
    <ul>
        {Demo_Products.map((item)=>(
            <li key={item.id}>
                <Link to={`/products/${item.id}`}>{item.title}</Link>
            </li>
        ))}
    </ul>

   </div>
  )
}

export default Products