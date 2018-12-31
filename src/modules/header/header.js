import React from 'react';
import './header.scss';
import Picture1 from '../../assets/img/logo.png';
import Picture2 from '../../assets/img/logo-bbc.png';
import Picture3 from '../../assets/img/logo-forbes.png';
import Picture4 from '../../assets/img/logo-techcrunch.png';
import Picture5 from '../../assets/img/logo-bi.png';

const header = () => {
    return (
        <header className="header">
            <img src={Picture1} alt="Nexter logo" class="header__logo"/>
            <h3 class="heading-3">Your own home:</h3>
            <h1 class="heading-1">The ultimate personal freedom</h1>
            <button class="btn header__btn">View our properties</button>
            <div class="header__seenon-text">Seen on</div>
            <div class="header__seenon-logos">
                <img src={Picture2} alt="Seen on logo 1"/>
                <img src={Picture3} alt="Seen on logo 2"/>
                <img src={Picture4} alt="Seen on logo 3"/>
                <img src={Picture5} alt="Seen on logo 4"/>
            </div>
        </header>
    );
}

export default header;