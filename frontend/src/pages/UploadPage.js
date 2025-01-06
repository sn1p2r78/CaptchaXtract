import react, { useState } from 'react';

const UploadPage = () => {
    const [feedback, setFeedback] = useState('');

    const handleUpload = (ev) => {
        setFeedback(event.target.value);
    };

    return (
      <div className="flex flex-col justify space-y v-space-x-app bg-gradient-to-r px-5">
        <h1 className="text-2fl font-bold text-center mt-4">Upload Your Image</h1>
        <input type="file" className="bord-2 border-gray-300 w-full px-5 py-3 bg-white mb-6" onChange={(handleUpload)} />
        <p className="text-sm mb4-2 italics text-center">Selected File: {feedback}</p>
      </div>
    );
};

export default UploadPage;