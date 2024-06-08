import React, { useState, useEffect } from 'react';
import './ProgressBar.css'; // Define CSS styles for the progress bar

const ProgressBar = (props) => {
    const [timer, setTimer] = useState(props.secs);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 0.1;
                } else {
                    clearInterval(intervalId);
                    props.timeOver();
                    return 0;
                }
            });
        }, 100);

        return () => clearInterval(intervalId);
    }, [props]);

    const getProgressBarColor = () => {
        if (timer >= props.secs/3*2) {
            return 'green';
        } else if (timer >= props.secs/3*1) {
            return 'amber';
        } else {
            return 'red';
        }
    };

    const progressBarStyle = {
        width: `${(timer / props.secs) * 100}%`,
    };

    const progressBarClassName = `progress-bar ${getProgressBarColor()}`;

    return (
        <div className='progress-bar-wrapper'>
            <div className='timer'><span>{Math.ceil(timer)}</span></div>
            <div className="progress-bar-container">
                <div className={progressBarClassName} style={progressBarStyle}></div>
            </div></div>
    );
};

export default ProgressBar;
