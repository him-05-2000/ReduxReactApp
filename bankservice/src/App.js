import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';
import React from 'react';
import Register from "./components/Register";
import Selfregister from './components/Selfregister';
import Home from './components/Home'
import NavBar from './components/Navbar'

function App() {
   const router=createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Selfregister" element={<Selfregister />}></Route>
      </Route>
   ))
  return (
 <div>
  <RouterProvider router={router} />
 </div>
  );
}

export default App;
