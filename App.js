import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Button , Alert} from "react-native";
import { loginstyle } from "./src/styles/Styles";

const App = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [password, setpass] = useState("");
  const [conpass, setconpass] = useState("");
  const [email, setEmail] = useState("");

  const handlePress = () => {
    Alert.alert("Success", "Registration Successful!", [{ text: "OK" }]);
    console.log("hello");
  };

  return (
    <View style={loginstyle.container}>
      <View style={loginstyle.innerContainer}> 
        <Text style={loginstyle.title}>Create your own account</Text>

        <Text>Name</Text>
        <TextInput
          value={username}
          style={loginstyle.textinput}
          onChangeText={(text) => setUsername(text)}
          placeholder="Enter your name"
          placeholderTextColor="#999" 
        />

        <Text>Surname</Text>
        <TextInput
          value={firstname}
          style={loginstyle.textinput}
          onChangeText={(text) => setFirstname(text)}
          placeholder="Enter your surname"
          placeholderTextColor="#999" 
        />

        <Text>Email</Text>
        <TextInput
          value={email}
          style={loginstyle.textinput}
          onChangeText={(text) => setEmail(text)}
          placeholder="Enter your email"
          placeholderTextColor="#999" 
        />

        <Text>Password</Text>
        <TextInput
          value={password}
          style={loginstyle.textinput}
          onChangeText={(text) => setpass(text)}
          secureTextEntry={true} 
          placeholder="Enter your password"
          placeholderTextColor="#999" 
        />

        <Text>Confirm password</Text>
        <TextInput
          value={conpass}
          style={[loginstyle.textinput ,  { marginBottom: 35 }]}
          onChangeText={(text) => setconpass(text)}
          secureTextEntry={true} 
          placeholder="Confirm your password"
          placeholderTextColor="#999"
        />

        <Button onPress={handlePress} title="Sign in" color="#841584"  />
      </View>
    </View>
  );
};

export default App;