import React, { Component } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { WebView } from 'react-native-webview';
import NavigationService from '../../services/navigation';
import URL from '../../config';

import AsyncStorage from '@react-native-community/async-storage';

export default class URLScreen extends Component {
  constructor() {
    super();
    this.state = {
      guid: '',
      loading: false,
    };
  }

  componentWillMount = async () => {
    this.setState({ loading: true });
    const guid = await AsyncStorage.getItem('@guid:key');
    if (!guid) {
      this.props.navigation.navigate('LoginScreen');
    }
    this.setState({
      guid,
      loading: false,
    });
  };

  ActivityIndicatorLoadingView() {
    //making a view to show to while loading the webpage
    return (
      <ActivityIndicator
        color='black'
        size='large'
        style={{
          flex: 1,
          justifyContent: 'center',
        }}
      />
    );
  }
  render() {
    const guid = this.state.guid;
    let url = this.props.navigation.getParam('url');
    if (url) {
      url += `?GUID=${guid}`;
    } else {
      url = ``;
    }
    console.log('URL From URLScreen:', url, guid);

    return !this.state.loading && this.state.guid ? (
      <WebView
        source={{ uri: url }}
        javaScriptEnabled={true}
        renderLoading={this.ActivityIndicatorLoadingView}
        startInLoadingState={true}
        renderError={() => {
          Alert.alert(
            '네트워크 오류가 발생했습니다.',
            [
              {
                text: '확인',
                onPress: () => NavigationService.navigate('LoginScreen'),
              },
            ],
            { cancelable: false }
          );
        }}
      />
    ) : (
      <ActivityIndicator
        style={{ flex: 1, justifyContent: 'center' }}
        size='large'
        color='black'
      />
    );
  }
}
