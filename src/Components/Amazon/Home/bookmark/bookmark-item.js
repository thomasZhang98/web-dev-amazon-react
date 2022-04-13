import React from 'react';
import "./bookmark.css"

const BookmarkListItem = ({
      product = {
        pimg: 'https://m.media-amazon.com/images/I/71CA7BPK3VL._SY879_.jpg',
        company: 'BLK & Bold Specialty Beverages',
        productName: 'BLK & Bold | BLK & Bold Coffee Blend',
        price: "$10.96 ($0.91 / Ounce)",
      }
    }
) => {

  return (

      <li className="list-group-item">
        <div className="row align-items-center">
          <div className="col-xxl-2 col-xl-2 col-md-3">
            <img src={product.pimg} width="48"
                 className="float-start" alt="img"/>
          </div>

          <div className="col-xxl-8 col-xl-7 col-md-6"
               style={{paddingLeft: 2 + 'em'}}>
            <b> {product.productName} </b><br/>
            <div className="wd-font-small"> <b>Sold By:</b> {product.company}</div>
          </div>

          <div className="col-xxl-2 col-xl-3 col-md-3">
            <div className="text-center wd-font-small">
              Price: {product.price}
            </div>
          </div>
        </div>
      </li>
  )
}

export default BookmarkListItem;