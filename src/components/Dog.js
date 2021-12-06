import "../styles/Dog.css"

const Dog = () => {

    return (
        <>
            <div className="bannerContainer">
                <div className='bannerPositioner'>
                    <div className="bannerTitle whiteLabel">The Dog House</div>
                </div>
                <div className="dogBanner2 mainDogBanner"></div>
                <h2 className="ourStore">Search Our Store</h2>
                <form className="searchLabel">
                    <div className="row">
                        <div className="formContent">
                            <label>Animal</label>
                            <div class="">
                                <select class="selectBoxLarge">
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
                                <select class="selectBoxLarge">
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
                                <select class="selectBoxLarge">
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
                                <select class="selectBoxLarge">
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
                                <select class="selectBoxSml">
                                    <option value="0">Small Breed</option>
                                    <option value="1">Medium Breed</option>
                                    <option value="2">Large Breed</option>
                                </select>
                            </div>
                        </div>
                        <div className="formContent">
                            <label>Product Weight (kgs)</label>
                            <div class="">
                                <select class="selectBoxSml">
                                    <option value="0">All Weights</option>
                                    <option value="1">under 10kg</option>
                                    <option value="2">10kg-19kg</option>
                                    <option value="3">20kg & over</option>
                                </select>
                            </div>
                        </div>
                        <input type="search" placeholder="Go Fetch" className="search" />
                    </div>
                </form>
            </div >
            <div className="sort">
                <div>
                    <label> 1 - 120 of 548 </label>
                    <select style={{ width: "132px" }}>
                        <option value="0">Show 120</option>
                        <option value="1">Show 240</option>
                        <option value="2">Show 360</option>
                    </select>
                </div>
                <select style={{ width: "246px" }}>
                    <option value="0">Sort: Bestsellers</option>
                    <option value="1">Sort: Price (low-high)</option>
                    <option value="2">Sort: Price (high-low)</option>
                </select>
            </div>
        </>
    )
}

export default Dog;