import { Button, Dropdown, Input, Menu, message, Select } from "antd";
import React from "react";
import Router from "next/router";
import { observer, MobXProviderContext } from "mobx-react";
import Link from "next/link";
// import ImageLogo from '../../assets/logo.png';
// import ImageEbook from '../../assets/ebook.png';
// import ImagePen from '../../assets/pen.png';

const { SubMenu } = Menu;
const InputGroup = Input.Group;
const { Option } = Select;
const { Search } = Input;

@observer
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "mail",
      // ebook: ImageEbook,
      // logo: ImageLogo,
      // pen: ImagePen,
    };
  }
  handleClickLogin = () => {
    Router.push("/login");
  };
  handleClickRegister = () => {
    Router.push("/register");
  };
  onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  handleClick = (e) => {
    Router.push("/");
    this.setState({
      current: e.key,
    });
  };

  handleLogout = () => {
    const { globalStore } = this.context;
    const { isAuthen, setAuthen } = globalStore;
    setAuthen(false);
    Router.push("/");
  };

  menu = (
    <Menu onClick={this.onClick}>
      <Menu.Item key="1">Tài liệu</Menu.Item>
      <Menu.Item key="2">Ebook</Menu.Item>
      <Menu.Item key="3">Đề thi</Menu.Item>
    </Menu>
  );
  state = {
    dataSource: [],
  };

  handleChange = (value) => {
    this.setState({
      dataSource:
        !value || value.indexOf("@") >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`],
    });
  };

  handleSearch = (value) => {
    Router.push(`/searchResult?value=${value}`);
  };

  render() {
    const store = this.context;
    const { globalStore } = store;
    const { isAuthen, account } = globalStore;
    return (
      <div>
        <div id="menu">
          <div className="wrap-menu">
            <Menu
              className="menu-header"
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item className="menu-logo">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="text" onClick={() => Router.push("/")}>
                    FreeLib
                  </div>
                </div>
              </Menu.Item>
              <SubMenu
                className="hover-menu"
                title={
                  <span className="submenu-title-wrapper">
                    <div className="text">Tài Liệu</div>
                  </span>
                }
              >
                <Menu.ItemGroup title="Năm 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Năm 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu
                className="hover-menu"
                title={
                  <span className="submenu-title-wrapper">
                    <img src={this.state.ebook} />
                    <div className="text">Ebook</div>
                  </span>
                }
              >
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu
                className="hover-menu"
                title={
                  <span className="submenu-title-wrapper">
                    <div className="text">Đề thi</div>
                  </span>
                }
              >
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                  <Menu.Item key="setting:3">Option 3</Menu.Item>
                  <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
            <div style={{ alignItems: "center", margin: "0 10px", width: 400 }}>
              <InputGroup
                compact
                style={{ display: "flex", fontFamily: "'Roboto', sans-serif" }}
              >
                {/* <Select defaultValue="Option2">
                  <Option value="Option1">Tài liệu</Option>
                  <Option value="Option2">Sách</Option>
                </Select> */}
                <Search
                  placeholder="Nhập tên tài liệu cần tìm"
                  onSearch={(value) => this.handleSearch(value)}
                  enterButton
                />
              </InputGroup>
            </div>
            <div className="rs-login-upload">
              {!isAuthen ? (
                <>
                  <Button
                    type="normal"
                    className="login"
                    onClick={() => {
                      this.handleClickLogin();
                    }}
                  >
                    Đăng nhập
                  </Button>
                  <Button
                    type="normal"
                    className="register"
                    onClick={() => {
                      this.handleClickRegister();
                    }}
                  >
                    Đăng ký
                  </Button>
                </>
              ) : (
                <>
                  <label>
                    Hi{" "}
                    <Link href="/">
                      <a>{account.name}</a>
                    </Link>
                  </label>
                  <Button
                    type="normal"
                    className="logout"
                    onClick={this.handleLogout}
                  >
                    Đăng xuất
                  </Button>
                  <div className="upload">
                    <Link href="/upload">
                      <a>Upload</a>
                    </Link>
                    {/* <Dropdown overlay={this.menu}>
                      <a
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        UpLoad
                      </a>
                    </Dropdown> */}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

Header.contextType = MobXProviderContext;

export default Header;
