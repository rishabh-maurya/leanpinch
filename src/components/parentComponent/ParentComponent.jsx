import React from 'react';
import './ParentComponent.scss';

const ParentComponent = ({ ChildComponent }) => {
    return (
        <>
            <div className='parentcomponent-container'>
                {ChildComponent}
            </div>
        </>
    )
}

export default ParentComponent;