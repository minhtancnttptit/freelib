import React from "react";
import { Row, Col, Button, Comment, Tooltip, List } from "antd";
import moment from "moment";
import { Avatar, Form, Input } from "antd";
import { observer, MobXProviderContext } from "mobx-react";
import Router from "next/router";

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
const data = [
  {
    actions: [
      <span key="comment-list-reply-to-0" style={{ color: "#385898" }}>
        Trả lời
      </span>,
    ],
    author: "Dung Dug",
    avatar:
      "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.0-9/67637042_651333615385628_3631152518123225088_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=6HaIkoEOGeIAX-z4Rxt&_nc_ht=scontent.fhan2-2.fna&oh=0d1041861896f286cb63cbd47824ee1b&oe=5F3E22EE",
    content: <p className="content-binhluan">Tài liệu rất bổ ích</p>,
    datetime: (
      <Tooltip
        title={moment().subtract(1, "days").format("YYYY-MM-DD HH:mm:ss")}
      >
        <span>{moment().subtract(1, "days").fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    actions: [
      <span key="comment-list-reply-to-0" style={{ color: "#385898" }}>
        Trả lời
      </span>,
    ],
    author: "TuanAnh",
    avatar:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/74802500_2459327151053474_8611981286195593216_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=cuwsaL9IMpAAX-RBx6D&_nc_ht=scontent.fhan2-4.fna&oh=e47b950317d6a02ab712e6b1c4fbf8e7&oe=5F3D3D61",
    content: <p className="content-binhluan">Quá tuyệt vời</p>,
    datetime: (
      <Tooltip
        title={moment().subtract(2, "days").format("YYYY-MM-DD HH:mm:ss")}
      >
        <span>{moment().subtract(2, "days").fromNow()}</span>
      </Tooltip>
    ),
  },
];

@observer
class XemTaiLieu extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: "",
  };

  componentDidMount() {}

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: "",
        comments: [
          {
            author: "Han Solo",
            avatar:
              "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
          ...this.state.comments,
        ],
      });
    }, 1000);
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const { comments, submitting, value } = this.state;
    const {
      query: { id },
    } = Router;
    const { globalStore } = this.context;
    const { newEbooks } = globalStore;
    const ebook = newEbooks.find((item) => item.id === id);

    const { title, cover, category, link, description } = ebook;
    const lines = description.split("\n");

    return (
      <div className="content">
        <div style={{ marginTop: 60 }}>
          <Row>
            <div style={{ display: "flex", position: "relative" }}>
              <div
                style={{
                  right: -400,
                  top: 15,
                  width: 600,
                }}
              >
                <Button
                  type="danger"
                  shape="round"
                  icon="warning"
                  size={"large"}
                >
                  Báo cáo tài liệu
                </Button>
              </div>
            </div>
            <Col span={6}>
              <div className="image-xemtailieu">
                <img src={cover} style={{ width: "216px", height: 280 }} />
              </div>
            </Col>
            <Col span={12}>
              <div>
                <div className="ten-tailieu">{title}</div>
                <div className="wrap-tg-nph-theloai">
                  <div style={{ display: "flex" }}>
                    Người đăng:{" "}
                    <div
                      style={{
                        color: "#486d97",
                        marginLeft: 4,
                        fontWeight: 700,
                      }}
                    >
                      Newptit
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
                <div className="mota">
                  {lines.map((line) => (
                    <div>{line}</div>
                  ))}
                </div>
                ----------------------------------------------------------------------------------------------------------------
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
                ----------------------------------------------------------------------------------------------------------------
                <List
                  className="comment-list"
                  header={`${data.length} lượt bình luận`}
                  itemLayout="horizontal"
                  dataSource={data}
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
                  {comments.length > 0 && <CommentList comments={comments} />}
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
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div>
                <div
                  style={{ paddingTop: 60, textAlign: "center" }}
                  className="tailieu-lienquan"
                >
                  Tài liệu cùng thể loại
                </div>
                <div className="tai-lieu-lien-quan">
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
                      Lippincott Illustrated Review-Pharmacology 7th Edition
                      (2018)
                    </div>
                  </a>
                  <a
                    style={{
                      margin: 100,
                      textAlign: "left",
                      color: "#474747",
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                    className="test"
                  >
                    <div>
                      <img src="/ebook.png" style={{ marginRight: 5 }} />
                      Lippincott Illustrated Reviews Flash Cards Biochemistry
                    </div>
                  </a>
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
                      Lippincott Illustrated Reviews: Pharmacology 6th Edition
                    </div>
                  </a>
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
                      Lippincott's Illustrated Reviews Physiology (2012)
                    </div>
                  </a>
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
                      Review of Pathology and Genetics 7th Edition
                    </div>
                  </a>
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
