import React from 'react';
import {Link} from 'react-router-dom'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShowingBag from '@fortawesome/fontawesome-free-solid/faShoppingBag'



const MyButton = (props) => {

    const buttons = () =>{
       let template = '';
       switch(props.type){
           case "default":
               template =
                   <Link
                       className={!props.altClass ? "link_default" : props.altClass }
                       to={props.linkTo}
                       {...props.addStyles}
                   >
                        {props.title}
                   </Link>;
               break;

           case "bag_link":
               template =
                    <div className="bag_link" onClick={()=> props.runAction()}>
                        <FontAwesomeIcon
                                icon={faShowingBag}
                        />
                    </div>;
               break;


           case "add_to_card_link":
               template =
                    <div className="add_to_cart_link"
                         onClick={()=> props.runAction()}>
                        <FontAwesomeIcon
                            icon={faShowingBag}
                        />
                        Add to cart
                    </div>;
               break;

           default:
               template='';
       }

       return template

    };

    return (
        <div className="my_link">
            {buttons()}
        </div>
    );
};

export default MyButton;