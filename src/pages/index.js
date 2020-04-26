import Head from 'next/head'
import Layout from '../components/layout'
import HomeView from '../components/home'
import '../static/styles/home.scss'
import Aside from '../components/aside'
function Home(props) {
  return (
    <Layout title={"Beauty Favorites for Summer – Blush "}>
      <div className="site-content">
        <div className="row">
          <div className="col-lg-8">
            <div className="site-main">
              <div className="entry-thumbnail">
                <img src={require('../static/images/the_tonik_b.jpg')} />
              </div>
              <div className="entry-body">
                <div className="entry-header">
                  <div className="entry-meta">
                    <a href="https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/">LIFESTYLE</a>,
                <a href="https://demo.myboutiquethemes.com/blush-classic/category/travel/"> TRAVEL</a>
                  </div>
                  <h1 className="entry-title">WHAT I LEARNT FROM BLOGGING IN THE LAST 5 YEARS</h1>
                </div>
                <div className="entry-content">
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam …</p>
                  <div className="shop-the-post">
                    <h3>Shop this Post</h3>
                    <div className="shop-the-post-container">
                      <p></p>
                    </div>
                  </div>
                  <a className="readmore"
                    href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                    <button className="btn read-more">
                      Read more
              </button>
                  </a>
                </div>
                <div className="entry-footer">
                  <a className="comments-link" href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/#respond">
                    Leave a Comment
            </a>
                  <div className="share">

                    <a href="mailto:?subject=Beauty Favorites for Summer&body=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/" target="_blank">
                      <i class="far fa-envelope"></i>
                    </a>
                    <a href="http://www.facebook.com/sharer.php?u=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/&t=Beauty Favorites for Summer" target="_blank">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://demo.myboutiquethemes.com/blush-classic/wp-content/uploads/sites/14/2019/04/blush-flowers.jpg" target="_blank">
                      <i class="fab fa-pinterest"></i>
                    </a>
                    <a href="https://twitter.com/share?text=Beauty Favorites for Summer&url=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="small">
                    <div className="entry-thumbnail">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">
                        <img className="w-100" src={require('../static/images/blush_flowers_b.jpg')} />
                      </a>
                    </div>
                    <div className="entry-body">
                      <div className="entry-header">
                        <div className="entry-meta">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/">LIFESTYLE</a>,
                <a href="https://demo.myboutiquethemes.com/blush-classic/category/travel/"> TRAVEL</a>
                        </div>
                        <h2 className="entry-title">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">Beauty Favorites for Summer</a>
                        </h2>
                      </div>
                      <div className="entry-content">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam …</p>
                        <a className="readmore"
                          href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                          <button className="btn read-more">
                            Read more
                    </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="small">
                    <div className="entry-thumbnail">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">
                        <img className="w-100" src={require('../static/images/the_tonik_women.jpg')} />
                      </a>
                    </div>
                    <div className="entry-body">
                      <div className="entry-header">
                        <div className="entry-meta">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/">LIFESTYLE</a>,
                <a href="https://demo.myboutiquethemes.com/blush-classic/category/personal/">  PERSONAL</a>
                        </div>
                        <h2 className="entry-title">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">HOW TO MOVE TO ANOTHER CITY AND FIND NEW FRIENDS</a>
                        </h2>
                      </div>
                      <div className="entry-content">
                        <a className="readmore"
                          href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                          <button className="btn read-more">
                            Read more
                    </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="small">
                    <div className="entry-thumbnail">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">
                        <img className="w-100" src={require('../static/images/kipa_chan_b.jpg')} />
                      </a>
                    </div>
                    <div className="entry-body">
                      <div className="entry-header">
                        <div className="entry-meta">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/category/fashion/">FASHION</a>,
                <a href="https://demo.myboutiquethemes.com/blush-classic/category/outfits/"> OUTFITS</a>
                        </div>
                        <h2 className="entry-title">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">FASHION PIECES FOR THE NEW SEASON</a>
                        </h2>
                      </div>
                      <div className="entry-content">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        <a className="readmore"
                          href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                          <button className="btn read-more">
                            Read more
                    </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="small">
                    <div className="entry-thumbnail">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">
                        <img className="w-100" src={require('../static/images/alyssa_strohmann.jpg')} />
                      </a>
                    </div>
                    <div className="entry-body">
                      <div className="entry-header">
                        <div className="entry-meta">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/">LIFESTYLE</a>
                        </div>
                        <h2 className="entry-title">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">MY FAVORITE BOOKS, WEBSITES AND PODCASTS FOR PERSONAL DEVELOPMENT</a>
                        </h2>
                      </div>
                      <div className="entry-content">
                        <a className="readmore"
                          href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                          <button className="btn read-more">
                            Read more
                    </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="small">
                    <div className="entry-thumbnail">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">
                        <img className="w-100" src={require('../static/images/dex_ezekiel.jpg')} />
                      </a>
                    </div>
                    <div className="entry-body">
                      <div className="entry-header">
                        <div className="entry-meta">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/">LIFESTYLE</a>
                        </div>
                        <h2 className="entry-title">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">HOW TO STYLE YOUR APARTMENT WITH FLOWERS</a>
                        </h2>
                      </div>
                      <div className="entry-content">
                        <a className="readmore"
                          href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                          <button className="btn read-more">
                            Read more
                    </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="small">
                    <div className="entry-thumbnail">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">
                        <img className="w-100" src={require('../static/images/the_tonik_nik.jpg')} />
                      </a>
                    </div>
                    <div className="entry-body">
                      <div className="entry-header">
                        <div className="entry-meta">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/">BEAUTY</a>,
                <a href="https://demo.myboutiquethemes.com/blush-classic/category/travel/"> LIFESTYLE</a>
                        </div>
                        <h2 className="entry-title">
                          <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">THE NEW GUCCI BEAUTY COLLECTION</a>
                        </h2>
                      </div>
                      <div className="entry-content">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam …</p>
                        <a className="readmore"
                          href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                          <button className="btn read-more">
                            Read more
                    </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-4"><Aside /></div>
        </div>
      </div>
      <div className="after-content-home">
        <h2 class="widgettitle">Follow my Youtube Journey</h2>
        <div className="youtube-gallery">
          <div className="row">
            <div className="col-md-4">
              <div class="youtube-video">
                <a href="https://www.youtube.com/watch?v=5S4y_GpaU-c" title="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love" target="_blank" rel="nofollow">
                  <div class="youtube-thumb">
                    <img className="w-100" src={require('../static/images/yt1.jpg')} alt="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love" />
                    <img className="icon" src={require('../static/images/ic_play.png')} />
                  </div>
                  <h3 class="video-title">CHANGE YOUR APPEARANCE with LOA &amp; Self-Love</h3>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div class="youtube-video">
                <a href="https://www.youtube.com/watch?v=-I9S1F_zTCM" title="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love" target="_blank" rel="nofollow">
                  <div class="youtube-thumb">
                    <img className="w-100" src={require('../static/images/yt2.jpg')} alt="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love" />
                    <img className="icon" src={require('../static/images/ic_play.png')} />
                  </div>
                  <h3 class="video-title">I May Never Get Married... | EGO vs SOUL Journey</h3>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div class="youtube-video">
                <a href="https://www.youtube.com/watch?v=PkzAJ4oKqQU" title="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love" target="_blank" rel="nofollow">
                  <div class="youtube-thumb">
                    <img className="w-100" src={require('../static/images/yt3.jpg')} alt="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love" />
                    <img className="icon" src={require('../static/images/ic_play.png')} />
                  </div>
                  <h3 class="video-title">VIPASSANA: One Year Later...</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default Home
