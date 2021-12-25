
import { Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blog";
import Contact from "./pages/Contact";
import './App.css';
function App(){
  return (
  <div>
      <Routes>
          <Route  path="/:name" element={<Blogs />} />
          <Route path="/" element={<Contact />} />
       
          <Route path="/page/:id" element={<Contact />} />
          <Route path="/category/:name" element={<Contact />} />
        
</Routes>
  </div>)
}
export default App ;