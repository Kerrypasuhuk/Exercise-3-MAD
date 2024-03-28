import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    
    console.log('Username:', username);
    console.log('Password:', password);
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan username anda"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan password anda"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'flex-start', 
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left', 
    color: 'black', 
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
    color: 'black', 
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  signInButton: {
    backgroundColor: '#FF4500', 
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 20, 
  },
  signInText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;