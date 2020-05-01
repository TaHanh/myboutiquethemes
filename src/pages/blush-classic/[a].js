import { Router } from '../../routes'
import { useRouter } from 'next/router'
import '../../static/styles/blush-classic.scss'
import Layout from '../../components/layout'
import Aside from '../../components/aside'
import { useState } from 'react'
export default function BlushClassic1(props) {
  const [isSearch, changeSearch] = useState(false);
  const callBack = (key, value) => {
    console.log(key, value)
    switch (key) {
      case 'CHECK_SEARCH':
        changeSearch(!isSearch);
        break;
      case 'SEARCH':
        changeSearch(false);
        alert(value)
      default:
        break;
    }
  }
  return (
    <Layout title={"Beauty Favorites for Summer – Blush "} callBack={callBack} isSearch={isSearch}>
      <div className="site-content">
          <div className="row">
          <div className="col-lg-8">
      <div className="site-main">
        <div className="entry-thumbnail">
          <img src={require('../../static/images/blush_flowers.jpg')} />
        </div>
        <div className="entry-header">
          <div className="entry-meta">
            <span className="cat-links">
              <a href="https://demo.myboutiquethemes.com/blush-classic/category/beauty/">Beauty</a>,
          <a href="https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/">Lifestyle</a>
            </span>|
                <span className="posted-on">
              <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/">
                <time>29. April 2019</time>
              </a>
            </span>
          </div>
          <h1 className="entry-title">
            Beauty Favorites for Summer
                </h1>
        </div>
        <div className="entry-content">
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          <div className="shop-the-post-widget">
            <h3>Shop this Post</h3>
            <span>There are no widgets defined for this post.</span>
          </div>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="entry-footer">
          <div className="share">
            <img src={require('../../static/images/share_post.png')} />
            {/* <h4>Share this Post</h4> */}
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
        <div className="posts-navigation">
          <div className="row">
            <div className="col-lg-6">
              <div className="nav-previous">
                <p>Previous Article</p>
                <span>{'«'}</span> <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/my-workout-routine-w-dkny/">How to move to another city and find new friends </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="nav-next">
                <p>Next Article</p>
                <a href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                  What I learnt from Blogging in the last 5 Years
                  </a> »
                </div>
            </div>
          </div>
        </div>
        <div className="related-posts">
          <h3 className="related-title">Related Posts</h3>
          <div className="featured">
            <div className="row">
              <div className="col-md-4 col-sm-6 col-12">
                <div className="post">
                  <div className="entry-thumbnail">
                    <a href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                      <img src={require('../../static/images/the_tonik.jpg')} />
                    </a>
                  </div>
                  <div className="entry-header">
                    <div className="entry-title">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                        What I learnt from Blogging in the last 5 Years
                          </a>
                    </div>
                    <div className="posted-on">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                        <time>4. Mai 2019</time>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-12">
                <div className="post">
                  <div className="entry-thumbnail">
                    <a href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                      <img src={require('../../static/images/the_tonik_women.jpg')} />
                    </a>
                  </div>
                  <div className="entry-header">
                    <div className="entry-title">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                        How to move to another city and find new friends
                          </a>
                    </div>
                    <div className="posted-on">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                        <time>29. April 2019</time>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="post">
                  <div className="entry-thumbnail">
                    <a href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                      <img src={require('../../static/images/alyssa_strohmann.jpg')} />
                    </a>
                  </div>
                  <div className="entry-header">
                    <div className="entry-title">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                        My Favorite Books, Websites and Podcasts for Personal Development
                          </a>
                    </div>
                    <div className="posted-on">
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                        <time>29. April 2019</time>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="comments">
          <h3 className="comment-reply-title">Schreibe einen Kommentar </h3>
          <form className="comment-form">
            <p className="comment-notes">Deine E-Mail-Adresse wird nicht veröffentlicht. Erforderliche Felder sind mit * markiert.</p>
            <div className="comment-form-comment">
              <label>Kommentar</label>
              <textarea cols="45" rows="8"></textarea>
            </div>
            <div className="row">
              <div className="col-md-4 col-12">
                <div className="comment-form-author">
                  <label>Name *</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="comment-form-author">
                  <label>E-Mail *</label>
                  <input type="text" />
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="comment-form-author">
                  <label>Website</label>
                  <input type="text" />
                </div>
              </div>
            </div>

            <div className="comment-form-cookies">
              <p className="comment-form-cookies-consent">
                <input type="checkbox" value="yes" />
                <label >Meinen Namen, E-Mail und Website in diesem Browser speichern, bis ich wieder kommentiere.</label>
              </p>
              <p className="form-submit"><input type="submit" value="Kommentar abschicken" /></p>
            </div>
          </form>
        </div>
      </div>
      </div>
          <div className="col-lg-4"><Aside /></div>
          </div>
        </div>
    </Layout>
  )
}
