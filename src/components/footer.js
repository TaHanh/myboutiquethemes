import { useRouter } from 'next/router'
import Router from 'next/router'
export default function Footer(props) {
   return (
     <footer>
       <div className="footer-title">Follow Me Around</div>
       <div className="row mx-0">
         <div className="col-12-8">
           <a>  <img src={require('../static/images/blush_flowers.jpg')} /></a>
         </div>
       </div>
       <div className="site-footer">
         <div className="footer-container">
           <ul className="footer-menu">
             <li className="footer-menu-item">
               <a href="https://demo.myboutiquethemes.com/blush-classic/category/travel/">Travel</a>
               </li>
               <li className="footer-menu-item">
               <a href="https://demo.myboutiquethemes.com/blush-classic/category/fashion/">Fashion</a>
               </li>
               <li className="footer-menu-item">
               <a href="https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/">Lifestyle</a>
               </li>
               <li className="footer-menu-item">
               <a href="https://demo.myboutiquethemes.com/blush-classic/contact/">Shop my Style</a>
               </li>
           </ul>
        
         <div className="footer-info">
           <p className="copyright">Your copyright notice. 2020.</p>
           <a href="https://www.etsy.com/de/shop/MyBoutiqueThemes" target="_blank">Blush Co. WordPress Theme</a> by My Boutique Themes.		
         </div>
       </div> 
       </div>
      </footer>
   )
 }
 