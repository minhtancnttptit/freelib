import React, { useContext } from "react";
import { observer, MobXProviderContext } from "mobx-react";
import Link from "next/link";

import EBook from "../../src/component/EBook";

@observer
class Result extends React.Component {
  static getInitialProps(props) {
    return props;
  }

  render() {
    const { globalStore } = this.context;
    const { newEbooks } = globalStore;
    const { value } = this.props.query;
    const arr = newEbooks.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    console.log(arr);
    return (
      <div>
        <h1>Kết quả tìm kiếm</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {arr.map(({ id, title, cover }) => (
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
      </div>
    );
  }
}

Result.contextType = MobXProviderContext;

export default Result;
