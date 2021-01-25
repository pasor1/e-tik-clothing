import React from 'react';
import './Shop.scss';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collectionPreview/CollectionPreview';

class Shop extends React.Component {
  state = {
    collections : SHOP_DATA
  }

  render() {
    return (
      <div className="shopPage">
        {this.state.collections.map(collection => (
          <CollectionPreview key={collection.id} title={collection.title} items={collection.items} routeName={collection.routeName} />
        ))}
      </div>
    )
  }
}

export default Shop;