import React from "react";
import NamHoc from "./Namhoc";
import { Carousel } from "antd";

class totalNamHoc extends React.Component {
  render() {
    var datanamhoc = [
      {
        name: "NĂM 1",
        image: "https://i.ibb.co/J2DBWvV/icon-1.png",
        status: true,
      },
      {
        name: "NĂM 2",
        image: "https://i.ibb.co/JzH4nSx/icon-2.png`",
        status: true,
      },
      {
        name: "NĂM 3",
        image: "https://i.ibb.co/R6BdHLL/icon-3.png",
        status: true,
      },
      {
        name: "NĂM 4",
        image: "https://i.ibb.co/1zPNBfx/icon-4.png",
        status: true,
      },
    ];
    let allNamHoc = datanamhoc.map((datanamhoc) => {
      let result = "";
      if (datanamhoc.status) {
        return (
          <NamHoc
            srcImageNamHoc={datanamhoc.image}
            tenNamHoc={datanamhoc.name}
          ></NamHoc>
        );
      }
      return result;
    });
    const y = (
      <div style={{ display: "flex", justifyContent: "center", margin: 40 }}>
        <div>{allNamHoc[0]}</div>
        <div>{allNamHoc[1]}</div>
        <div>{allNamHoc[2]}</div>
        <div>{allNamHoc[3]}</div>
      </div>
    );
    return (
      <div className="test">
        <Carousel autoplay>
          <div
            style={{
              textAlign: "center",
              justifyContent: "center",
              margin: "30px",
            }}
          >
            <h1 style={{ marginTop: 15, fontWeight: 600 }}>Tài liệu PTIT</h1>
            {y}
          </div>
        </Carousel>
      </div>
    );
  }
}
export default totalNamHoc;
