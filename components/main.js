import React, { Component } from "react";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { Container, Content, Text, View } from "native-base";

import Feeds from "./feeds";

class TwitterApp extends Component {
  render() {
    return (
      <Container>
        <Text style={{ alignSelf: "center", marginTop: 5, fontSize: 15, fontWeight: "700" }}>#Trending</Text>
        <View style={{ flex: 1 }}>
          <Feeds
            feeds={this.props.trending}
            navigation={this.props.navigation}
          />
        </View>
      </Container>
    );
  }
}

function mapStateProps(state) {
  return {
    trending: state.trending
  }
}

export default connect(mapStateProps)(TwitterApp);