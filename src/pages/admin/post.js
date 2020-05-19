import WysiwygEditor from "../../components/wysiwyg-editor";
import Layout from "../../components/layout";
import { useState, useEffect } from "react";
import Axios from "axios";
import { uploadCallback } from "../../utils/upload";
import config from "../../config";
import getInitialData from "../../store/data";
import MultiSelect from "@khanacademy/react-multi-select";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { state } from "../../store/redux";
import storeInstance from "../../store/store";
function Post(props) {
  const [imgSrc, setImg] = useState("");
  const [file, setFile] = useState("");
  const refFile = React.createRef();
  const [data, setData] = useState({
    title: "",
    content: "",
    description: "",
    viewCount: 0,
    image: "",
    idCategory: "",
    idCreator: "5eb91ac9be4f1e373075d1b3",
    tags: [],
    compositions: [],
  });
  const [optionComposition, setoptionComposition] = useState([]);
  const [selectedCompos, setSelectedCompos] = useState([]);

  useEffect(() => {
    console.log(storeInstance.likesCount);
    if (props.isData) {
      const compos = props.compositions.map((item) => {
        return { ...item, label: item.name, value: item.id };
      });
      setoptionComposition(compos);

      if (data.idCategory == "" && props.categories.length > 0) {
        data.idCategory = props.categories[0].id;
        setData(data);
      }
    }
  }, []);

  const changeImg = (file) => {
    // var reader = new FileReader()
    // reader.readAsDataURL(file)
    // reader.onloadend = function (e) {
    //   setImg(reader.result)
    // }.bind(this)
    setImg(URL.createObjectURL(file));
    setFile(file);
  };

  const callBack = (key, value) => {
    switch (key) {
      case "EDITOR":
        setData({ ...data, content: value });
        break;
      case "POST":
        console.log(key, value);
        let newData = { ...data };
        let newTags = data.tags.filter((item, index) => {
          return item != "";
        });

        newData = { ...data, tags: newTags };
        setData(newData);
        if (file == "") {
          toast.error("Bạn chưa đăng ảnh bài viết !", { autoClose: 3000 });
          console.log("file");
        } else if (
          newData.title == "" ||
          newData.content == "" ||
          newData.description == "" ||
          newData.compositions.length == 0 ||
          newData.tags.length == 0
        ) {
          console.log("key");
          toast.error("Bạn phải nhập đầy đủ thông tin !", { autoClose: 3000 });
        } else {
          post(newData);
        }

        break;
      default:
        break;
    }
  };
  const post = (value) => {
    console.log(file);
    let image = "";
    uploadCallback(file)
      .then((res) => {
        console.log(res);
        image = res.imageLink;
      })

      .then(() => {
        let dataa = { ...value, image: image };
        setData(dataa);
        Axios.post(config.host.base + config.path.base.posts, dataa, {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlYjkyMmMzZWViYjNlM2Y4MGUxYTY1NCIsImlhdCI6MTU4OTg1NTMxNn0.uilfD8znjUSYSlBkv1vRr3vJ4LyEr6Fp4Ri8HcEg-AM",
          },
        })
          .then((res2) => {
            console.log(res2);
            toast.success("Success !", { autoClose: 3000 });
          })
          .catch((e) => {
            toast.error("Đăng bài không thành công !", { autoClose: 3000 });
            console.log("Error: ", e);
          });
      })
      .catch((err) => {
        toast.error("Đăng ảnh bài viết không thành công !", {
          autoClose: 3000,
        });
        console.log("err", err);
      });
  };
  return (
    <Layout title={"Blush"}>
      {props.isData ? (
        <div className="post px-md-4 px-3">
          <div className="pt-5 pb-md-3 pb-3">
            <div className="row">
              <div className="col-md-8">
                <div className="mb-3">
                  <h5>Tiêu đề</h5>
                  <input
                    type="text"
                    className="form-control"
                    multiple
                    onChange={(e) => {
                      setData({ ...data, title: e.target.value });
                    }}
                  />
                </div>
                <div className="mb-3">
                  <h5>Mô tả ngắn</h5>
                  <input
                    type="text"
                    className="form-control"
                    multiple
                    onChange={(e) => {
                      setData({ ...data, description: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="post-image">
                  <input
                    ref={refFile}
                    type="file"
                    onChange={(e) => changeImg(e.target.files[0])}
                    className="d-none"
                  />

                  <div
                    className="border border-secondary post-image-container"
                    title="Ảnh bài viết"
                  >
                    {imgSrc ? (
                      <img
                        src={imgSrc}
                        style={{ objectFit: "cover" }}
                        className="w-100 h-100"
                      />
                    ) : (
                      <p>Ảnh bài viết</p>
                    )}
                    <button
                      className="btn btn-outline-danger post-image-btn"
                      onClick={() => {
                        refFile.current.click();
                      }}
                    >
                      <i class="fas fa-upload"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-5">
              <div class="form-group mb-3">
                <h5 for="exampleFormControlSelect1">Danh mục</h5>
                <select
                  class="form-control"
                  onChange={(e) => {
                    console.log(e.target.value);
                    setData({ ...data, idCategory: e.target.value });
                  }}
                >
                  {props.categories &&
                    props.categories.map((item, index) => {
                      return (
                        <option
                          value={item.id}
                          selected={
                            data.idCategory == props.categories[index].id
                              ? true
                              : false
                          }
                        >
                          {item.name}
                        </option>
                      );
                    })}
                </select>
              </div>
            </div>
            <div className="col-5">
              <div class="post-compos mb-3">
                <h5>Thành phần</h5>
                <MultiSelect
                  options={optionComposition}
                  selected={data.compositions}
                  onSelectedChanged={(selected) => {
                    console.log(selected);
                    setData({ ...data, compositions: selected });
                    // setSelectedCompos(selected)
                  }}
                  overrideStrings={{
                    selectSomeItems: "Chọn ít nhất một thành phần...",
                    allItemsAreSelected: "Tất cả được chọn",
                    selectAll: "Chọn tất cả",
                    search: "Tìm kiếm",
                  }}
                />
                {/* <select class='form-control' id='exampleFormControlSelect1'>
               {props.compositions &&
                  props.compositions.map((item, index) => {
                    return <option>{item.name}</option>
                  })}
              </select> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="mb-3">
                <h5>Tags</h5>
                <input
                  type="text"
                  className="form-control"
                  multiple
                  placeholder="Ví dụ nhập tags: Mụn,Dầu,Da Khô"
                  value={data.tags.join(",")}
                  onChange={(e) => {
                    setData({ ...data, tags: e.target.value.split(",") });
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <h5 className="mb-3">Nội dung bài viết</h5>
            <WysiwygEditor callBack={callBack} valueTxt={data.description} />
          </div>
          <div className="row justify-content-center pt-5 mx-0">
            <button
              type="button"
              class="btn btn-danger text-uppercase font-weight-bold"
              onClick={() => callBack("POST", data)}
            >
              Đăng bài
            </button>
          </div>
        </div>
      ) : (
        <div className="pt-5">
          <h4>Hiện tại hệ thống đang lỗi !</h4>
        </div>
      )}
    </Layout>
  );
}

Post.getInitialProps = async function () {
  const data = await getInitialData();
  if (data.categories.length == 0 && data.compositions.length == 0) {
    return { isData: false };
  }
  return { ...data, isData: true };
};

export default Post;
