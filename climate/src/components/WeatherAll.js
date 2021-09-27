import React, { useState,useEffect} from 'react'
import WeatherSingle from './WeatherSingle'
import './combine.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function WeatherAll() {

    const [location, newLocation] = useState('London')
    const [product, setProduct] = useState(null)
    const [temp] = useState([0,1,2,3])

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=07afb128bfbabbd122ec9bad9e6cb4c1`;

    useEffect(() => {
        
        axios.get(url)
            .then(response => {
                setProduct(response.data)
            })
        
    }, [url])
    console.log(product)

    function handleSubmit(event) {

        event.preventDefault();
        newLocation(event.target.loc.value) 
    }
    
    if (product) {
        let theDate = new Date(product.list[0].dt * 1000);
        let dateString = theDate.toGMTString()


        return (
            <>
                <form className = 'form' onSubmit={ handleSubmit}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name = 'loc'/>
                    </div>
                    <button className = 'btn btn-dark' type='submit' >Get_Weather</button>
                </form>
                <div className='cityName'>
                    {product.city.name}
                    <span>({ dateString})</span>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <WeatherSingle
                                location={location}
                                product={product}
                                temp={ temp[0]}
                            />
                        </div>
                        <div className="col">
                            <WeatherSingle
                            location={location}
                                product={product}
                                temp={ temp[1]}
                            />
                        </div>
                        <div className="col">
                            <WeatherSingle
                            location={location}
                                product={product}
                                temp={ temp[2]}
                            />
                        </div>
                        <div className="col">
                            <WeatherSingle
                            location={location}
                                product={product}
                                temp={ temp[3]}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
            
        </>
    )
}

export default WeatherAll
