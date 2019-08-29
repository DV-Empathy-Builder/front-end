import React from 'react'
import { Form as Formik, Field, withFormik } from 'formik'
import { Segment, Form, Button } from 'semantic-ui-react'
import axios from 'axios'

const Register = props => {
  return (
    <Segment raised compact>
      <Form>
        <Formik>
          <Form.Field>
            <Field type="text" name="username" placeholder="Please enter a username" />
          </Form.Field>
          <Form.Field>
            <Field type="password" name="password" placeholder="Please enter your password" />
          </Form.Field>
          <Button type="submit">Register</Button>
          <Button onClick={() => { window.location = '/login' }}>Login</Button>
        </Formik>
      </Form>
    </Segment>
  )
}

const FormikForm = withFormik({
  mapPropsToValues(values) {
    return {
      username: values.username || '',
      password: values.password || ''
    }
  },
  handleSubmit(values, props) {
    axios.post('https://dv-empathy.herokuapp.com/auth/register', values)
      .then(res => {
        //localStorage.setItem('token', res.data.payload)
        alert('Account was created. You will be redirected to login.')
      })
      .then(res => setTimeout(() => {
        props.props.history.push('/login')
      }, 1000))
      .catch(err => console.log(err))
  }
})(Register)

export default FormikForm