import { Layout } from 'antd';

import NewEBook from '../src/component/NewEBook';

const Home = () => {
  const { Footer } = Layout;

  return (
    <div className="normal">
      <NewEBook />
      <Footer>Footer</Footer>
    </div>
  )
}

export default Home;
