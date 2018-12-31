import React from 'react';
import './homes.scss';
import { IconContext } from "react-icons";
import { MdFavoriteBorder, MdLocationOn, MdPermIdentity, MdOpenInNew, MdVpnKey } from 'react-icons/md';
import Picture1 from '../../assets/img/house-1.jpeg';
import Picture2 from '../../assets/img/house-2.jpeg';
import Picture3 from '../../assets/img/house-3.jpeg';
import Picture4 from '../../assets/img/house-4.jpeg';
import Picture5 from '../../assets/img/house-5.jpeg';
import Picture6 from '../../assets/img/house-6.jpeg';

const homes = () => {
    return (
        <section className="homes">
            <div className="home">
                <img src={Picture1} alt="House 1" className="home__img"></img>
                <IconContext.Provider value={{ className: 'home__like' }}>
                    <MdFavoriteBorder />
                </IconContext.Provider>
                <h5 className="home__name">Beautiful Familiy House</h5>
                <div className="home__location">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdLocationOn />
                    </IconContext.Provider>
                    <p>USA</p>
                </div>
                <div className="home__rooms">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdPermIdentity />
                    </IconContext.Provider>
                    <p>5 rooms</p>
                </div>
                <div className="home__area">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdOpenInNew />
                    </IconContext.Provider>
                    <p>325 m<sup>2</sup></p>
                </div>
                <div className="home__price">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdVpnKey />
                    </IconContext.Provider>
                    <p>$1.200.000</p>
                </div>
                <button className="btn home__btn">Contact realtor</button>
            </div>
            
            <div className="home">
                <img src={Picture2} alt="House 2" className="home__img"></img>
                <IconContext.Provider value={{ className: 'home__like' }}>
                    <MdFavoriteBorder />
                </IconContext.Provider>
                <h5 className="home__name">Modern Glass Villa</h5>
                <div className="home__location">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdLocationOn />
                    </IconContext.Provider>
                    <p>Canada</p>
                </div>
                <div className="home__rooms">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdPermIdentity />
                    </IconContext.Provider>
                    <p>6 rooms</p>
                </div>
                <div className="home__area">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdOpenInNew />
                    </IconContext.Provider>
                    <p>450 m<sup>2</sup></p>
                </div>
                <div className="home__price">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdVpnKey />
                    </IconContext.Provider>
                    <p>$2.750.000</p>
                </div>
                <button className="btn home__btn">Contact realtor</button>
            </div>

            <div className="home">
                <img src={Picture3} alt="House 3" className="home__img"></img>
                <IconContext.Provider value={{ className: 'home__like' }}>
                    <MdFavoriteBorder />
                </IconContext.Provider>
                <h5 className="home__name">Cozy Country House</h5>
                <div className="home__location">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdLocationOn />
                    </IconContext.Provider>
                    <p>UK</p>
                </div>
                <div className="home__rooms">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdPermIdentity />
                    </IconContext.Provider>
                    <p>4 rooms</p>
                </div>
                <div className="home__area">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdOpenInNew />
                    </IconContext.Provider>
                    <p>250 m<sup>2</sup></p>
                </div>
                <div className="home__price">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdVpnKey />
                    </IconContext.Provider>
                    <p>$850.000</p>
                </div>
                <button className="btn home__btn">Contact realtor</button>
            </div>

            <div className="home">
                <img src={Picture4} alt="House 4" className="home__img"></img>
                <IconContext.Provider value={{ className: 'home__like' }}>
                    <MdFavoriteBorder />
                </IconContext.Provider>
                <h5 className="home__name">Large Rustical Villa</h5>
                <div className="home__location">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdLocationOn />
                    </IconContext.Provider>
                    <p>Portugal</p>
                </div>
                <div className="home__rooms">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdPermIdentity />
                    </IconContext.Provider>
                    <p>6 rooms</p>
                </div>
                <div className="home__area">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdOpenInNew />
                    </IconContext.Provider>
                    <p>480 m<sup>2</sup></p>
                </div>
                <div className="home__price">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdVpnKey />
                    </IconContext.Provider>
                    <p>$1.950.000</p>
                </div>
                <button className="btn home__btn">Contact realtor</button>
            </div>

            <div className="home">
                <img src={Picture5} alt="House 5" className="home__img"></img>
                <IconContext.Provider value={{ className: 'home__like' }}>
                    <MdFavoriteBorder />
                </IconContext.Provider>
                <h5 className="home__name">Magestic Palace House</h5>
                <div className="home__location">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdLocationOn />
                    </IconContext.Provider>
                    <p>Germany</p>
                </div>
                <div className="home__rooms">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdPermIdentity />
                    </IconContext.Provider>
                    <p>18 rooms</p>
                </div>
                <div className="home__area">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdOpenInNew />
                    </IconContext.Provider>
                    <p>4230 m<sup>2</sup></p>
                </div>
                <div className="home__price">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdVpnKey />
                    </IconContext.Provider>
                    <p>$9.500.000</p>
                </div>
                <button className="btn home__btn">Contact realtor</button>
            </div>

            <div className="home">
                <img src={Picture6} alt="House 6" className="home__img"></img>
                <IconContext.Provider value={{ className: 'home__like' }}>
                    <MdFavoriteBorder />
                </IconContext.Provider>
                <h5 className="home__name">Modern Familiy Apartment</h5>
                <div className="home__location">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdLocationOn />
                    </IconContext.Provider>
                    <p>Italy</p>
                </div>
                <div className="home__rooms">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdPermIdentity />
                    </IconContext.Provider>
                    <p>3 rooms</p>
                </div>
                <div className="home__area">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdOpenInNew />
                    </IconContext.Provider>
                    <p>180 m<sup>2</sup></p>
                </div>
                <div className="home__price">
                    <IconContext.Provider value={{ className: 'home__icon' }}>
                        <MdVpnKey />
                    </IconContext.Provider>
                    <p>$600.000</p>
                </div>
                <button className="btn home__btn">Contact realtor</button>
            </div>
        </section>
    );
}

export default homes;