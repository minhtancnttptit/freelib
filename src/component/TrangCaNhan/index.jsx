import React from "react";
import { Row, Col, Button, Comment, Tooltip, List } from "antd";
import moment from "moment";
import { Avatar, Form, Input, icon } from "antd";
import { observer, MobXProviderContext } from "mobx-react";
import Icon, { WarningOutlined } from "@ant-design/icons";
import { BarsOutlined } from "@ant-design/icons";
import Link from "next/link";
import { toJS } from "mobx";

@observer
class TrangCaNhan extends React.Component {
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
    const { id: idUser } = this.props;
    const { globalStore } = this.context;
    const { users, newEbooks } = globalStore;
    const user = users.find((item) => item.id === idUser);
    if (!user) {
      return <></>;
    }
    const { id, name, gender, dob, address, email } = user;
    const listEbook = newEbooks.filter((ebook) => ebook.idpublisher === id);

    return (
      <div style={{ marginTop: 40 }}>
        <Row>
          <Col span={3} />
          <Col span={12}>
            <div style={{ fontSize: 25, fontWeight: 800, color: "#4b4f56" }}>
              THÔNG TIN CÁ NHÂN
            </div>
          </Col>
          <Col span={6}>
            <Button
              type="danger"
              shape="round"
              icon={<BarsOutlined />}
              size={"large"}
            >
              Danh sách bạn
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={2}></Col>
          <Col span={10}>
            <div className="wrap-thongtin">
              <div
                style={{ display: "flex", alignItems: "top" }}
                className="trangcanhan"
              >
                <img
                  src={gender === "male" ? "/male.jpeg" : "/female.jpeg"}
                  className="img-thongtin"
                />
                <div
                  style={{
                    color: "#385898",
                    marginLeft: 20,
                    fontWeight: 700,
                    marginRight: 20,
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 15,
                    }}
                  >
                    <div style={{ width: 250 }}>id:</div>
                    <Input
                      placeholder="Mã id"
                      className="input-chuathongtin"
                      value={id}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 15,
                    }}
                  >
                    <div style={{ width: 250 }}>Họ tên:</div>
                    <Input
                      placeholder="Họ tên"
                      className="input-chuathongtin"
                      value={name}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 15,
                    }}
                  >
                    <div style={{ width: 250 }}>Ngày sinh:</div>
                    <Input
                      placeholder="Ngày sinh"
                      className="input-chuathongtin"
                      value={dob}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 15,
                    }}
                  >
                    <div style={{ width: 250 }}>Giới tính:</div>
                    <Input
                      placeholder="Giới tính"
                      className="input-chuathongtin"
                      value={gender}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 15,
                    }}
                  >
                    <div style={{ width: 250 }}>Email:</div>
                    <Input
                      placeholder="Email"
                      className="input-chuathongtin"
                      value={email}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 15,
                    }}
                  >
                    <div style={{ width: 250 }}>Địa chỉ:</div>
                    <Input
                      placeholder="Địa chỉ"
                      className="input-chuathongtin"
                      value={address}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={11}>
            <div className="ebook-trangcanhan">
              {listEbook.map(({ id, title }) => (
                <div>
                  <Link href="/resource/[id]" as={`/resource/${id}`}>
                    {title}
                  </Link>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

TrangCaNhan.contextType = MobXProviderContext;

export default TrangCaNhan;
