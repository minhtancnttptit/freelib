import React from "react";
import { Row, Col, Button, Comment, Tooltip, List } from "antd";
import moment from "moment";
import { Avatar, Form, Input, icon } from "antd";
import { observer, MobXProviderContext } from "mobx-react";
import Icon, { WarningOutlined } from '@ant-design/icons';
import { BarsOutlined } from '@ant-design/icons';




class TrangCaNhan extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 40 }}>
        <Row>
          <Col span={12}>
            <div style={{ fontSize: 25, fontWeight: 800, color: '#4b4f56' }}>THÔNG TIN CÁ NHÂN</div>
          </Col>
          <Col span={6}>
            <Button
              type="danger"
              shape="round"
              icon={<BarsOutlined />}
              size={"large"}
            >
              Danh sách bạn
          </Button>
          </Col>
        </Row>
        <Row>
          <Col span={2}>
          </Col>
          <Col span={10}>
            <div className="wrap-thongtin">
              <div style={{ display: 'flex', alignItems: 'top' }} className="trangcanhan">
                <img src='https://static.yeah1.com/uploads/editors/27/2020/03/21/JaZBMzV14fzRI4vBWG8jymplSUGSGgimkqtJakOV.jpeg' className="img-thongtin" />
                <div style={{ color: '#385898', marginLeft: 20, fontWeight: 700, marginRight: 20, alignItems: 'center' }} >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 15 }}>
                    <div style={{ width: 250 }}>
                      id:
                    </div>
                    <Input placeholder="Mã id" className="input-chuathongtin" />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 15 }}>
                    <div style={{ width: 250 }}>
                      Họ tên:
                    </div>
                    <Input placeholder="Họ tên" className="input-chuathongtin" />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 15 }}>
                    <div style={{ width: 250 }}>
                      Ngày sinh:
                    </div>
                    <Input placeholder="Ngày sinh" className="input-chuathongtin" />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 15 }}>
                    <div style={{ width: 250 }}>
                      Thể loại yêu thích:
                    </div>
                    <Input placeholder="Thể loại yêu thích" className="input-chuathongtin" />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 15 }}>
                    <div style={{ width: 250 }}>
                      Email:
                    </div>
                    <Input placeholder="Email" className="input-chuathongtin" />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 15 }}>
                    <div style={{ width: 250 }}>
                      Địa chỉ:
                    </div>
                    <Input placeholder="Địa chỉ" className="input-chuathongtin" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={11}>
            <div className="ebook-trangcanhan">
              <div>
                Vẽ ebook trong này
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}


export default TrangCaNhan;
