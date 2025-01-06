import react, { useState } from 'react';
import api from 'utils/api';

const AdminPanel = () => {
    const [envS, setEnvs] = useState([]);
    const [message, setMessage] = useState('');

    const loadEnvs = async () => {
        try {
            const response = await api.get('/env-list');
            setEnvs(response.data.envs);
        } catch (error) {
            setMessage(error.message || 'Failed to load environments');
        }
    };

    const updateEnvs = async () => {
        try {
            const updatedEnvs = envs.reduce((acc, val) => ({acc, value: val}));
            await api.patch('/env-update', {
                env: updatedEnvs,
            });
            setMessage('Environment settings updated successfully!');
        } catch (error) {
            setMessage(error.message || 'Failed to update environments');
        }
    };

    return (
        <div className="p-10">
            <h1 className="text-2fl mt-4">Admin Panel</h1>
            <button className="bg-gray-500 text-white border rounded mt-4" onClick={loadEnvs}>
                Load Environment Variables
            </button>
            <ul className="list-disc my-4">
                {envs.map((row, id) => (
                    <li className="mt-4 bg-white p-4" key={id}>
                        <input
                            type="text"
                            value={row.value}
                            onChange={(e) => (row.value = e.target.value)} 
                        />
                        <span className="text-blue">{row.acc} </span>
                        </li>
                ))
            </ul>
            <button className="bg-gray-500 text-white border rounded mt-4" onClick={updateEnvs}>
                Update Environments
            </button>
            <p className="mt-4">{message}</p>
        </div>
    );
};

export default AdminPanel;