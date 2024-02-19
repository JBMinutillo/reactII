import { productos } from "../productos"
import Producto from "./Producto"
function Productos() {
  return (
    <div id="container" className="cards">
        {productos.map((prod)=>(
            <Producto key={prod.id} nombre={prod.nombre} precio={prod.precio} prod={prod.img}/>
        ))}
    </div>
  )
}

export default Productos