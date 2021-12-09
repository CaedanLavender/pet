import React, { Component } from 'react'

export default class Filter extends Component {
    constructor() {
        super();
        this.state = {
            Animal: 
        }
    }


    // use Effect here ?? /////////////////

    render() {
        return (
            <div>

            </div>
        )
    }
}


sortProducts(sort){

}



{/* <Filter count= {this.this.state.products.lenth}
Animal= {this,state,Animal}
ProductType= {this.state.ProductType}
sort={this.state.sort}
filterProudcts

</Filter>
 */}

filterProducts = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
        this.setState({ Animal: e.target.value, product: data.products });
    } else {
        this.setState({
            Animal: e.target.value,
            products: data.products.filter(
                (product) => product.availableAnimals.indexOf(e.target.value) >= 0
            )
        })
    }
}


sortProducts = (e) =>{
const sort= e.target.value;
console.log(e.target.value)

    console.log(e.target.value);
}