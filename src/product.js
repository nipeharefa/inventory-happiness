import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { initialproduct } from './actions/product'
import TableListProduct from './components/Product/TableListProduct'
import { List, Map } from 'immutable';


class Product extends React.Component {
	constructor() {
    	super();
  	}
  	componentDidMount(){
  		const self = this
  		axios.get('api/product').then((result) => {
  			const a = List(result.data)
  			self.props.initialproduct(a)
  		})

      console.log(store.getState())
  	}
	render() {
		return (
			<div className="container">
				<div className="listProduct">
					<TableListProduct />
				</div>
			</div>
		)
	}
}

export default connect(state => ({ user: state.product }), { initialproduct })(Product);