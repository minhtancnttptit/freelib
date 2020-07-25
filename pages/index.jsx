import React from "react";
import { Layout } from "antd";
import TaiLieuPTIT from "../src/component/TaiLieuPTIT";
import NewEBook from "../src/component/NewEBook";
import { MobXProviderContext } from "mobx-react";

class Home extends React.Component {
  componentDidMount() {
    const { globalStore } = this.context;
    const {
      newEbooks,
      getNewEbooks,
      users,
      getUsers,
      getComments,
    } = globalStore;
    if (newEbooks.lenth < 1) {
      getNewEbooks();
    }
    if (users.length < 1) {
      getUsers();
    }
  }

  render() {
    const { Footer } = Layout;
    const { globalStore } = this.context;
    const { isAuth } = globalStore;

    return (
      <div className="normal">
        <NewEBook />
        <TaiLieuPTIT />
        {/* <Footer>Footer</Footer> */}
      </div>
    );
  }
}

Home.contextType = MobXProviderContext;

export default Home;
