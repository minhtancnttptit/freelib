import Axios from "axios";
import { ObjectID } from "bson";
import Router from "next/router";

const { observable, action } = require("mobx");

class GlobalStore {
  @observable
  isAuthen = false;

  @observable
  account = {};

  @observable
  newEbooks = [];

  @observable
  users = [];

  @observable
  comments = [];

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

  @action
  getUsers = async () => {
    try {
      const { data, status } = await Axios.get(
        "http://localhost:8080/api/user"
      );
      if (status === 200) {
        this.users = data;
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  @action
  uploadResource = async (values) => {
    const tmp = new ObjectID();
    const id = tmp.toHexString();
    const { type, title, cover, category, description, link } = values;
    const content = {
      id,
      type,
      title,
      cover,
      category,
      description,
      link,
    };
    try {
      const { data, status } = await Axios.post(
        "http://localhost:8080/api/upload",
        content
      );
      if (status === 200) {
        this.newEbooks.push(data);
        Router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  @action
  getComments = async (id) => {
    console.log("get Comments");
    try {
      const { data, status } = await Axios.get(
        `http://localhost:8080/api/commment?idResource=${id}`
      );
      if (status === 200) {
        this.comments = data;
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  @action
  addComment = async (commnent) => {
    try {
      const { status, data } = await Axios.post(
        "http://localhost:8080/api/comment",
        commnent
      );
      if (status === 200) {
        this.comments.push(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
}

const globalStore = new GlobalStore();
export default globalStore;
