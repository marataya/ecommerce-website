import React, { Component } from 'react'
import MenuItem from './MenuItem'
import './Directory.sass'

export default class directory extends Component {
    constructor() {
        super()
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imgUrl: 'https://picsum.photos/650/650',
                    id: 1
                },
                {
                    title: 'jackets',
                    imgUrl: 'https://picsum.photos/700/700',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imgUrl: 'https://picsum.photos/800/800',
                    id: 3
                },
                {
                    title: 'womens',
                    imgUrl: 'https://picsum.photos/850/850',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'mens',
                    imgUrl: 'https://picsum.photos/900/900',
                    size: 'large',
                    id: 5
                },
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imgUrl, id, size}) => (
                        <MenuItem key={id} title={title} imgUrl={imgUrl} size={size}/>
                    ))
                }
            </div>
        )
    }
}
