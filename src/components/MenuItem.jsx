import React from 'react'
import './MenuItem.sass'
import { withRouter } from 'react-router-dom'

const MenuItem = ({title, imgUrl, size, history, linkURL, match}) => {
    return (
        <div className={`${size !== undefined ? size+' ' : ''}menu-item`} onClick={() => history.push(`${match.url}${linkURL}`)}>
            <img className="bg-image" src={`${imgUrl}`} alt='some img'/>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)