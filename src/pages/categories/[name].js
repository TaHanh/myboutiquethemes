import Layout from "../../components/layout";
import "../../static/styles/home.scss";
import Aside from "../../components/aside";
import Swiper from "react-id-swiper";
import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import config from "../../config";
import Axios from "axios";
import getInitialData from "../../store/data";
// import { observer, inject, Provider } from "mobx-react";
import { getInitialDataAside } from "../../components/aside";
let limit = 2;
// @inject("store");

const Category = (props) => {
  const [data, setData] = useState(props.posts);
  const [isLoad, setLoad] = useState(false);
  const [isLoadBtn, setLoadBtn] = useState(true);
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   // setData(props.posts)
  //   // storeInstance.likesCount = 15
  //   console.log(state.foo);
  // }, []);

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
  const convertTitle = (str) => {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      " "
    );
    str = str.replace(/ + /g, " ");
    str = str.trim();
    str = str.replace(/ /g, "-");

    return str;
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
    // axios
    //   .post('http://localhost:3000/api/user', {
    //     role: 'user',
    //     name: 'Nguyễn Văn Hạnh',
    //     email: 'hanh@mail.com',
    //     password: 'hanh123',
    //     username: 'hanh123',
    //   })
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
    // axios
    //   .put('http://localhost:3000/api/user/5eb26679a735a65714fab608', {
    //     role: 'user',
    //     name: 'Nguyễn Văn',
    //     email: 'hanh@mail.com',
    //     password: 'hanh123',
    //     username: 'hanh123',
    //   })
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
    // axios
    //   .delete('http://localhost:3000/api/user/5eb26679a735a65714fab608')
    //   .then(function (response) {
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     console.log(error)
    //   })
  };
  // console.log("props", props);

  return (
    <Layout title={"Blush"}>
      <div className="site-branding">
        <Link href="/blush-classic">
          <img src={require("../../static/images/blush_title.png")} />
        </Link>
      </div>
      <div className="site-content">
        <div className="row">
          <div className="col-lg-8">
            <div className="site-main">
              <div className="entry-thumbnail" onClick={() => postUser()}>
                <img src={require("../../static/images/the_tonik_b.jpg")} />
              </div>
              <div className="entry-body">
                <div className="entry-header">
                  <div className="entry-meta">
                    <a href="https://demo.myboutiquethemes.com/blush-classic/category/lifestyle/">
                      LIFESTYLE
                    </a>
                    ,
                    <a href="https://demo.myboutiquethemes.com/blush-classic/category/travel/">
                      {" "}
                      TRAVEL
                    </a>
                  </div>
                  <h1 className="entry-title">
                    WHAT I LEARNT FROM BLOGGING IN THE LAST 5 YEARS
                  </h1>
                </div>
                <div className="entry-content">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam …
                  </p>
                </div>
              </div>
              <div className="row">
                {data &&
                  data.map((item, index) => {
                    return (
                      <div className="col-md-6 col-12">
                        <div className="small">
                          <div className="entry-thumbnail">
                            <Link
                              href={
                                config.client.posts +
                                "/" +
                                convertTitle(item.title) +
                                "_" +
                                item.idPost
                              }
                            >
                              <a href="#">
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
                                    src={require("../../static/images/f1.jpg")}
                                  />
                                </div>
                              </a>
                              {/* <a>
                                <img
                                  className="w-100"
                                  src={require("../../static/images/blush_flowers_b.jpg")}
                                />
                              </a> */}
                            </Link>
                          </div>
                          <div className="entry-body">
                            <div className="entry-header">
                              <h2 className="entry-title max-line">
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
                            <div className="entry-content">
                              <p class="max-line">{item.description}</p>

                              <div className="entry-meta">
                                {item.tags &&
                                  item.tags.map((e, i) => {
                                    return (
                                      <a href={"/" + e}>
                                        {e}{" "}
                                        {i != item.tags.length - 1
                                          ? ", "
                                          : null}
                                      </a>
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
      <div className="after-content-Category">
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
                      src={require("../../static/images/yt1.jpg")}
                      alt="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love"
                    />
                    <img
                      className="icon"
                      src={require("../../static/images/ic_play_red.png")}
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
                      src={require("../../static/images/yt2.jpg")}
                      alt="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love"
                    />
                    <img
                      className="icon"
                      src={require("../../static/images/ic_play_red.png")}
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
                      src={require("../../static/images/yt3.jpg")}
                      alt="CHANGE YOUR APPEARANCE with LOA &amp; Self-Love"
                    />
                    <img
                      className="icon"
                      src={require("../../static/images/ic_play_red.png")}
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

Category.getInitialProps = async function (ctx) {
  let { req, res, query } = ctx;
  console.log(query.name);
  let posts = [];
  let resPost = await Axios.get(
    config.host.base + config.path.base.categories + "/posts/" + query.name
  ).catch((e) => {
    console.log("Error: ", e.code);
  });
  posts = resPost && resPost.data != undefined ? resPost.data : [];
  console.log(posts.length);
  let d = await getInitialDataAside();
  return { ...d, posts: posts };
};
export default Category;
