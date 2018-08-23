import React, {Component} from 'react';
import MyButton from '../utils/button';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTruck from '@fortawesome/fontawesome-free-solid/faTruck';
import faCheck from '@fortawesome/fontawesome-free-solid/faCheck';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';




class ProdNfo extends Component {

    showProdTags = (detail) =>(
            <div className="product_tags">
                {
                    detail.shipping ?
                        <div className="tag">
                            <div><FontAwesomeIcon icon={faTruck}/></div>
                            <div className="tag_text">
                                <div>Free shipping</div>
                                <div>And return</div>
                            </div>
                        </div>
                        :null
                }
                {
                    detail.available ?
                        <div className="tag">
                            <div><FontAwesomeIcon icon={faCheck}/></div>
                            <div className="tag_text">
                                <div>Available</div>
                                <div>in Store</div>
                            </div>
                        </div>
                    :
                        <div className="tag">
                            <div><FontAwesomeIcon icon={faTimes}/></div>
                            <div className="tag_text">
                                <div>Not Available</div>
                                <div>Preorder only</div>
                            </div>
                        </div>
                }
            </div>
    );


    showProdActions = (detail) =>(
        <div className="product_actions">
                <div className="price">$ {detail.price}</div>
                <div className="cart">
                    <MyButton
                        type="add_to_card_link"
                        runAction={()=>{
                           this.props.addToCart(detail._id)
                        }}
                    />
                </div>
        </div>
    );

    showProdSpecifications = (detail) =>(
        <div className="product_specifications">
            <h2>Specifications</h2>
            <div>
                <div className="item">
                 <strong>Frets:</strong> {detail.frets}
                </div>
                <div className="item">
                    <strong>Wood:</strong> {detail.wood.name}
                </div>
            </div>
        </div>
    );

    render() {
        const {detail} = this.props;
        return (
            <div>
                <h1>{detail.brand.name}   {detail.name}</h1>
                <p>
                    {detail.description}
                </p>
                { this.showProdTags(detail) }
                { this.showProdActions(detail)}
                { this.showProdSpecifications(detail)}
            </div>
        );
    }
}



export default ProdNfo;
