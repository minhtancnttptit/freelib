import React from "react";
import { Carousel } from "antd";
import _, { random } from "lodash";
import Link from "next/link";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { observer, MobXProviderContext } from "mobx-react";
import { toJS } from "mobx";
import Router from "next/router";

import EBook from "../EBook";
@observer
class NewEBook extends React.Component {
  static getInitialProps = (props) => {
    return props;
  };

  state = {};

  async componentDidMount() {
    const { globalStore } = this.context;
    console.log(globalStore);
    const { newEbooks, getNewEbooks } = globalStore;
    if (newEbooks.length < 1) {
      await getNewEbooks();
    }
  }

  carousel = undefined;

  next = () => {
    this.carousel.next();
  };

  prev = () => {
    this.carousel.prev();
  };

  handleClickEbook = () => {
    Router.push("/resource");
  };

  render() {
    const { globalStore } = this.context;
    const { newEbooks } = globalStore;
    console.log(toJS(newEbooks));
    if (!newEbooks.length) {
      return <></>;
    }
    const chunks = _.chunk(newEbooks, 4);
    const tmp = chunks.map((item) => {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {item.map(({ id, title, cover }) => (
            <Link href="/resource/[id]" as={`/resource/${id}`}>
              <a>
                <EBook
                  textEbook={title}
                  srcImageEbook={cover}
                  countClick={Math.round(Math.random() * 100)}
                />
              </a>
            </Link>
          ))}
        </div>
      );
    });
    return (
      <div>
        <h1>Ebook mới</h1>
        <LeftCircleOutlined onClick={this.prev} />
        <Carousel ref={(node) => (this.carousel = node)}>
          {tmp.map((x) => (
            <div>{x}</div>
          ))}
        </Carousel>
        <RightCircleOutlined onClick={this.next} />
      </div>
    );
  }
}

NewEBook.contextType = MobXProviderContext;

export default NewEBook;
