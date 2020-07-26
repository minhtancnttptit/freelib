import React from "react";
import { Input } from "antd";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import DanhSachBanBe from "../../src/component/DanhSachBanBe";

@observer
class SearchUser extends React.Component {
  @observable
  value = "";

  @action
  setValue = (value) => {
    this.value = value;
  };

  render() {
    return (
      <div className="normal">
        <Input
          style={{ width: 500, marginTop: 20 }}
          placeholder="Nhập tên, email người dùng cần tìm kiếm"
          className="input-chuathongtin"
          value={this.value}
          onChange={(e) => this.setValue(e.target.value)}
        />
        <div>
          <DanhSachBanBe value={this.value} />
        </div>
      </div>
    );
  }
}

export default SearchUser;
