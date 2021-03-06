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
    return (
      <div>
        <h1>Kết quả tìm kiếm</h1>
        {arr.length > 0 ? (
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
        ) : (
          <h2>Không tìm thấy tài liệu phù hợp</h2>
        )}
      </div>
    );
  }
}

Result.contextType = MobXProviderContext;

export default Result;
