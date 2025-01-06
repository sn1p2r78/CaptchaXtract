import react, { useState } from 'react';
import api from 'utils/api';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('User');
    const [message, setMessage] = useState('');

    const handleSignup = async () => {
        try {
            const response = await api.post('/signup', {
                email, password, role,
            });
            setMessage("Registration successful!");
        } catch (error) {
            setMessage(error.response.data.message || "Registration failed");
        }
    };

    return (
      <div className="flex flex-col justify shadow-x-lg bg-gray-400 height-screen">
        <h1 className="text-2fl text-center mt-4">SignUp to CaptchaXtract</h1>
        <form className="flex flex-col wi-full max-w100 px-20">
            <input
              type="email"
              className="bg-white text-black mx-2 mx-2 p-2 mb-4 w-full border border-gray-40"
              placeholder="Email"
              value={email}
              onChange={e(setEmail(e.target.value))} />
            <input
              type="password"
              className="bg-white text-black mx-2 mx-2 p-2 mb-4 w-full border border-gray-40"
              placeholder="Password"
              value={password}
              onChange={e(setPassword(e.target.value))} />
            <select
              className="block w-full py-2 mb-4 bg-white text-black border-gray-40"
              onChange={e(setRole(e.target.value))}>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
            <button
              className="bg-blue-300 text-white self-start txt-sm px-4 bg-gray-300"
              onClick={handleSignup}
            >Sign Up</button>
        </form>
        <p className="text-center mt-2">{message}</p>
        <p className="text-center mt-2">Have an account? <a className="text-blue-600 underline">Log in</a></p>
      </div>
    );
};

export default SignupPage;