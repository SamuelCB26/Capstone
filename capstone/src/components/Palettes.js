import React from 'react';
import useFetch from '../Hooks/useFetch';
import Loading from './Loading';
import Error from './Error';
import Data from './Data';

const Palettes = () => {
console.log(process.env);
const url = `/api/`;

const { loading, data, error } = useFetch(url);

return (
    <div id="colour-card">
    {loading && <Loading />}
    {error && <Error message={error.message} />}
    {data && loading === false && error === null && <Data data={data} />}
    </div>
);
};

export default Palettes;