import React from 'react';

interface HeaderProps {
    title: string;
};

const Header: React.FC<HeaderProps> = (prpos) => {
    return (
        <header>
            <h1>{prpos.title}</h1>
        </header>
    );
}
export default Header;