import React from 'react';
import './CollectionPreview.scss';
import CollectionItem from '../collectionItem/CollectionItem';

const CollectionPreview = ({title, items}) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {
        items
          .map(item => (
            <CollectionItem
              key={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}/>)
          )
          .slice(0, 4)
      }
    </div>
  </div>
);

export default CollectionPreview;