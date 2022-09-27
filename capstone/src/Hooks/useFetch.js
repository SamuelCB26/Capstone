import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url) {

const [data, setData] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
    const body = {
model: 'default',
    };

    if (url === null) return;
    (async function () {
    try {
        setLoading(true);

        const res = await axios.post(url, body);
        setData(res.data);
    } catch (error) {
        console.log(error);
        setError(error);
    } finally {
        setLoading(false);
    }
    })();
}, [url]);

return { loading, data, error };
}

export default useFetch;