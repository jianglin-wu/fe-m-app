import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
import { AtButton } from "taro-ui";
import Auth from "../../components/Auth";
// import { add, minus, asyncAdd } from '../../actions/counter'

// import './index.less'


class Index extends Component {
  state = {
    visible: false
  };
  // eslint-disable-next-line react/sort-comp
  config = {
    navigationBarTitleText: "首页"
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  showVisible = () => {
    this.setState({
      visible: true
    });
  }

  hideVisible = () => {
    this.setState({
      visible: false
    });
  }

  render() {
    return (
      <View className="index">
        <Auth
          isOpened={this.state.visible}
          onCancel={this.hideVisible}
          onOk={this.hideVisible}
        />
        <AtButton onClick={this.showVisible}>hello</AtButton>
      </View>
    );
  }
}

export default Index
