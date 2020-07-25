import React from "react";
import { observer, MobXProviderContext } from "mobx-react";

import HomePage from "../../src/component/TrangCaNhan";

@observer
class Home extends React.Component {
  static getInitialProps(props) {
    return { id: props.query.id };
  }

  componentDidMount() {
    const { globalStore } = this.context;
    const { users, getUsers, newEbooks, getNewEbooks } = globalStore;
    const { id } = this.props;
    if (newEbooks.length < 1) {
      getNewEbooks();
    }
    if (users.length < 1) {
      getUsers();
    }
  }

  render() {
    const { id } = this.props;
    return <HomePage id={id} />;
  }
}

Home.contextType = MobXProviderContext;

export default Home;
