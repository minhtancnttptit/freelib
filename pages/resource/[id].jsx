import React from "react";
import { Row, Col, Button, Comment, Tooltip, List } from "antd";
import Link from "next/link";
import moment from "moment";
import { Avatar, Form, Input, icon } from "antd";
import { observer, MobXProviderContext } from "mobx-react";
import style from "./tailieu.module.css";
import { WarningOutlined } from "@ant-design/icons";
import Axios from "axios";
import { ObjectID } from "bson";

const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Thêm bình luận
      </Button>
    </Form.Item>
  </div>
);

@observer
class XemTaiLieu extends React.Component {
  static getInitialProps(props) {
    return { id: props.query.id };
  }

  state = {
    value: "",
  };

  componentDidMount() {
    const { globalStore } = this.context;
    const {
      users,
      getUsers,
      newEbooks,
      getNewEbooks,
      getComments,
    } = globalStore;
    const { id } = this.props;
    if (newEbooks.length < 1) {
      getNewEbooks();
    }
    if (users.length < 1) {
      getUsers();
    }
    getComments(id);
  }

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    const { globalStore } = this.context;
    const { addComment, account } = globalStore;
    const { id: idUser } = account;

    const {
      query: { id },
    } = this.props;

    setTimeout(() => {
      addComment({
        id: new ObjectID().toHexString(),
        iduser: idUser,
        idresource: id,
        content: this.state.value,
      });
      this.setState({ value: "" });
    }, 1000);
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const { submitting, value } = this.state;
    const { id } = this.props;
    const { globalStore } = this.context;
    const { isAuthen, newEbooks, users, comments, getComments } = globalStore;
    if (newEbooks.length < 1) {
      return <></>;
    }
    getComments(id);

    const ebook = newEbooks.find((item) => item.id === id);

    const { title, cover, category, link, description, idpublisher } = ebook;
    const lines = description.split("\n");

    const publisher = users.find((user) => user.id === idpublisher);
    let name = "";
    if (publisher) {
      name = publisher.name;
    }

    let listComment = [];

    if (comments.length < 1) {
      listComment = [];
    } else {
      listComment = comments.map((comment) => {
        const { id, iduser, content } = comment;
        const user = users.find((item) => item.id === iduser);
        if (!user) {
          return {};
        }
        const { name, gender } = user;
        return {
          actions: [
            <span key="comment-list-reply-to-0" style={{ color: "#385898" }}>
              Trả lời
            </span>,
          ],
          author: name,
          avatar: gender === "male" ? "/male.jpeg" : "/female.jpeg",
          content: <p className="content-binhluan">{content}</p>,
          datetime: (
            <Tooltip
              title={moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}
            >
              <span>{moment().subtract(1, "days").fromNow()}</span>
            </Tooltip>
          ),
        };
      });
    }

    return (
      <div className={style.content}>
        <div style={{ marginTop: 80 }}>
          <div style={{ display: "flex", position: "relative" }}>
            <div
              style={{
                right: -900,
                top: -15,
                width: 600,
                position: "relative",
              }}
            >
              <Button
                type="danger"
                shape="round"
                icon={<WarningOutlined />}
                size={"large"}
              >
                Báo cáo tài liệu
              </Button>
            </div>
          </div>
          <Row>
            <Col span={6}>
              <div style={{ marginLeft: 120 }}>
                <img src={cover} style={{ width: "216px", height: 280 }} />
              </div>
            </Col>
            <Col span={12}>
              <div>
                <div className={style.ten_tailieu}>{title}</div>
                <div className={style.wrap_tg_nph_theloai}>
                  <div style={{ display: "flex" }}>
                    Người đăng:{" "}
                    <div
                      style={{
                        color: "#486d97",
                        marginLeft: 4,
                        fontWeight: 700,
                      }}
                    >
                      <Link href="/user/[id]" as={`/user/${idpublisher}`}>
                        {name}
                      </Link>
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    Thể loại:{" "}
                    <div
                      style={{
                        color: "#486d97",
                        marginLeft: 4,
                        fontWeight: 700,
                      }}
                    >
                      {category}
                    </div>
                  </div>
                </div>
                <div className={style.mota}>
                  {lines.map((line) => (
                    <div>{line}</div>
                  ))}
                </div>
                ----------------------------------------------------------------------------------------------------------------
                {isAuthen ? (
                  <div style={{ paddingTop: 5 }}>
                    <strong>Download:</strong> PDF{" "}
                    <div>
                      <a
                        href={link}
                        className="btn btn-success btn-sm"
                        target="_blank"
                      >
                        <i className="fa fa-download"></i> Download{" "}
                      </a>
                    </div>
                  </div>
                ) : (
                  <h2>Vui lòng đăng nhập để tải.</h2>
                )}
                ----------------------------------------------------------------------------------------------------------------
                <List
                  className="comment-list"
                  header={`${listComment.length} lượt bình luận`}
                  itemLayout="horizontal"
                  dataSource={listComment}
                  renderItem={(item) => (
                    <li>
                      <Comment
                        actions={item.actions}
                        author={item.author}
                        avatar={item.avatar}
                        content={item.content}
                        datetime={item.datetime}
                      />
                    </li>
                  )}
                />
                <div>
                  {/* {comments.length > 0 && <CommentList comments={comments} />} */}
                  {isAuthen ? (
                    <Comment
                      avatar={<Avatar src="./ebook.png" alt="Han Solo" />}
                      content={
                        <Editor
                          onChange={this.handleChange}
                          onSubmit={this.handleSubmit}
                          submitting={submitting}
                          value={value}
                        />
                      }
                    />
                  ) : (
                    <h2>Vui lòng đăng nhập để bình luận</h2>
                  )}
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div>
                <div
                  style={{ paddingTop: 60, textAlign: "center" }}
                  className={style.tailieu_lienquan}
                >
                  Tài liệu cùng thể loại
                </div>
                <div className={style.tai_lieu_lien_quan}>
                  {newEbooks
                    .filter((ebook) => ebook.category === category)
                    .splice(0, 7)
                    .map((item) => (
                      <Link href="/resource/[id]" as={`/resource/${item.id}`}>
                        <a
                          style={{
                            margin: 100,
                            textAlign: "left",
                            color: "#474747",
                            fontSize: 14,
                            fontWeight: 600,
                          }}
                        >
                          <div>
                            <img src="/ebook.png" style={{ marginRight: 5 }} />
                            <label>{item.title}</label>
                          </div>
                        </a>
                      </Link>
                    ))}
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

XemTaiLieu.contextType = MobXProviderContext;

export default XemTaiLieu;
