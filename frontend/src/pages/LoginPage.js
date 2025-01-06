import react, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login attempted');
    };

    return (
      <div className="flex flex-col justify shadow-x-lg bg-gray-300 height-screen">
        <h1 className="text-2fl text-center mt-4">Login to CaptchaXtract</h1>
        <form className="flex flex-col w-full max-w100 px-20">
            <input
              type="email"
              className="bg-white text-black mx-2 my-1 py-2 w-full border border-gray-40 mb-4"
              placeholder="Email"
              value={email}
              onChange={e(setEmail(e.target.value))} />
            <input
              type="password"
              className="bg-white text-black mx-2 mx-2 p-2 mb-4 w-full border border-gray-40"
              placeholder="Password"
              value={password}
              onChange={e(setPassword(e.target.value))} />
            <button
              className="bg-blue-300 text-white self-start txt-sm px-4 bg-gray-300"
              onClick={handleLogin}
            >Login</button>
        </form>
        <p className="text-center mt-2">Iss not user yet? <a className="text-blue-600 underline">Create one.</a></p>
      </div>
    );
};

export default LoginPage;