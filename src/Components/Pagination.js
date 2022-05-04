import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { memo } from 'react';
import {  Link } from "react-router-dom";
function Pagination({sumPage}) {
    const params = useParams() ;
    var url = '';
    if(params.key !== undefined){
    url = `dtdd/search/${params.key}/` ;
    
    }
   
     const keySearch = useLocation().search;
   var filterPrice = new URLSearchParams(keySearch).get('price');
   var filterPage = new URLSearchParams(keySearch).get('page');
   if (filterPage === null){
    filterPage = 1;
   }
  // var filterSort = null;
   var filterSort = new URLSearchParams(keySearch).get('sort');
   var stringUrl = '';
   //console.log(filterPage);
   if ((params.category !== undefined && filterPrice !== null) || filterPrice !== null){
    stringUrl = '&'
   } else {
    stringUrl = '?'
   }
   
  
    const arrayPage = [];
    for (let i = 0; i < Math.ceil(sumPage / 10); i++){
     arrayPage.push(i+1);
    }
    return (

<ul class="pagination home-produce__pagination">
    {arrayPage.map((value, index) => (



<li   className={Number(value) === Number(filterPage) ? 'active-li ' : 'pagination__item pagination__item--active'}   >
    

    <li   key={index}>    
        <Link  className="pagination__item-link" to={`/${url}${params.category === undefined ? '' : params.category}${filterPrice === null ? '' : `?price=${filterPrice}`}${stringUrl}page=${value}${filterSort !== null ? `&sort=${filterSort}` : ''}`}> {value}</Link> </li>


</li>






       
    ))}
 </ul>
    );
}
export default Pagination

