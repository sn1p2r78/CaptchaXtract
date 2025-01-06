import react from 'react';

const StartPage = () => {
    return (
      <div className="flex flex-col justify items-center v-height-screen bg-gradient-to-l from-blue-to-indigo px-5">
        <h1 className="text-4x text-white font-bold mb-4">CaptchaXtract</h1>
        <p className="text-lg bg-white bg-opacity-40 p-6 px-4">The Ultimate Image-to-Text Solution for Modern Uses.</p>
        <button className="bg-white text-black font-medium pt-4 px-6">Start Uploading</button>
      </div>
    );
};

export default StartPage;