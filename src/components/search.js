import { useState } from "react";

export default function Search(props) {
   const [value, changeValue] = useState("")
   const search = () => {

   }
   return (
      <div className="search">
         <div className="popup-search">   
         <div className="float-right btn-close cursor-pointer"  onClick={()=> props.callBack("CHECK_SEARCH", "")}>
            <i class="fas fa-times"></i>
         </div>
         <div class="search-container text-center">
            <h2>What are you looking for?</h2>
            <form class="searchform">
               <label for="search-top" className="cursor-pointer" onClick={()=> props.callBack("SEARCH", value)} ><i class="fas fa-search"></i></label>
               <input type="text" id="search-top" placeholder="Type search" value="" name="s" 
               value={value}
               onChange={e => {
                  changeValue(e.target.value)
            
               }} />
            </form>
         </div>
      </div>
      </div>
   );
}