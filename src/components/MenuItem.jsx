import React from 'react'
import './MenuItem.sass'


const MenuItem = ({title, imgUrl, size}) => {
    return (
        <div className={`${size} menu-item`} >
            <img className="bg-image" src={`${imgUrl}`}/>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem