
import './App.css'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import SobreNosotros from './paginas/SobreNosotros';
import Home from './paginas/Home';
import Layout from './paginas/Layout';
import NoPage from './paginas/NoPage';
import Productos from './paginas/Productos';
/*import Protegida from './paginas/Protegida';*/
import { useState } from 'react';
function App() {
  let [auth,setAuth]= useState(false);
  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout auth={auth} setAuth={setAuth}/>}>
              <Route index element={<Home/>} />
              <Route path='SobreNosotros' element={<SobreNosotros/>} />
              <Route path='productos' element={<Productos/>} />
                {/*<Protegida auth={auth} redirectTo="*">
                </Protegida>*/}

              <Route path='*' element={<NoPage/>} />

          </Route>
      </Routes>
   </BrowserRouter>

  )
}

export default App
