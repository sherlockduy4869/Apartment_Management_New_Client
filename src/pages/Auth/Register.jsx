import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const [registerStatus, setRegisterStatus] = useState("")
    const [errorName, setErrorName] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [corlorMessage, setColorMessage] = useState("")

    const register = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append("name", name)
        formData.append("email", email)
        formData.append("password", password)
        formData.append("password_confirmation", passwordConfirm)

        const url_register = "https://api.betterhomes.site/public/api/register"

        axios.post(url_register, formData)
            .then(res => {
                if (!res["data"]["status"]) {
                    setColorMessage("#f43f5e")
                }
                setColorMessage("#22c55e")
                setErrorName("")
                setErrorEmail("")
                setErrorPassword("")
                setRegisterStatus(res["data"]["message"])
            })
            .catch(error => {
                if (error['response']['data']['errors']['name']) {
                    setErrorName(error['response']['data']['errors']['name'][0])
                }
                else {
                    setErrorName("")
                }

                if (error['response']['data']['errors']['email']) {
                    setErrorEmail(error['response']['data']['errors']['email'][0])
                }
                else {
                    setErrorEmail("")
                }

                if (error['response']['data']['errors']['password']) {
                    setErrorPassword(error['response']['data']['errors']['password'][0])
                }
                else {
                    setErrorPassword("")
                }
            })
    }

    return (
        <section className="h-screen">
            <div className="px-6 h-full text-gray-800">
                <div
                    className="flex xl:justify-center lg:justify-between justify-center 
                    items-center flex-wrap h-full g-6">
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 
                        lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Sample image"
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form>

                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t 
                                before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t 
                                after:border-gray-300 after:mt-0.5">
                                <p className="text-center font-semibold mx-4 mb-0">REGISTER</p>
                            </div>

                            <div className="mb-6">
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl 
                                    font-normal text-gray-700 bg-white bg-clip-padding border 
                                    border-solid border-gray-300 rounded transition ease-in-out m-0 
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 
                                    focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Name"
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <div style={{ color: "#f43f5e" }}>
                                    {errorName}
                                </div>
                            </div>

                            <div className="mb-6">
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl 
                                    font-normal text-gray-700 bg-white bg-clip-padding 
                                    border border-solid border-gray-300 rounded transition 
                                    ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                                    focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div style={{ color: "#f43f5e" }}>
                                    {errorEmail}
                                </div>
                            </div>

                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl 
                                    font-normal text-gray-700 bg-white bg-clip-padding 
                                    border border-solid border-gray-300 rounded transition 
                                    ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                                    focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <div style={{ color: "#f43f5e" }}>
                                    {errorPassword}
                                </div>
                            </div>

                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl 
                                    font-normal text-gray-700 bg-white bg-clip-padding 
                                    border border-solid border-gray-300 rounded transition 
                                    ease-in-out m-0 focus:text-gray-700 focus:bg-white 
                                    focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Password Confirmation"
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                />
                            </div>

                            <div className="text-center lg:text-left">
                                <div className='mb-4' style={{ color: corlorMessage }}>
                                    {registerStatus}
                                </div>
                                <button
                                    onClick={register}
                                    type="button"
                                    className="inline-block px-7 py-3 bg-blue-600 text-white 
                                    font-medium text-sm leading-snug uppercase rounded shadow-md 
                                    hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 
                                    focus:shadow-lg focus:outline-none focus:ring-0 
                                    active:bg-blue-800 active:shadow-lg transition duration-150 
                                    ease-in-out"
                                >
                                    Register
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Login Now?
                                    <Link to={'/login'}>
                                        <a
                                            className="text-red-600 hover:text-red-700 
                                            focus:text-red-700 transition duration-200 ease-in-out"
                                        >Login </a>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register