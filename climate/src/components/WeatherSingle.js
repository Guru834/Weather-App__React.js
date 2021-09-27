import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'

function WeatherSingle(props) {
    if (props.product) {

        let theDate = new Date(props.product.list[props.temp].dt * 1000);
        let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let dayOfWeek = days[theDate.getDay()]

        //console.log(dayOfWeek + props.product.list[props.temp].dt)

            let tempValueMin = (Math.round((props.product.list[props.temp].main.temp_min) - 273.15) + '℃')
            let tempValueMax = (Math.round((props.product.list[props.temp].main.temp_max) - 273.15) + '℃')
        
        

            return (
                <>
                

                    <div className='container'>
                        <div className='day'>
                            <span>{dayOfWeek} ({ props.product.list[props.temp].dt_txt})</span>
                        </div>
                        <div className='innerImage'>
                            <img src={`http://openweathermap.org/img/wn/${props.product.list[props.temp].weather[0].icon}.png`} alt='img' />
                        </div>
                        <div className='innerDescription'>
                            <div className='innerDInfo'>
                                <span>Min</span>
                                {tempValueMin}
                            </div>
                            <div className='innerDInfo'>
                                <span>Max</span>
                                {tempValueMax}
                            </div>
                        </div>
                    </div>
                </>
            )
        
    }

    return (
        <div>
            <h1></h1>
        </div>
    )
}

export default WeatherSingle
