import React from 'react';
//import Rubbish from '../../public/images/rubbish.png';

const Option = ({content, deleteOption}) => <li 
                                className="list-group-item d-flex justify-content-between align-items-center"
                                >{content} 
                                <img onClick={deleteOption} src="../images/rubbish.png" alt="Rubbish"/>
                            </li>

export default Option;