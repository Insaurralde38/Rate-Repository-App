import React from "react"
import { Formik, useField } from "formik"
import { Button, View, StyleSheet } from "react-native"
import StyledText from '../components/StyledText'
import StyledTextInput from '../components/StyledTextInput'
import { loginValidationSchema } from '../validationSchemas/login'

const initialValues = {
  email: '',
  password: ''
}

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  return (
    <>
    <StyledTextInput
      name={name}
      value={field.value}
      error={meta.error}
      onChangeText={value => helpers.setValue(value)}
      onBlur={() => helpers.setTouched(true)}
      {...props}
    />
    {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

const LogInPage = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={loginValidationSchema} onSubmit={values => console.log(values)}>
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name='email' placeholder="E-mail" />
            <FormikInputValue name='password' placeholder="Password" secureTextEntry />
            <Button onPress={handleSubmit} title="Log In" />
          </View>
        )
      }}
    </Formik>
  )
}

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -10,
    marginLeft: 5
  }
})

export default LogInPage