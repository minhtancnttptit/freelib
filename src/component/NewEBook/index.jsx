import React from "react";
import { Carousel } from "antd";
import _, { random } from "lodash";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { observer, MobXProviderContext } from "mobx-react";
import { toJS } from "mobx";

import EBook from "../EBook";
@observer
class NewEBook extends React.Component {
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

  render() {
    const { globalStore } = this.context;
    const { newEbooks } = globalStore;
    console.log(toJS(newEbooks));
    if (!newEbooks.length) {
      return <></>;
    }
    console.log(newEbooks);
    const { title, cover } = newEbooks[0];
    const arr = [
      {
        name: title,
        image: cover,
        countClick: 11,
        status: true,
      },
      {
        name: newEbooks[1].title,
        image: newEbooks[1].cover,
        countClick: 6,
        status: true,
      },
      {
        name: newEbooks[2].title,
        image: newEbooks[2].cover,
        countClick: 9,
        status: true,
      },
      {
        name: "Ebook1",
        image:
          "http://luutru.vietlib.vn/upload/4b2553ebc1e2ecd65c820887d0e998a9/[vietlib.vn]-lippincott-illustrated-reviews-biochemistry-7th-edition-2017.jpg",
        countClick: 9,
        status: true,
      },
      {
        name: "Ebook2",
        image:
          "http://luutru.vietlib.vn/upload/c488959a2511411b94bb1f0bf05d651f/[vietlib.vn]-hitchhikers-guide-to-the-galaxy-the---douglas-adams--eoin-colfer.jpg",
        countClick: 1,
        status: true,
      },
      {
        name: "Ebook3",
        image:
          "http://luutru.vietlib.vn/upload/fad59b3e1f2211845d0ac5933f28fb1e/[vietlib.vn]-watership-down---richard-adams.jpg",
        countClick: 3,
        status: true,
      },
      {
        name: "Ebook4",
        image:
          "http://luutru.vietlib.vn/upload/af3f28684eef95f740bdc3f1114e85da/[vietlib.vn]-little-women---louisa-may-alcott.jpg",
        countClick: 3,
        status: true,
      },
    ];
    const chunks = _.chunk(newEbooks, 4);
    const tmp = chunks.map((item) => {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {item.map(({ title, cover }) => (
            <EBook
              textEbook={title}
              srcImageEbook={cover}
              countClick={Math.round(Math.random() * 100)}
            />
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
