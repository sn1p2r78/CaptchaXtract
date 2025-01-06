import react, { useState } from 'react';

const UploadPage = () => {
    const [feedback, setFeedback] = useState('');

    const handleUpload = (ev) => {
        setFeedback(event.target.value);
    };

    return (
      <div className="flex flex-col items-center bg-blue-200 h-screen gy-5">
        <h1 className="text-3x text-center text-bold text-transparent mb-2">Upload Your Image</h1>
        <input type="file" className="block w-full mt-4" onChange={(handleUpload)} />
        <p className="text-center text-sm mb-4">Selected File: {feedback}</p>
      </div>
    );
};

export default UploadPage;