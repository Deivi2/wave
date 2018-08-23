import React, {Component} from 'react';
import HomeSlider from './home_slider';
import Promotion from './home_promotions';
import CardBlock from '../utils/card_block';


import {connect} from 'react-redux';
import {getProductsBySell,getProductsByArrival} from "../../actions/product_actions";


class Home extends Component {

    componentDidMount(){
        this.props.dispatch(getProductsBySell()).then(res => {
            // console.log(res)
        });

        this.props.dispatch(getProductsByArrival()).then(res => {
            // console.log(res)
        });
    }


    render() {
        return (
            <div>
                <HomeSlider/>
                <CardBlock list={this.props.products.bySell} title="Best selling guitars"/>
                <Promotion/>
                <CardBlock list={this.props.products.byArrival} title="New Arrivals"/>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        products: state.products
    }
};


export default connect(mapStateToProps)(Home);
