import React from 'react';

const Header = ({title, subtitle}) => {
    return (
        <div className="header">
            <h1 className="header__title">{title}</h1>
            <h5 className="header__subtitle">{subtitle}</h5>
        </div>
    );
}

export default Header;