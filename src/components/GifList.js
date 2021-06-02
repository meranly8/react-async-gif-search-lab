import React from 'react' 

const GifList = props => {  
    return (
        <ul>
            {props.gifs.map(gif => (
                <li key={gif.key}><img src={gif.url} alt="gif text" /></li>
            ))}
        </ul>
    )
}

export default GifList