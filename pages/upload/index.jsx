import React, { useContext } from "react";
import { Input, Form, Select, Button } from "antd";
import { MobXProviderContext } from "mobx-react";

const { Option } = Select;
const { Item } = Form;

const Upload = () => {
  const { globalStore } = useContext(MobXProviderContext);
  const { uploadResource } = globalStore;

  return (
    <div style={{ width: "800px", margin: "0 auto", marginTop: "30px" }}>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onFinish={uploadResource}
      >
        <Item label="Loại tài nguyên" name="type">
          <Select>
            <Option value="document">Document</Option>
            <Option value="ebook">Ebook</Option>
          </Select>
        </Item>
        <Item label="Tiêu đề" name="title">
          <Input />
        </Item>
        <Item label="Ảnh bìa" name="cover">
          <Input />
        </Item>
        <Item label="Thể loại" name="category">
          <Select>
            <Option value="programming">programming</Option>
            <Option value="linguistics">linguistics</Option>
            <Option value="economics">economics</Option>
          </Select>
        </Item>
        <Item label="Mô tả" name="description">
          <Input />
        </Item>
        <Item label="Đường dẫn" name="link">
          <Input />
        </Item>
        <Item style={{ textAlign: "center" }}>
          <Button type="primary" htmlType="submit">
            Upload
          </Button>
        </Item>
      </Form>
    </div>
  );
};

export default Upload;
