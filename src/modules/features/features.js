import React from 'react';
import './features.scss';
import { IconContext } from "react-icons";
import { MdLanguage, MdLocationOn, MdVpnKey, MdTrendingUp, MdLock, MdNature } from 'react-icons/md';

const features = () => {
    return (
        <section className="features">
            <div className="feature">
                <IconContext.Provider value={{className: 'feature__icon'}}>
                    <MdLanguage/>
                </IconContext.Provider>
                <h4 className="heading-4 heading-4--dark">World's best luxury homes</h4>
                <p className="feature__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor tincidunt libero vitae porta. 
                                             In quis risus vel mi iaculis malesuada. Nam consequat ac metus non congue.</p>
            </div>

            <div className="feature">
                <IconContext.Provider value={{className: 'feature__icon'}}>
                    <MdNature/>
                </IconContext.Provider>
                <h4 className="heading-4 heading-4--dark">Only the best properties</h4>
                <p className="feature__text">Vivamus euismod faucibus dictum. Nulla pellentesque ante quis quam molestie pulvinar.</p>
            </div>

            <div className="feature">
                <IconContext.Provider value={{className: 'feature__icon'}}>
                    <MdLocationOn/>
                </IconContext.Provider>
                <h4 className="heading-4 heading-4--dark">All homes in in top locations</h4>
                <p className="feature__text">Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.</p>
            </div>

            <div className="feature">
                <IconContext.Provider value={{className: 'feature__icon'}}>
                    <MdVpnKey/>
                </IconContext.Provider>
                <h4 className="heading-4 heading-4--dark">New home in one week</h4>
                <p className="feature__text">Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="feature">
                <IconContext.Provider value={{className: 'feature__icon'}}>
                    <MdTrendingUp/>
                </IconContext.Provider>
                <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
                <p className="feature__text">Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
            </div>

            <div className="feature">
                <IconContext.Provider value={{className: 'feature__icon'}}>
                    <MdLock/>
                </IconContext.Provider>
                <h4 className="heading-4 heading-4--dark">Secure payments on nexter</h4>
                <p className="feature__text">Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.</p>
            </div>
        </section>
    );
}

export default features;