import React from "react";
import style from "./tailieu.module.css";
class Namhoc extends React.Component {
  render() {
    const { srcImageNamHoc, tenNamHoc } = this.props;
    return (
      <div className={style.wrap_col_nam_hoc}>
        <div className={style.col_nam_hoc}>
          <div>
            <img
              src={srcImageNamHoc}
              style={{
                width: 80,
                height: 80,
                margin: "0 auto",
                marginBottom: 10,
              }}
            />
          </div>
          <div style={{ display: "flex" }}>
            <button className={style.button_open}>TÀI LIỆU</button>
            <button className={style.button_close}>ĐỀ THI</button>
          </div>
          <h2 style={{ color: "#bc2734", fontWeight: 900 }}>{tenNamHoc}</h2>
        </div>
      </div>
    );
  }
}
export default Namhoc;
