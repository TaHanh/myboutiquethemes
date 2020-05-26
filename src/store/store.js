import { observable, action, decorate } from "mobx";
import { getInitialDataAside } from "./data";
import Cookies from "universal-cookie";
const isServer = typeof window === "undefined";
class Store {
  @observable user = {};
  @observable data = {};
  @observable isData = false;
  @observable dataAside = {};

  @action getUser() {
    const cookies = new Cookies();
    console.log("user Store", cookies.get("user"));
    this.user = cookies.get("user");
  }
  @action setData(value) {
    this.data = { ...value };
  }
  @action initApp = async () => {
    if (!this.isData) {
      this.dataAside = await getInitialDataAside();
      console.log(this.dataAside);
      this.isData = true;
    }
  };
}

// decorate(Store, {
//   user: observable,
//   getUser: action,
// })

const storeInstance = new Store();
export default storeInstance;
