import React from 'react';
import './SubHeader.css';

// my own part 
const SubHeader = () => {
    return (
        <div className=" d-flex flex-wrap align-items-center justify-content-center ">
            <div>
                <h2 id="sologan" className=" fw-bold ">Improve your skills with <br/><span className=" fw-bolder learn-up ">Learn up</span></h2>
            </div>
            <img className="w-50 p-3" src="https://i.ibb.co/g6S9S7C/study.jpg" alt="study" border="0"></img>
            
        </div>
    );
};

export default SubHeader;