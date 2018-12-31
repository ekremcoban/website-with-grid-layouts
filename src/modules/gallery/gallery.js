import React from 'react';
import './gallery.scss';
import Picture1 from '../../assets/img/gal-1.jpeg';
import Picture2 from '../../assets/img/gal-2.jpeg';

const gallery = () => {
    return (
        <section className="gallery">
            <figure className="gallery__item gallery__item--1">
                <img src={Picture1} alt="Gallery image 1" className="gallery__img"></img>
            </figure>
            <figure className="gallery__item gallery__item--2">
            <img src={Picture2} alt="Gallery image 2" className="gallery__img"></img>
            </figure>
            
        </section>
    );
}

export default gallery;