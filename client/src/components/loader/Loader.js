import React from 'react'
import './Loader.css'
import WaveAnimation from '../WaveAnimation/WaveAnimation'

function Loader() {
    return (
        <div className="loader d-flex align-items-center">
            <div>
                <WaveAnimation
                    iterationCount={"infinite"}
                    color="#fff"
                    height="100px"
                />
            </div>
        </div>
    )
}

export default Loader
