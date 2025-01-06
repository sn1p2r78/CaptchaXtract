import react from 'react';

const ApiDocs = () => {
    return (
        <div className="p-10">
            <h1 className="text-center text-4fl bold">API Documentation</h1>
            <p>Here are some examples to use our services using the generated api-key</p>
            <div className="bg-gray-200 py-10 mb-10 prounded shadow mt-6">
                <h2 className="text-lg bc-1">Endpoints</h2>
                <ul className="list-disc leading-tight">
                    <li><strong>GEN_EXTRACT_DETAILS</strong>
                        <broker />
                        Curl: http://localhost:8000/extract, Token: <api-key> for authentication and sevenity grants,
                        interface controlls with commands corresponding to the detelof examples.</li>
                  </ul>
                <b>Testing Stage test users both integration and for security and suicace, Thus instructions provided with fastPAI/spec.! link to references are ensured to promote simple resolution with examples, work flow ordering.</b>
            </div>
        </div>
    );
};

export default ApiDocs;