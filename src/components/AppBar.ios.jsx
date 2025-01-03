import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Link, useLocation } from 'react-router-native'
import Constants from 'expo-constants'
import StyledText from './StyledText'
import theme from '../theme'

const AppBarTab = ({ children, to }) => {
  const {pathname} = useLocation()
  const active = pathname === to

  const textStyles = [
    styles.text,
    active && styles.active
  ]
  
  return (
    <Link to={to} >
      <StyledText fontWeight='bold' style={textStyles}>
        {children}
      </StyledText>
    </Link>
  )
}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator horizontal style={styles.scroll}>
        <AppBarTab to='/' >Repositories</AppBarTab>
        <AppBarTab to='/signin' >Sign-In</AppBarTab>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10,
  },
  scroll: {
    paddingBottom: 15
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10
  },
  active: {
    color: theme.appBar.textPrimary,
  }
})

export default AppBar