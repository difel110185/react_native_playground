import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import * as Google from "expo-google-app-auth";

const apiClientId = "54373031943-ltci0cr9224kpjq9cptpve4rp1e24pb6.apps.googleusercontent.com";

export default class App extends React.Component {
  state={
    signedIn: false,
    name: "",
    photoUrl: "",
    accessToken: undefined
  };

  signIn = async () => {
    try{
      const result = await Google.logInAsync({
        iosClientId: apiClientId,
        scopes: ["profile", "email"]
      });

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl,
          accessToken: result.accessToken
        })
      }
      else
        console.log("cancelled");
    }
    catch (e) {
      console.log("error", e);
    }
  };

  signOut = async () => {
    try{
      const result = await Google.logOutAsync({
        iosClientId: apiClientId,
        accessToken: this.state.accessToken
      });

      if (result.ok) {
        Alert.alert("Logout", "You have been logged out.");
        this.setState({
          signedIn: false,
          name: "",
          photoUrl: "",
          accessToken: undefined
        })
      }
      else
        console.log("cancelled");
    }
    catch (e) {
      console.log("error", e);
    }
  };

  render() {
    return (
        <View style={styles.container}>
          {this.state.signedIn && <LoggedInPage signOutFunction={this.signOut} username={this.state.name} userPhotoUrl={this.state.photoUrl} />}
          {!this.state.signedIn && <LoginPage signInFunction={this.signIn} />}
        </View>
    )
  }
}

class LoginPage extends React.Component {
  state = {

  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View>
          <Text>Sign in with Google</Text>
          <Button
              title="Sign in with Google"
              onPress={this.props.signInFunction}
          />
        </View>
    )
  }
}

class LoggedInPage extends React.Component {
  state = {

  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View>
          <Text style={styles.header}>Welcome: {this.props.username}</Text>
          <Image source={{uri: this.props.userPhotoUrl}} style={styles.image} />
          <Button
              title="Sign out from Google"
              onPress={this.props.signOutFunction}
          />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 25
  },
  image: {
    marginTop: 15,
    width: 150,
    height: 150,
    borderColor: "rgba(0,0,0,2)",
    borderWidth: 3,
    borderRadius: 75
  }
});
