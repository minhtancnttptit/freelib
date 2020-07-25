import React from "react";
import { Row, Col, Button, Comment, Tooltip, List } from "antd";
import moment from "moment";
import { Avatar, Form, Input, icon } from "antd";
import { observer, MobXProviderContext } from "mobx-react";
import Icon, { WarningOutlined } from '@ant-design/icons';


class DanhSachBanBe extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 40 }}>
        <div style={{ marginLeft: -800, fontSize: 25, fontWeight: 800, color: '#4b4f56' }}>
          <img />
          <div>DANH SÁCH BẠN BÈ</div>
        </div>
        <Row>
          <Col span={6}>

          </Col>
          <Col span={6}>
            <div className="wrap-banbe">
              <div style={{ display: 'flex', alignItems: 'center' }} className="tenbanbe">
                <img src='https://static.yeah1.com/uploads/editors/27/2020/03/21/JaZBMzV14fzRI4vBWG8jymplSUGSGgimkqtJakOV.jpeg' className="img-banbe" />
                <div style={{ color: '#385898', marginLeft: 20, fontWeight: 700 }} >Denise R. Ferrier</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }} className="tenbanbe">
                <img src='https://static.yeah1.com/uploads/editors/27/2020/03/21/JaZBMzV14fzRI4vBWG8jymplSUGSGgimkqtJakOV.jpeg' className="img-banbe" />
                <div style={{ color: '#385898', marginLeft: 20, fontWeight: 700 }} >Denise R. Ferrier</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }} className="tenbanbe">
                <img src='https://static.yeah1.com/uploads/editors/27/2020/03/21/JaZBMzV14fzRI4vBWG8jymplSUGSGgimkqtJakOV.jpeg' className="img-banbe" />
                <div style={{ color: '#385898', marginLeft: 20, fontWeight: 700 }} >Denise R. Ferrier</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }} className="tenbanbe">
                <img src='https://static.yeah1.com/uploads/editors/27/2020/03/21/JaZBMzV14fzRI4vBWG8jymplSUGSGgimkqtJakOV.jpeg' className="img-banbe" />
                <div style={{ color: '#385898', marginLeft: 20, fontWeight: 700 }} >Denise R. Ferrier</div>
              </div>
            </div>
          </Col>
          <Col span={6}>

          </Col>
        </Row>
      </div >
    );
  }
}


export default DanhSachBanBe;
