import React from "react";
import { Row, Col, Button, Comment, Tooltip, List } from "antd";
import moment from "moment";
import { Avatar, Form, Input, icon } from "antd";
import { observer, MobXProviderContext } from "mobx-react";
import Icon, { WarningOutlined } from "@ant-design/icons";

import Link from "next/link";

@observer
class DanhSachBanBe extends React.Component {
  componentDidMount() {
    const { globalStore } = this.context;
    const { users, getUsers } = globalStore;
    if (users.length < 1) {
      getUsers();
    }
  }

  render() {
    const { value } = this.props;
    const { globalStore } = this.context;
    const { users } = globalStore;
    if (users.length < 1 || value.trim() === "") {
      return <></>;
    }
    const listUser = users.filter(
      ({ name, email }) =>
        name.toLowerCase().includes(value.toLowerCase()) ||
        email.toLowerCase().includes(value.toLowerCase())
    );

    return (
      <div style={{ marginTop: 40 }}>
        <div
          style={{
            marginLeft: -800,
            fontSize: 25,
            fontWeight: 800,
            color: "#4b4f56",
          }}
        >
          <img />
          <div>DANH SÁCH TÌM KIẾM</div>
        </div>
        <Row>
          <Col span={6}></Col>
          <Col span={6}>
            <div className="wrap-banbe">
              {listUser.map(({ id, name, gender, email }) => (
                <Link href="/user/[id]" as={`/user/${id}`}>
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className="tenbanbe"
                  >
                    <img
                      src={gender === "male" ? "/male.jpeg" : "/female.jpeg"}
                      className="img-banbe"
                    />
                    <div style={{ marginRight: "auto" }}>
                      <div
                        style={{
                          color: "#385898",
                          marginLeft: 20,
                          fontWeight: 700,
                          marginRight: "auto",
                        }}
                      >
                        {name}
                      </div>
                      <div
                        style={{
                          color: "#385898",
                          marginLeft: 20,
                          fontWeight: 700,
                          marginRight: "auto",
                        }}
                      >
                        {email}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Col>
          <Col span={6}></Col>
        </Row>
      </div>
    );
  }
}

DanhSachBanBe.contextType = MobXProviderContext;

export default DanhSachBanBe;
