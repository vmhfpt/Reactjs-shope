import {  Link } from "react-router-dom";
import { useContext } from 'react';
import {conTextBody} from '../Context';
function Pagination({ pageDefault,curentPage,sumPage}) {
    const InforMation =  useContext(conTextBody);
  // console.log("page",pageDefault);
   const arrayPage = [];
   for (let i = 0; i < Math.ceil(curentPage / 5); i++){
    arrayPage.push(i+1);
   }
    return (

<ul className="page-item">
   {arrayPage.map((index => (

<li className={Number(pageDefault) === Number(index) ? 'active-li' : ''}  key={index}><Link to={`/page/${index}`}>  {index} </Link></li>

   )))}
    

</ul>
    );
}
export default Pagination;