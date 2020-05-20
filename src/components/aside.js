import { Component } from "react";
// let asideModel
import config from "../config";
import Axios from "axios";
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
function Aside(props) {
  // contructor(props) {
  //   props = props;
  // }
  return (
    <div className="widget-area">
      <div className="about-widget">
        <div
          className="about-image"
          style={{
            backgroundImage:
              "url(" + `${require("../static/images/kipa_chan.jpg")}` + ")",
          }}
        >
          {/* <img src={require("../static/images/kipa_chan.jpg")} /> */}
        </div>
        <div className="about-content">
          <img
            className="widget-title"
            src={require("../static/images/welcome.png")}
          />
          {/* <h2>Welcome</h2> */}
          <p className="about-text">
            I'm Vivian, the blogger on The Blush Co. I write about interior
            design, my obsession with the latest beauty products and my love for
            fashion and style. Follow my journey!
          </p>
          <a href="#" className="btn-more">
            More about me
          </a>
        </div>
      </div>
      <div className="social-media-widget">
        <h2 className="widget-title">Let’s get social</h2>
        <div className="social-media-icons">
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>

          <a href="#">
            <i class="fas fa-heart"></i>
          </a>
          {/* <a href='#'>
            <i class='fab fa-facebook-f'></i>
          </a> */}
        </div>
      </div>
      {props.compositions && props.compositions.length > 0 ? (
        <div className="category">
          <h2 className="widget-title">What you can find here</h2>
          <ul>
            {props.compositions &&
              props.compositions.map((item, index) => {
                return (
                  <li className="cat-item">
                    <a href="">{item.name}</a>
                  </li>
                );
              })}
          </ul>
        </div>
      ) : null}
      <div className="featured-post-widget">
        <h2 className="widget-title">Favorite Article</h2>
        <div className="featured-post">
          <div className="entry-thumbnail">
            <a href="https://demo.myboutiquethemes.com/blush-classic/2019/05/04/how-to-setup-a-bullet-journal/">
              <img src={require("../static/images/the_tonik.jpg")} />
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
      {props.categories && props.categories.length > 0 ? (
        <div className="nav-menu">
          <h2 className="widget-title">Favorite Shops</h2>
          <ul>
            {props.categories &&
              props.categories.map((item, index) => {
                console.log(item);

                return (
                  <li className="cat-item">
                    <a
                      href={
                        "/categories/" + convertTitle(item.name) + "." + item.id
                      }
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
export async function getInitialDataAside() {
  let categories = [];
  let compositions = [];
  let resCate = await Axios.get(
    config.host.base + config.path.base.categories
  ).catch((e) => {
    console.log("Error: ", e.code);
  });
  let resCompos = await Axios.get(
    config.host.base + config.path.base.compositions
  ).catch((e) => console.log("Error: ", e.code));
  categories = resCate && resCate.data != undefined ? resCate.data : [];
  compositions =
    (resCompos && resCompos.data) != undefined ? resCompos.data : [];
  console.log(compositions);

  return { compositions: compositions, categories: categories };
}

export default Aside;
