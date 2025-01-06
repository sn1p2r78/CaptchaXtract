import react, { useState } from 'react';

const UploadPage = () => {
    const [feedback, setFeedback] = useState('');

    const handleUpload = (ev) => {
        setFeedback(event.target.value);
    };

    return (
      <div>
        <h1>Upload Page</h1>
        <input type="file" onChange={(handleUpload)} />
        <p>File Under: {feedback}</p>
      </div>
    );
};

export default UploadPage;