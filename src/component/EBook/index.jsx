import React from "react";
import { EyeOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";

class EBook extends React.Component {
  render() {
    const { srcImageEbook, textEbook, countClick } = this.props;
    return (
      <div className={styles.wrap_col_ebookcon}>
        <div className={styles.col_ebookcon}>
          <img
            src={srcImageEbook}
            style={{ width: "170px", height: "220px" }}
          />
          <div className={styles.text_ebook}>{textEbook}</div>
          <div className={styles.wrap_icon_countClick}>
            <EyeOutlined />
            <div style={{ marginLeft: 3 }}>{countClick}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default EBook;
