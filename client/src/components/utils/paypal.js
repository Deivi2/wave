import React, {Component} from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Paypal extends Component {


    render() {

        const onSuccess = (payment) => {
          //  console.log(JSON.stringify(payment), 'payment')

            this.props.onSuccess(payment)

        };

        const onCancel = (data) => {
            console.log(JSON.stringify(data), 'data')

        };

        const onError = (Er) => {
            console.log(JSON.stringify(Er), 'error')

        };

        let env = 'sandbox';
        let currency = 'USD';
        let total = this.props.toPay;

        const client = {
            sandbox: 'AW6aRAmdE7-ShnSi_lO8NaIW0g3g69MIZzHGoEVGY8hHU75AlquOZufxYEGQy7vP5kzRPFSvLLYHk9eO',
            production: ''
        };

        return (
            <div>
                <PaypalExpressBtn
                     env={env}
                     client={client}
                     currency={currency}
                     total={total}
                     onError={onError}
                     onSuccess={onSuccess}
                     onCancel={onCancel}
                     style={{
                         size:'large',
                         color:'blue',
                         shape: 'rect',
                         label:'checkout'
                     }}
                />
            </div>
        );
    }
}


export default Paypal;
