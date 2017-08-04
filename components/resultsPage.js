import React, { Component } from "react";
import { ListView, Keyboard, View, StyleSheet } from "react-native";
import { Text, Content, Card, CardItem, Left, Thumbnail, Body, Button, Right, Icon } from "native-base";

class ResultPage extends Component {
  constructor(props, context) {
    super(props, context);
    const { text } = this.props.navigation.state.params;
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(text),
    };
  }
  static navigationOptions = {
    title: "Search"
  }
  renderRow(result) {
    const { created_at } = result;
    const meta = created_at.split(" ");
    const day = meta[0] + " " + meta[1] + " " + meta[2] + " " + meta[5];
    return (
      <Content>
        <Card style={{ marginTop: 10, marginLeft: 10, marginRight: 10}}>
          <CardItem>
            <Left>
              <Thumbnail source = {{ uri: `${result.user.profile_image_url_https}` }} />
              <Body>
                <Text>{result.user.name}</Text>
                <Text note>{result.user.location}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Body>
              <Text style={{ marginBottom: 10, marginLeft: 10 }}>{result.text}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="repeat" />
                <Text style={{ marginLeft: 5 }}>{result.retweet_count}</Text>
                <Icon style={{ marginLeft: 10 }} active name="heart" />
                <Text style={{ marginLeft: 5 }}>{result.favorite_count}</Text>
              </Button>
            </Left>
            <Right>
              <Text note>{day}</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    );
  }
  render() {
    Keyboard.dismiss();
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}


export default ResultPage;
