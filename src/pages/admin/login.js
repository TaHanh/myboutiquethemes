import Layout from "../../components/layout";
import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../config";
import "../../static/styles/login.scss";
import Router from "next/router";
import Cookies from "universal-cookie";

function Login(props) {
  const [data, setData] = useState({
    email: "",
    password: "",
    access_token: config.host.access_token,
    role: "admin",
  });
  const cookies = new Cookies();

  useEffect(() => {}, []);

  const login = () => {
    if (data.email == "" || data.password == "") {
      toast.error("Bạn phải nhập đầy đủ thông tin !");
    } else {
      Axios.post(
        config.host.base + config.path.base.auth + config.host.access_token,
        {},
        {
          auth: {
            username: data.email,
            password: data.password,
          },
        }
      )
        .then((res) => {
          console.log(res.data);
          cookies.set("user", res.data, { path: "/", maxAge: 604800 });
          Router.push("/");
        })
        .catch((err) => {
          console.log(err);
          return toast.error("Email hoặc mật khẩu sai !");
        });
    }
  };

  return (
    <Layout title={"Đăng nhập"}>
      <div className="login px-md-4 px-3 py-5">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9 col-md-10 col-11">
            <div className="shadow bg-white rounded p-xl-5 p-lg-4 p-3">
              <h4 className="text-center mb-4">Đăng nhập</h4>

              <div>
                <div className="form-group row">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      required
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Email"
                      onChange={(e) => {
                        console.log("dhghda");
                        setData({ ...data, email: e.target.value });
                      }}
                      onKeyPress={(e) => {
                        console.log("dhghda");
                        if (e.key == "Enter") {
                          login();
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Mật khẩu
                  </label>
                  <div className="col-sm-10">
                    <input
                      required
                      type="password"
                      className="form-control"
                      id="inputPassword3"
                      placeholder="Mật khẩu"
                      onChange={(e) => {
                        setData({ ...data, password: e.target.value });
                      }}
                      onKeyPress={(e) => {
                        if (e.key == "Enter") {
                          login();
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="form-group row justify-content-center mt-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={login}
                  >
                    Đăng nhập
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

Login.getInitialProps = async function () {
  return {};
};

export default Login;
