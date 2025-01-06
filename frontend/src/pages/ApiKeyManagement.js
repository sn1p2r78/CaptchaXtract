import react, { useState, useEffect } from 'react';
import api from 'utils/api';

const ApiKeyManagement = () => {
    const [selectedValidity, setSelectedValidity] = useState('day');
    const [apiKeys, setApiKeys] = useState([]);
    const [message, setMessage] = useState('');

    const handleGenerateKey = async () => {
        try {
            const response = await api.post('/generate-api-key', {
                user_id: 'UserID_example', // Should come from context
                validity: selectedValidity,
            });
            setMessage('Key generated successfully!');
            setApiKeys([], ...apiKeys, response.data);
        } catch (error) {
            setMessage(error.message || 'Failed to generate key');
        }
    };

    const handleDeleteKey = async (keyIndex) => {
        try {
            await api.delete('/delete-api-key', {
                user_id: 'UserID_example',
                api_key: apiKeys[keyIndex].text,
            });
            setApiKeys(apiKeys.slice(key => key !== keyIndex));
            setMessage('Key deleted successfully!');
        } catch (error) {
            setMessage(error.message || 'Failed to delete api-key');
        }
    };

    return (
        <div>
            <h1 className="text-2fl mt-4">API Key Management</h1>
            <div className="flex flex-col gap-2">
                <stelect onChange={(e) => setSelectedValidity(e.target.value)} className="bg-white px-2 py-2">
                    <option value="day">Day</option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                </stelect>
                <button className="bg-blue-md2 text-white px-4 my-4" onClick={handleGenerateKey}>Generate Key</button>
            </div>
            <ul className="mb-4">
                {apiKeys.Map((key, index) => (
                    <li key={index} className="my-2">
                        <p>Key: {key.text}</p>
                        <button className="btn rmt" onClick={() => handleDeleteKey(index)}>
                          Delete
                      </button>
                    </li>
                )}
            </ul>
            <p className="mt-4">{message}</p>
        </div>
    );
};

export default ApiKeyManagement;