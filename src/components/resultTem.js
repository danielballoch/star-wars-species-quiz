import React from 'react'
import '../App.css';

const resultTem = ({
    Username, 
    Name,
    Language,
    Classification ,
    Designation ,
    Eyes, Hair,
    Height,
    img ,
    reset
}) => (

<div className="result-wrapper">
                <div>
                    <h1>Hey {Username}! </h1>
                    <p>Looks like your a {Name}</p>
                    <img src={img}></img>
                    </div>
                    
                    <div className="resultDiv2">
                            <h2>{Name}</h2>
                            <p>Language: {Language}</p>
                            <p>Classification: {Classification}</p>
                            <p>Designation: {Designation}</p>
                            <p>Eyes: {Eyes}</p>
                            <p>Hair: {Hair}</p>
                            <p>Height: {Height}cm</p>
                            
                            <button onClick={reset}>try again?</button>
                    </div>
                    
                </div>
)

export default resultTem;