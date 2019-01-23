import React from 'react';

import Option from './Option';

const Options = ({length, listOptions, removeAll, removeOption}) => {
    return (
        <div className="options">
            <div className="options__header">
                <h3 className="options__header__title">{length === 0 ? 'No Option Here..' : 'You are option'}</h3>
                
                <button 
                    className="btn options__header__remove"
                    onClick={removeAll}>Remove All</button>
            </div>
            <div className="option">
                <ul className="list-group">
                    {
                        listOptions.map(option => {
                            return <Option key={option} content={option} deleteOption={() => removeOption(option)} />
                        })
                    }
                </ul>
            </div>
            
        </div>
    );
}

export default Options;