import React from 'react'
import "./Home.css"

function Home() {
  return (
    <>
    <main>
      <section className='section 1'>
        <div className='div_section1'>
          <h2>Encuentra el teclado perfecto para desatar tu potencial informático</h2>
          <img src="https://i.blogs.es/8c11b5/teclados-ap/1366_2000.jpeg" alt="" />
        </div>
      </section>

      <section className='section2'>
        <div className='cards'>
          <div className="card">
            <img src="https://ferratoinsumos.com.ar/sistemastock/images/166180554268714IMG.PNG" alt="" />
            <h3>Teclado Gamer MecÁnico - Draconic Blanco - REDRAGON</h3>
            <h4>Precio: 200$</h4>
            <div className='div_button'>
              <button>Ver más</button>
            </div>
          </div>
          <div className="card">
          <img src="https://acdn.mitiendanube.com/stores/001/418/967/products/arena-bloque-3-cable-desmontable-600x6001-2d71db265633d7106216400374491279-640-0.png" alt="" />
            <h3>ARENA T-TGK321</h3>
            <h4>Precio: 350$</h4>
            <div className='div_button'>
              <button>Ver más</button>
            </div>
          </div>
          <div className="card">
          <img src="https://acdn.mitiendanube.com/stores/001/375/073/products/1654620955_k616-rgb-wg-pnghq-11-9a623255150d6812b116920609140497-1024-1024.png" alt="" />
            <h3>Teclado Gamer Inalambrico Mecanico 60% REDRAGON FIZZ PRO K616 / Redragon Switch / RGB / Gris / Blanco</h3>
            <h4>Precio: 120$</h4>
            <div className='div_button'>
              <button>Ver más</button>
            </div>
          </div>
        </div>
      </section>

      <section className='section5'>
        <div className='contacto'>
        <label htmlFor="input_nombre">Nombre:</label>
        <input type="text" name="Nombre" id="input_nombre" />
        <label htmlFor="input_apellido">Apellido:</label>
        <input type="text" name='Apellido' id='input_apellido' />
        <label htmlFor="input_email">Email:</label>
        <input type="text" name="Correo electrónico" id="input_email" />
        <label htmlFor="input_asunto">Asunto:</label>
        <input type="text" name="Asunto" id="input_asunto" className='input_asunto'/>
        </div>
      </section>

    </main>


    <footer>
      <h3>@juanBautistaMinutillo</h3>
      <a href='#' className='Volver-arriba'><img src="../Img/8679802_arrow_up_icon.png" alt="" /></a>
    </footer>
    </>
  )
}

export default Home