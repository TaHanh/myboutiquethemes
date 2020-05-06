import { useRouter } from 'next/router'
import Router from 'next/router'
export default function Footer(props) {
  return (
    <footer>
      <div className="footer-title">Follow Me Around</div>
      <div className="row mx-0 justify-content-center">
        <div className="col-md-12-8 px-0 col-12">
          <a href="#">
            <div style={{
              backgroundImage: "url(" + `${require('../static/images/f1.jpg')}` + ")",
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}>
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div>
          </a>
        </div>
        <div className="col-md-12-8 px-0 col-12">
          <a href="#"><div style={{
            backgroundImage: "url(" + `${require('../static/images/f2.jpg')}` + ")",
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }}>
            <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
          </div>
          </a>
        </div>
        <div className="col-md-12-8 px-0 col-12">

          <a href="#">
            <div style={{
              backgroundImage: "url(" + `${require('../static/images/f3.jpg')}` + ")",
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}>
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div>
          </a>
        </div>
        <div className="col-md-12-8 px-0 col-12">

          <a href="#">
            <div style={{
              backgroundImage: "url(" + `${require('../static/images/f4.jpg')}` + ")",
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}>
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />

            </div>
          </a>
        </div>
        <div className="col-md-12-8 px-0 col-12">

          <a href="#">
            <div style={{
              backgroundImage: "url(" + `${require('../static/images/f5.jpg')}` + ")",
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}>
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div>
          </a>
        </div>
        <div className="col-md-12-8 px-0 col-12">

          <a href="#">
            <div style={{
              backgroundImage: "url(" + `${require('../static/images/f6.jpg')}` + ")",
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}>
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div>
          </a>
        </div>
        <div className="col-md-12-8 px-0 d-sm-block d-none">

          <a href="#">
            <div style={{
              backgroundImage: "url(" + `${require('../static/images/f7.jpg')}` + ")",
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}>
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div></a>
        </div>
        <div className="col-md-12-8 px-0 d-sm-block d-none">

          <a href="#">
            <div style={{
              backgroundImage: "url(" + `${require('../static/images/f8.jpg')}` + ")",
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}>
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div>
          </a>
        </div>
        <div className="col-6 px-0 d-block d-sm-none">

          <a href="#">
            <div style={{
              backgroundImage: "url(" + `${require('../static/images/f7.jpg')}` + ")",
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}>
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div></a>
        </div>
        <div className="col-6 px-0 d-block d-sm-none">

          <a href="#">
            <div style={{
              backgroundImage: "url(" + `${require('../static/images/f8.jpg')}` + ")",
              backgroundPosition: 'center center',
              backgroundSize: 'cover'
            }}>
              <img style={{ visibility: 'hidden' }} src={require('../static/images/f1.jpg')} />
            </div>
          </a>
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