import Router from "next/router";
import { useRouter } from "next/router";
import "../../static/styles/blush-classic.scss";
import Layout from "../../components/layout";
import Aside from "../../components/aside";
import { useState, useEffect } from "react";
import Link from "next/link";
import config from "../../config";
import getInitialData from "../../store/data";
import Axios from "axios";
import moment from "moment";
// import { Provider } from "mobx-react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../../store/redux";
function PostDetail(props) {
  const [isSearch, changeSearch] = useState(false);
  let routes = useRouter();
  const callBack = (key, value) => {
    console.log(key, value);
    switch (key) {
      case "CHECK_SEARCH":
        changeSearch(!isSearch);
        break;
      case "SEARCH":
        changeSearch(false);
        alert(value);
      default:
        break;
    }
  };
  return (
    <Layout
      title={"Beauty Favorites for Summer – Blush "}
      callBack={callBack}
      isSearch={isSearch}
    >
      <div className="site-branding">
        <Link href="/blush-classic">
          <img src={require("../../static/images/blush_title.png")} />
        </Link>
      </div>
      <div className="site-content">
        <div className="row">
          <div className="col-lg-8">
            <div className="site-main">
              <div className="detail-entry-thumbnail">
                {/* <img src={require('../../static/images/blush_flowers.jpg')} /> */}
                <img src={config.host.upload + props.data.image} />
              </div>
              <div className="detail-post-header">
                <div className="detail-post-entry-meta">
                  <span className="cat-links">
                    {props.data.tags &&
                      props.data.tags.map((item, index) => {
                        return (
                          <a href={item}>
                            {item}
                            {index != props.data.tags.length - 1 ? ", " : null}
                          </a>
                        );
                      })}
                  </span>
                  |
                  <span className="posted-on">
                    {/* <a href='https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/'> */}
                    <time>
                      {moment(
                        props.data.updatedAt || props.data.createdAt
                      ).format("DD. MMM YYYY")}
                    </time>
                    {/* </a> */}
                  </span>
                </div>
                <h1 className="detail-post-entry-title">{props.data.title}</h1>
              </div>
              <div className="detail-post-entry-content">
                <div
                  dangerouslySetInnerHTML={{ __html: props.data.content }}
                ></div>
              </div>
              <div className="detail-post-entry-footer">
                <div className="share">
                  <img src={require("../../static/images/share_post.png")} />
                  {/* <h4>Share this Post</h4> */}
                  <a
                    href="mailto:?subject=Beauty Favorites for Summer&body=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/"
                    target="_blank"
                  >
                    <i class="far fa-envelope"></i>
                  </a>
                  <a
                    href="http://www.facebook.com/sharer.php?u=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/&t=Beauty Favorites for Summer"
                    target="_blank"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://demo.myboutiquethemes.com/blush-classic/wp-content/uploads/sites/14/2019/04/blush-flowers.jpg"
                    target="_blank"
                  >
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
                      <span>{"«"}</span>{" "}
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/04/29/my-workout-routine-w-dkny/">
                        How to move to another city and find new friends{" "}
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="nav-next">
                      <p>Next Article</p>
                      <a href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                        What I learnt from Blogging in the last 5 Years
                      </a>{" "}
                      »
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
                            <img
                              src={require("../../static/images/the_tonik.jpg")}
                            />
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
                            <img
                              src={require("../../static/images/the_tonik_women.jpg")}
                            />
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
                            <img
                              src={require("../../static/images/alyssa_strohmann.jpg")}
                            />
                          </a>
                        </div>
                        <div className="entry-header">
                          <div className="entry-title">
                            <a href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
                              My Favorite Books, Websites and Podcasts for
                              Personal Development
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
                <h3 className="comment-reply-title">
                  Schreibe einen Kommentar{" "}
                </h3>
                <form className="comment-form">
                  <p className="comment-notes">
                    Deine E-Mail-Adresse wird nicht veröffentlicht.
                    Erforderliche Felder sind mit * markiert.
                  </p>
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
                      <label>
                        Meinen Namen, E-Mail und Website in diesem Browser
                        speichern, bis ich wieder kommentiere.
                      </label>
                    </p>
                    <p className="form-submit">
                      <input type="submit" value="Kommentar abschicken" />
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <Aside
              categories={props.categories}
              compositions={props.compositions}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
PostDetail.getInitialProps = async function (ctx) {
  const { req, res, query } = ctx;
  let data = {};
  console.log(config.host.base + config.path.base.posts + "/" + query.id);
  let resPost = await Axios.get(
    config.host.base + config.path.base.posts + "/" + query.id
  ).catch((e) => {
    console.log("Error: ", e.code);
    res.redirect("/");
  });

  data = resPost && resPost.data != undefined ? resPost.data : [];

  const dataa = getInitialData();
  return { ...dataa, data: data };
};
export default PostDetail;
