import Layout from "../../components/layout";
import "../../static/styles/home.scss";
import Aside from "../../components/aside";

import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import config from "../../config";
import Axios from "axios";
import { getInitialData } from "../../store/data";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { convertTitle } from "../../utils/convert";
import { getInitialDataAside } from "../../store/data";

const FilterPost = (props) => {
  const [data, setData] = useState(props.data);
  const [isLoad, setLoad] = useState(false);
  const [isLoadBtn, setLoadBtn] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {}, []);

  return (
    <Layout
      title={"Blush"}
      compositions={props.compositions}
      categories={props.categories}
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
              <div className="row">
                {data && data.length > 0 ? (
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
                                    src={require("../../static/images/f1.jpg")}
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
                              <p className="max-line">{item.description}</p>

                              <div className="card-entry-meta">
                                {item.tags &&
                                  item.tags.map((e, i) => {
                                    return (
                                      <Link
                                        href={
                                          config.client.tags + convertTitle(e)
                                        }
                                      >
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
                  })
                ) : (
                  <h5>Không có bài viết nào phù hợp !</h5>
                )}
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
};

FilterPost.getInitialProps = async function (ctx) {
  const { req, res, query } = ctx;
  let data = {};
  switch (query.filterPost) {
    case "tags":
      let resTag = await Axios.get(
        config.host.base + config.path.base.tags + "/" + query.name
      ).catch((e) => {
        console.log("Error: ", e.code);
      });
      console.log(resTag.data);
      data = resTag && resTag.data != undefined ? resTag.data : [];
      break;
    case "compositions":
      console.log(
        config.host.base +
          config.path.base.compositionsPost +
          query.name +
          "." +
          query.id
      );
      let resCom = await Axios.get(
        config.host.base +
          config.path.base.compositionsPost +
          query.name +
          "." +
          query.id
      ).catch((e) => {
        console.log("Error: ", e.code);
      });
      console.log(resCom.data);
      data = resCom && resCom.data != undefined ? resCom.data : [];
      break;
    case "categories":
      console.log(
        config.host.base +
          config.path.base.categoriesPosts +
          query.name +
          "." +
          query.id
      );
      let resCate = await Axios.get(
        config.host.base +
          config.path.base.categoriesPosts +
          query.name +
          "." +
          query.id
      ).catch((e) => {
        console.log("Error: ", e.code);
      });
      console.log(resCate.data);
      data = resCate && resCate.data != undefined ? resCate.data : [];
      break;
    case "search":
      var content = query.name.replace("-", " ");
      console.log("content", content);
      console.log(config.host.base + config.path.base.postsFind + content);
      let res = await Axios.get(
        config.host.base + config.path.base.postsFind + content
      ).catch((e) => {
        console.log("Error: ", e.code);
      });
      console.log(res);
      data = res && res.data != undefined ? res.data : [];
      break;
    default:
      break;
  }

  const dataa = await getInitialDataAside();
  return { ...dataa, data: data };
};

export default FilterPost;
