import Layout from "../components/layout";
import "../static/styles/home.scss";
import Aside from "../components/aside";
import Swiper from "react-id-swiper";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import config from "../config";
import Axios from "axios";
import getInitialData from "../store/data";
// import { observer, inject, Provider } from "mobx-react";
import storeInstance from "../store/store";
import { state } from "../store/redux";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../store/redux";
import { convertTitle } from "../utils/convert";
import Router from "next/router";
let limit = 6;
// @inject("store");

const Home = (props) => {
  const [data, setData] = useState(props.posts);
  const [isLoad, setLoad] = useState(false);
  const [isLoadBtn, setLoadBtn] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    //   // setData(props.posts)
    //   // storeInstance.likesCount = 15
    //   console.log(state.foo);
  }, []);

  const callBack = (key, value) => {};
  const loadMore = () => {
    setLoad(true);
    let pageNew = page + 1;
    setPage(pageNew);
    Axios.get(
      config.host.base +
        config.path.base.posts +
        "?page=" +
        page +
        "&&limit=" +
        limit
    )
      .then((res) => {
        if (res.data.length > 0) {
          const newData = data.concat(res.data);
          setData(newData);
          if (res.data.length < limit) {
            setLoadBtn(false);
          }
        } else {
          setLoadBtn(false);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((fil) => {
        setLoad(false);
      });
  };

  const postUser = () => {
    axios
      .get("http://localhost:3000/api/user/5eb3e4674c407c266cad309c")
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Layout title={"Blush"}>
      <div className="site-branding">
        <Link href="/blush-classic">
          <img src={require("../static/images/blush_title.png")} />
        </Link>
      </div>
      <div className="site-content">
        <div className="row">
          <div className="col-lg-8">
            <div className="site-main">
              <div className="home-entry-thumbnail" onClick={() => postUser()}>
                <img src={require("../static/images/the_tonik_b.jpg")} />
              </div>
              <div className="home-entry-body">
                <div className="home-entry-header">
                  <div className="home-entry-meta">
                    <a href="https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/">
                      LIFESTYLE
                    </a>
                    ,
                    <a href="https://demo.myboutiquethemes.com/blush-classic/category/travel/">
                      {" "}
                      TRAVEL
                    </a>
                  </div>
                  <h1 className="home-entry-title">
                    WHAT I LEARNT FROM BLOGGING IN THE LAST 5 YEARS
                  </h1>
                </div>
                <div className="home-entry-content">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam …
                  </p>
                  {/* <div className='shop-the-post'>
                    <h3>Shop this Post</h3>
                    <div className='shop-the-post-container'>
                      <p></p>
                      <SwiperComponent params={params} />
                    </div>
                  </div> */}
                  {/* <a
                    className='readmore'
                    href='https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/'
                  >
                    <button className='btn read-more'>Read more</button>
                  </a> */}
                </div>
                {/* <div className='home-entry-footer'>
                  <a
                    className='comments-link'
                    href='https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/#respond'
                  >
                    Leave a Comment
                  </a>
                  <div className='share'>
                    <a
                      href='mailto:?subject=Beauty Favorites for Summer&body=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/'
                      target='_blank'
                    >
                      <i class='far fa-envelope'></i>
                    </a>
                    <a
                      href='http://www.facebook.com/sharer.php?u=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/&t=Beauty Favorites for Summer'
                      target='_blank'
                    >
                      <i class='fab fa-facebook-f'></i>
                    </a>
                    <a
                      href='https://demo.myboutiquethemes.com/blush-classic/wp-content/uploads/sites/14/2019/04/blush-flowers.jpg'
                      target='_blank'
                    >
                      <i class='fab fa-pinterest'></i>
                    </a>
                    <a href='https://twitter.com/share?text=Beauty Favorites for Summer&url=https://demo.myboutiquethemes.com/blush-classic/2019/04/29/6-business-outfits-you-already-have-in-your-wardrobe/'>
                      <i class='fab fa-twitter'></i>
                    </a>
                  </div>
                </div> */}
              </div>
              <div className="row">
                {data &&
                  data.map((item, index) => {
                    return (
                      <div className="col-md-6 col-12">
                        <div className="card-post">
                          <div className="card-entry-thumbnail">
                            <Link
                              href={
                                config.client.posts +
                                "/" +
                                convertTitle(item.title) +
                                "_" +
                                item.idPost
                              }
                            >
                              <a>
                                <div
                                  style={{
                                    backgroundImage:
                                      "url(" +
                                      `${config.host.upload + item.image}` +
                                      ")",
                                    backgroundPosition: "center center",
                                    backgroundSize: "cover",
                                  }}
                                >
                                  <img
                                    style={{ visibility: "hidden" }}
                                    src={require("../static/images/f1.jpg")}
                                  />
                                </div>
                              </a>
                            </Link>
                          </div>
                          <div className="card-entry-body">
                            <div className="card-entry-header">
                              <h2 className="card-entry-title max-line">
                                <Link
                                  href={
                                    config.client.posts +
                                    "/" +
                                    convertTitle(item.title) +
                                    "_" +
                                    item.idPost
                                  }
                                >
                                  <a>{item.title}</a>
                                </Link>
                              </h2>
                            </div>
                            <div className="card-entry-content">
                              <p class="max-line">{item.description}</p>

                              <div className="card-entry-meta">
                                {item.tags &&
                                  item.tags.map((e, i) => {
                                    return (
                                      <Link href={config.client.tags + e}>
                                        <a>
                                          {e}{" "}
                                          {i != item.tags.length - 1
                                            ? ", "
                                            : null}
                                        </a>
                                      </Link>
                                    );
                                  })}
                              </div>
                              <Link
                                href={
                                  config.client.posts +
                                  "/" +
                                  convertTitle(item.title) +
                                  "_" +
                                  item.idPost
                                }
                              >
                                <a className="readmore">
                                  <button className="btn read-more">
                                    Read more
                                  </button>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="row justify-content-center">
                {isLoadBtn ? (
                  isLoad ? (
                    <div class="spinner-border text-primary" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  ) : (
                    <div className="readmore">
                      <button
                        className="btn read-more"
                        onClick={() => loadMore()}
                      >
                        read more
                      </button>
                    </div>
                  )
                ) : null}
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
      <div className="after-content-home">
        <h2 class="widgettitle">Follow my Youtube Journey</h2>
        <div className="youtube-gallery">
          <div className="row">
            <div className="col-md-4">
              <div class="youtube-video">
                <a
                  href="https://www.youtube.com/watch?v=5S4y_GpaU-c"
                  title="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love"
                  target="_blank"
                  rel="nofollow"
                >
                  <div class="youtube-thumb">
                    <img
                      className="w-100"
                      src={require("../static/images/yt1.jpg")}
                      alt="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love"
                    />
                    <img
                      className="icon"
                      src={require("../static/images/ic_play_red.png")}
                    />
                  </div>
                  <h3 class="video-title">
                    CHANGE YOUR APPEARANCE with LOA &amp; Self-Love
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div class="youtube-video">
                <a
                  href="https://www.youtube.com/watch?v=-I9S1F_zTCM"
                  title="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love"
                  target="_blank"
                  rel="nofollow"
                >
                  <div class="youtube-thumb">
                    <img
                      className="w-100"
                      src={require("../static/images/yt2.jpg")}
                      alt="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love"
                    />
                    <img
                      className="icon"
                      src={require("../static/images/ic_play_red.png")}
                    />
                  </div>
                  <h3 class="video-title">
                    I May Never Get Married... | EGO vs SOUL Journey
                  </h3>
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div class="youtube-video">
                <a
                  href="https://www.youtube.com/watch?v=PkzAJ4oKqQU"
                  title="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love"
                  target="_blank"
                  rel="nofollow"
                >
                  <div class="youtube-thumb">
                    <img
                      className="w-100"
                      src={require("../static/images/yt3.jpg")}
                      alt="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love"
                    />
                    <img
                      className="icon"
                      src={require("../static/images/ic_play_red.png")}
                    />
                  </div>
                  <h3 class="video-title">VIPASSANA: One Year Later...</h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Home.getInitialProps = async function () {
  return await getInitialData();
};
export default Home;
