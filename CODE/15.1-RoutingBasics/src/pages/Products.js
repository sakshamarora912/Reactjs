import { Link } from "react-router-dom";
const Demo_Products=[
  {id:'p1',title:'product 1'},
  {id:'p2',title:'product 2'},
  {id:'p3',title:'product 3'},
]
function ProductsPage() {
  return (
    <div style={{textAlign:"center"}}>
      <h1>The Products Page</h1>
      <ul>
        {Demo_Products.map(prod => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsPage;
