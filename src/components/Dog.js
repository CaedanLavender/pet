import "../styles/Dog.css"
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";

const Dog = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/dogproducts").then((response) => {
            setProducts(response.data)
        })
    }, [])


    return (
        <>
            <div className="bannerContainer">
                <div className='bannerPositioner'>
                    <div className='pageTitle'>The <strong>Dog</strong> House</div>
                </div>
                <img src="/dog.svg" width="100%" className='dogBanner2' />
                <div className="searchLabel">
                    <form >
                        <h2 className="ourStore">Search Our Store</h2>
                        <div className="row">
                            <div className="formContent">
                                <label>Animal</label>
                                <div class="">
                                    <select
                                        // value={this.props.Animal} onChange= {this.props.filterProducts} 
                                        class="selectBoxLarge">
                                        <option value="0">Dog</option>
                                        <option value="1">Cat</option>
                                        <option value="2">Horse</option>
                                        <option value="3">Small Pet</option>
                                        <option value="4">Reptile</option>
                                        <option value="5">Fish</option>
                                        <option value="6">Bird</option>
                                    </select>
                                </div>
                            </div>
                            <div className="formContent">
                                <label>Product</label>
                                <div class="">
                                    <select
                                        //  value={this.props.Product} onChange= {this.props.filterProducts} 
                                        className="selectBoxLarge">
                                        <option value="0">Food</option>
                                        <option value="1">Toys</option>
                                        <option value="2">Grooming</option>
                                        <option value="3">Clean Up</option>
                                        <option value="4">Health & Wellbeing</option>
                                        <option value="5">Pet Homeware </option>
                                        <option value="6">Pet Accessories</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label>Product Type</label>
                                <div class="">
                                    <select
                                        //  value={this.props.ProductType} onChange= {this.props.filterProducts}
                                        className="selectBoxLarge">
                                        <option value="0">Edibles: Dry</option>
                                        <option value="1">Edibles: Frozen</option>
                                        <option value="2">Edibles: Milk</option>
                                        <option value="3">Edibles: Treats</option>
                                        <option value="4">Edibles: Wet</option>
                                        <option value="6">Edibles: Diet</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div div className="row">
                            <div className="formContent">
                                <label>Brand</label>
                                <div class="">
                                    <select className="selectBoxLarge">
                                        <option value="0">Acanca</option>
                                        <option value="1">Addiction</option>
                                        <option value="2">Animals Like Us</option>
                                        <option value="3">Black Hawk</option>
                                        <option value="4">Eukabana</option>
                                        <option value="5">Omega Plus</option>
                                        <option value="6">Pro Plan</option>
                                        <option value="7">Royal Canin</option>
                                    </select>
                                </div>
                            </div>
                            <div className="formContent">
                                <label>Breed</label>
                                <div class="">
                                    <select
                                        // value={this.props.Breed} onChange={this.props.sortProducts}  
                                        className="selectBoxLarge">
                                        <option value="0">Small Breed</option>
                                        <option value="1">Medium Breed</option>
                                        <option value="2">Large Breed</option>
                                    </select>
                                </div>
                            </div>
                            <aside id='goFetch'>
                                <input type="search" placeholder="Go Fetch" className="search" />
                            </aside>
                        </div>
                    </form>
                </div>
                <div className="show">
                    <div>
                        <label> 1 - 120 of 548 </label>
                        <select >
                            <option value="0">Show 120</option>
                            <option value="1">Show 240</option>
                            <option value="2">Show 360</option>
                        </select>
                    </div>

                    <select className="sort" style={{ width: "246px" }}>
                        <option value="0">Sort: Bestsellers</option>
                        <option value="1">Sort: Price (low-high)</option>
                        <option value="2">Sort: Price (high-low)</option>
                    </select>
                </div>
                <div className="productsDiv">
                    {products.map((products) => {
                        return (
                            // <div className="dogproductPic">
                            <div className="productCard1">

                                <img src={"/" + products.img} />
                                <p1> {products.Product} </p1>
                                <p2> {products.Brand}</p2>
                                <div className="price">
                                    <p3> {products.Price}</p3>
                                    <p4> {products.SalePrice}</p4>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
                <div className="show">
                    <div>
                        <label> 1 - 120 of 548 </label>
                        <select >
                            <option value="0">Show 120</option>
                            <option value="1">Show 240</option>
                            <option value="2">Show 360</option>
                        </select>
                    </div>
                    <p5>Page 1 of 6</p5>
                    </div>
            </div>
        </>
    )
}

export default Dog;