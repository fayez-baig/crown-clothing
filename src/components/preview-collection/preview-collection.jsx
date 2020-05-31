import React, { Component } from 'react';
import collectionItem from '../collection-item/collection-item'
import './preview-collection.scss';
import CollectionItem from '../collection-item/collection-item';


const  CollectionPreview = ({title,items}) => (
    <div className="collectionPreview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((item,idx)=> idx < 4)
                .map(({id,...otherprops}) => (
                <CollectionItem key={id} {...otherprops}/>
                )
                )
            }
        </div>
    </div>
    )

    export default CollectionPreview;