import React, { useState, useContext } from 'react'
import { API } from '../service/api'
import { DataContext } from '../context/DataProvider'
import { useNavigate } from 'react-router-dom'


const Login = ({ isUserAuthenticated }) => {
  const [toggle, setToggle] = useState(true)
  const [signup, setSignup] = useState({
    name: '',
    username: '',
    password: ''
  })
  const [login, setLogin] = useState({
    username: "",
    password: ""
  })

  const { setAccount } = useContext(DataContext)

  const navigate = useNavigate();


  const onValueChage = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const change = () => {
    if (toggle === true) {
      setToggle(false)
    }
    else {
      setToggle(true)
    }
  }

  const signValue = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  }

  const signupUser = async (e) => {
    e.preventDefault();
    let response = await API.userSignup(signup)
    if (response.isSuccess) {
      setToggle(true)
      alert("Create Account Successfull")
    } else {
      alert("Something went Wrong | please try again ")
    }
  }

  const loginUser = async (e) => {
    e.preventDefault();
    console.log(login)
    const response = await API.userLogin(login)
    if (response.isSuccess) {
      alert("Login successfull")
      sessionStorage.setItem("accessToken", `Bearer ${response.data.accessToken}`);
      sessionStorage.setItem("refreshToken", `Bearer ${response.data.refreshToken}`)

      setAccount({ username: response.data.username, name: response.data.name })
      isUserAuthenticated(true)

      navigate("/")
    }
    else {
      alert("Something Wrong please try again ; ")
    }
  }


  return (
    <div className='w-full flex justify-center items-center mt-[5px]   text-black '>
      <form className='text-black transition-all duration-150 ease-linear rounded-lg shadow outline-none   hover:shadow-lg focus:outline-none px-8 py-1 mt-[20px]'>
        <img src='https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png' alt='Login' className='w-[280px] h-[180px] p-12' />

        {toggle ? <div>
          <div className="relative z-0 w-full mb-5 ">
            <input
              type="text"
              onChange={(e) => onValueChage(e)}
              name="username"
              placeholder="Enter User Name"
              required=""
              className="pt-3 w-full pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="name"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            >

            </label>
          </div>
          <div className="relative z-0 w-full mb-5">
            <input
              type="passward"
              onChange={(e) => onValueChage(e)}
              name="password"
              placeholder="Enter Passward "
              className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            />
            <label
              htmlFor="passward"
              className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
            >

            </label>
          </div>
          <button
            id="button"
            onClick={(e) => loginUser(e)}
            type="button"
            className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
          >
            Login
          </button>
          <p className='text-[25px] text-center'>Or</p>
          <button

            onClick={() => change()}
            id="button"
            type="button"
            class="w-full px-6 py-3 mt-3 mb-3  transition-all duration-150 ease-linear rounded-lg shadow outline-none   hover:shadow-lg focus:outline-none"
          >
            Create An Account
          </button>
        </div>
          :
          <div>


            <div className="relative z-0 w-full mb-5 ">
              <input
                type="text"
                onChange={(e) => signValue(e)}
                name="name"
                placeholder="Enter name"
                required=""
                className="pt-3 w-full pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="name"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >

              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="text"
                onChange={(e) => signValue(e)}
                name="username"
                placeholder=" Enter User Name "
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor=" Enter User Name"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
              </label>
            </div>
            <div className="relative z-0 w-full mb-5">
              <input
                type="passward"
                onChange={(e) => signValue(e)}
                name="password"
                placeholder="Enter Passward "
                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
              />
              <label
                htmlFor="passward"
                className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
              >
              </label>
            </div>
            <button
              onClick={(e) => signupUser(e)}
              id="button"
              type="button"
              class="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
            >
              Sign Up
            </button>
            <p className='text-[25px] text-center'>Or</p>
            <button
              onClick={() => change()}
              id="button"
              type="button"
              class="w-full px-6 py-3 mt-3 mb-3  transition-all duration-150 ease-linear rounded-lg shadow outline-none   hover:shadow-lg focus:outline-none"
            >
              Already have Account
            </button>
          </div>
        }
      </form>

    </div>
  )
}

export default Login;
