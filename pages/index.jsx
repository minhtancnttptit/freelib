import React, { useContext } from 'react';
import { Layout } from 'antd';

import NewEBook from '../src/component/NewEBook';
import { MobXProviderContext } from 'mobx-react';

const Home = () => {
  const { Footer } = Layout;
  const { globalStore } = useContext(MobXProviderContext);
  const { isAuth } = globalStore;

  return (
    <div className="normal">
      <NewEBook />
      <Footer>Footer</Footer>
    </div>
  )
}

export default Home;
