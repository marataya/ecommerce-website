import React from 'react'
import './PreviewCollection.sass'
import CollectionItem from './CollectionItem'

const PreviewCollection = ({ title, items }) => {
    return (
        <div className='preview-collection' >
            <h1 className='title'>Title</h1>
            <div className='preview'>
                {items.filter((item, idx) => idx < 4).map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))}
            </div>
        </div>
    )
}

export default PreviewCollection