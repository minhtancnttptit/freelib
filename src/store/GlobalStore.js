import Axios from "axios";

const { observable, action } = require("mobx");

class GlobalStore {
  @observable
  isAuthen = false;

  @observable
  account = {};

  @observable
  newEbooks = [];

  @action
  setAuthen = (value) => {
    this.isAuthen = value;
  };

  @action
  setAccount = (account) => {
    this.account = account;
  };

  @action
  getNewEbooks = async () => {
    try {
      const { data, status } = await Axios.get(
        "http://localhost:8080/api/newEbooks"
      );
      if (status === 200) {
        this.newEbooks = data;
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
}

const globalStore = new GlobalStore();
export default globalStore;
