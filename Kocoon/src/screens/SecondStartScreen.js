import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import Wave from '../components/Wave'

export default function SecondStartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Wave />
      {/* <Paragraph>
        The easiest way to start with your amazing application.
      </Paragraph> */}
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Next
      </Button>
      {/* <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button> */}
    </Background>
  )
}
