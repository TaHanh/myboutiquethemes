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
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../../store/redux";
import { convertTitle } from "../../utils/convert";
import { getInitialDataAside } from "../../components/aside";
const Tags = (props) => {
  const [data, setData] = useState(props.data);
  const [isLoad, setLoad] = useState(false);
  const [isLoadBtn, setLoadBtn] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {}, []);

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
                              <p class="max-line">{item.description}</p>

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
                  })}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <Provider store={createStore(reducer)}>
              <Aside />
            </Provider>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Tags.getInitialProps = async function (ctx) {
  const { req, res, query } = ctx;
  let data = {};
  let resTag = await Axios.get(
    config.host.base + config.path.base.tags + "/" + query.id
  ).catch((e) => {
    console.log("Error: ", e.code);
  });
  console.log(resTag.data);
  data = resTag && resTag.data != undefined ? resTag.data : [];
  const dataa = await getInitialDataAside();
  return { ...dataa, data: data };
};

export default Tags;
