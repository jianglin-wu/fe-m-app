import Taro from "@tarojs/taro";
import { Button } from "@tarojs/components";
import {
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction
} from "taro-ui";

const Auth = ({ isOpened, onCancel, onOk }) => {
  return (
    <AtModal isOpened={isOpened}>
      <AtModalHeader>标题</AtModalHeader>
      <AtModalContent>
        这里是正文内容，欢迎加入京东凹凸实验室
        这里是正文内容，欢迎加入京东凹凸实验室
        这里是正文内容，欢迎加入京东凹凸实验室
      </AtModalContent>
      <AtModalAction>
        {" "}
        <Button onClick={onCancel}>取消</Button>
        <Button onClick={onOk}>确定</Button>
        {" "}
      </AtModalAction>
    </AtModal>
  );
};

export default Auth;
