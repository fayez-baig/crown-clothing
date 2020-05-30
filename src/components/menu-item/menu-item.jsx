import React, { Component } from 'react';
import './menu-item.scss'

const MenuItem = ({title, imageUrl, size}) => (
    <div style= {{
        backgroundImage: `url(${imageUrl})`
    }}className={`${size} menu-item`} >
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtitl">SHOP</span>
                </div>
            </div>
);

export default MenuItem;