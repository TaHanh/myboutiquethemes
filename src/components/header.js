import { useRouter } from 'next/router'
import Router from 'next/router'
export default function Header(props) {
  return (
    <header className="fixed-top">
      <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          <span className="navbar-txt">MENU</span>
        </button>
        <div className="search-icon d-lg-none"><i class="fas fa-search"></i></div>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Lifestyle</a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-lg-block d-none">Fashion <i class="fas fa-angle-down"></i></a>
              <a class="nav-link d-block d-lg-none" data-toggle="collapse" href="#collapseOne" aria-expanded="false">Fashion <i class="fas fa-angle-down"></i></a>
              <ul className="sub-menu" id="collapseOne">
                <li className="menu-item">
                  <a href="https://demo.myboutiquethemes.com/blush-classic/category/outfits/">Outfits</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Beauty</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Travel</a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-lg-block d-none">Page Templates  <i class="fas fa-angle-down"></i></a>
              <a class="nav-link d-block d-lg-none"  data-toggle="collapse" href="#collapseTwo" aria-expanded="false">Page Templates  <i class="fas fa-angle-down"></i></a>
              <ul className="sub-menu" id="collapseTwo">
                <li className="menu-item">
                  <a href="https://demo.myboutiquethemes.com/blush-classic/contact/">Boutique</a>
                </li>
                <li className="menu-item">
                  <a href="https://demo.myboutiquethemes.com/blush-classic/instagram-page/">Instagram Page</a>
                </li>
                <li className="menu-item">
                  <a href="https://demo.myboutiquethemes.com/blush-classic/landing-page/">Landing Page</a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <div className="social-media-icons">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fas fa-heart"></i></a>
              <a href="#"><i class="fab fa-facebook-f"></i></a>
            </div>
            <div className="search-icon"><i class="fas fa-search"></i></div>
          </form>
        </div>
      </nav>
    </header>
  )
}
