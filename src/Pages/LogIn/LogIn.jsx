import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import SocialLogIn from "../SocialLogIn/SocialLogIn";


const LogIn = () => {
    const { signInUser } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // navigation systems
    const navigate = useNavigate();
    const from = "/";

    // Password Validation
    const validatePassword = (password) => {
        if (password.length < 6) {
            toast.error('Password must contain at least 6 character');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one uppercase letter');
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error('Password must contain at least one lowercase letter');
            return;
        }
        return true;
    };

    const onSubmit = (data) => {
        const { email, password } = data;
        const passwordValidation = validatePassword(password);

        if (!passwordValidation) {
            return;
        }

        signInUser(email, password)
            .then((result) => {
                navigate(from);
                Swal.fire({
                    title: 'Success!',
                    text: 'Your are login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            })
            .catch((error) => {
                console.error(error);
                toast.error('Failed to create account');
            });
    };


    return (
        <div>
            <section className="bg-white p-0 m-0">
                <div className="flex sm:flex-col lg:flex-row  justify-center min-h-screen">
                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto px-5 lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <h1 className="text-2xl font-semibold tracking-wider text-sky-800 capitalize dark:text-sky-500">LOGO</h1>
                            <h1 className="text-xl font-semibold tracking-wider text-black mt-4">
                                Log In To Your Account</h1>
                            <p className="text-black mt-5 mb-2">
                                Welcome Back! Select a method to log in:
                            </p>
                            <div>
                                <SocialLogIn></SocialLogIn>
                            </div>

                            <div className="flex"><h1 className="mx-auto my-8">Or Continue with Email</h1></div>

                            <form onSubmit={handleSubmit(onSubmit)} className="">

                                <div>
                                    <label className="block text-sm text-black">Email address</label>
                                    <input type="email" name="email" id="email" placeholder="Enter your email" className="block w-full px-5 py-3 mt-2 text-sky-950 placeholder-gray-400 bg-white border rounded-lg focus:outline-none focus:ring focus:ring-opacity-40"  {...register("email", { required: true })}
                                    />
                                    {errors.email && (
                                        <span className="text-red-500">This field is required</span>
                                    )}
                                </div>

                                <div>
                                    <label className="block mt-3 text-sm text-black">Password</label>
                                    <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-sky-950 placeholder-gray-400 bg-white border rounded-lg focus:outline-none focus:ring focus:ring-opacity-40"  {...register("password", { required: true })}
                                    />
                                    <span className="absolute bottom-[360px] lg:bottom-[135px] left-96 lg:left-[580px] text-slate-400" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                    {errors.password && (
                                        <span className="text-red-500">This field is required</span>
                                    )}
                                </div>


                                <div className="flex justify-between">
                                    <div><input type="checkbox" /> <span className="text-black">Remember me</span></div>
                                    <div> <Link className="text-blue-500" to={"#"}>Forgot password?</Link></div>
                                </div>

                                <button className="flex mt-7 items-center  justify-between mx-auto px-14 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-950 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    <span>Log in</span>

                                    <Toaster> </Toaster>
                                </button>
                            </form>
                            <div>
                                <div>
                                    <p className="mt-4 text-center text-black">Don’t Have an Account?
                                        <Link to={"/create-account"} rel="noopener noreferrer" className="underline text-sky-500"> Create Account</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-cover hidden md:block lg:w-3/5 h-screen mt-5 lg:mt-10 mr-0 lg:mr-10 rounded-md" style={{ backgroundImage: "url('https://i.ibb.co/0ZJMzjZ/Rectangle-9593.png')" }}>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default LogIn;