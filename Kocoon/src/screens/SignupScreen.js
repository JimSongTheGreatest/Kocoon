import React, { useState } from "react";
import { View, Text, Image, TextInput, StyleSheet, Button, } from 'react-native';
import CustomButton from "../components/CustomButton";
import Link from "../components/Link";

function SignupScreen({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/logo.png')} style={styles.img} />
            <Text style={styles.text}>SIGN UP</Text>
            <TextInput
                value={name}
                autoCorrect={false}
                placeholder='Full name'
                placeholderTextColor="#000"
                onChangeText={setName}
                style={styles.textInput}
            />
            <TextInput
                value={email}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='School email'
                placeholderTextColor="#000"
                onChangeText={setEmail}
                style={styles.textInput}
            />
            <TextInput
                value={password}
                secureTextEntry
                placeholder='Password'
                placeholderTextColor="#000"
                onChangeText={setPassword}
                style={styles.textInput}
            />
            <TextInput
                value={confirmPassword}
                secureTextEntry
                placeholder='Re-type Password'
                placeholderTextColor="#000"
                onChangeText={setConfirmPassword}
                style={styles.textInput}
            />
            <CustomButton text='Sign up' onPress={() => { navigation.navigate('Confirmation') }} />
            <Link text="Already have an account? " link='log in' onPress={() => { navigation.navigate('Login') }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DED6D3',
    },
    text: {
        fontSize: 28,
    },
    img: {
        width: 204,
        height: 184,
    },
    textInput: {
        margin: 10,
        width: '100%',
        padding: 4,
        fontSize: 18,
        color: '#103025',
        borderBottomWidth: 1,
    },
});

export default SignupScreen;