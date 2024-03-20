import React from 'react'
import './login.css'
import { useFormik } from 'formik'
import axios from 'axios'
import * as Yup from "yup"
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

  const initial = {
    email: '',
    password: '',
  }

  const validate = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
  }

  const submitlogin = async (value, { resetForm }) => {
    const loguser = value
    const logusers = JSON.stringify(loguser)
    console.warn(logusers)
    try {
      const respo = await axios.post('/login', `${logusers}`, { headers: headers })
      toast(respo.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    catch (errors) {
      toast(errors.response.data.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: 'error'
      })
    }
    resetForm()
  }

  const formik = useFormik({
    initialValues: initial,
    onSubmit: submitlogin,
    validationSchema: validate
  })



  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="log-containt">
        <div className='log-left' style={{ backgroundColor: 'rgba(252,236,211,255)', filter: 'grayscale(20%)' }}>
          <img className='image-style' src={process.env.PUBLIC_URL + '/images/logotemp3.jpg'} />

        </div>
        <div className='log-right'>

          <div className="login-box">
            <h2>Login Page</h2> 
            <form onSubmit={formik.handleSubmit}>
              <div className="user-box">
                <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
                <label>email</label>
                {formik.touched.email && formik.errors.email ? <div className='text-danger'>{formik.errors.email}</div> : null}
              </div>
              <div className="user-box">
                <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
                <label>Password</label>
                {formik.touched.password && formik.errors.password ? <div className='text-danger'>{formik.errors.password}</div> : null}
              </div>
              <button type='submit'>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </button>
            </form>
          </div>


        </div>
      </div>
    </>
  )
}

export default Login