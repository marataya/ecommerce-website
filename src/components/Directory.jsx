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
                    id: 1,
                    linkURL: 'hats'
                },
                {
                    title: 'jackets',
                    imgUrl: 'https://picsum.photos/700/700',
                    id: 2,
                    linkURL: ''
                },
                {
                    title: 'sneakers',
                    imgUrl: 'https://picsum.photos/800/800',
                    id: 3,
                    linkURL: ''
                },
                {
                    title: 'womens',
                    imgUrl: 'https://picsum.photos/850/850',
                    size: 'large',
                    id: 4,
                    linkURL: ''
                },
                {
                    title: 'mens',
                    imgUrl: 'https://picsum.photos/900/900',
                    size: 'large',
                    id: 5,
                    linkURL: ''
                },
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({id, ...otherProps}) => (
                        <MenuItem key={id} {...otherProps}/>
                    ))
                }
            </div>
        )
    }
}
