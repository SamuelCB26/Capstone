import React, { useEffect, useState } from 'react';

const Data = ({ data }) => {
const [colors, setColors] = useState([]);
useEffect(() => {
    setColors(data.result);
}, [data]);

return (
    <div className='ui card'>
    {console.log(colors)}
    <div className='content'>
        <a href='' className='header'>
        {data.name}
        </a>
        <div id="colours">
        {colors &&
            colors.length > 0 &&
            colors.map((color, idx) => (
            <div id="colour" key={idx}>
                {console.log(`rgb(${color[0]},${color[1]},${color[2]})`)}
                <div id="col"
                style={{
                    backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`,
                }}
                >
                </div>
            </div>
            ))}
        </div>
    </div>
    </div>
);
};

export default Data;