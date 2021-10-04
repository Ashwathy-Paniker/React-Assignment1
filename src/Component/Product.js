import React, {Component } from 'react';
import json from '../Products.json';

export class Product extends Component {
    constructor(props) {
        super(props);
        this.state = { proData: [], len: 0, quant: 1, cartItems: [] };
        this.state.cartItems = (localStorage.getItem('mycart'))
    }
    componentDidMount() {
        this.setState({ proData: json.Products})
    }
    addCart = (obj) => {
        window.onbeforeunload = function (e) { localStorage.clear(); };

        if (localStorage.getItem('mycart') != undefined) {
            const arr = JSON.parse(localStorage.getItem('mycart'));

            let idArrays = [];
            // Get list of all ids
            arr.forEach(data => {
                idArrays.push(data.id);
            });

            // check if the product is present
            if (idArrays.includes(obj.id)) {
                arr.forEach(data => {
                    if (data.id === obj.id) {
                        data.quantity += 1;
                        alert("Product Quantity Increased")
                    }
                });
            }
            // if not then just add the product
            else {
                arr.push(obj);
                alert("Product Added to Cart");
            }

            console.log(arr);
            localStorage.setItem('mycart', JSON.stringify(arr));
            this.setState({ len: this.state.len + 1 })
            this.state.cartItems = arr;
        }
        else {
            const arr = [];
            arr.push(obj);
            localStorage.setItem('mycart', JSON.stringify(arr));
            alert("Product Added to Cart");
            this.setState({ len: this.state.len + 1 })
            this.state.cartItems = arr;
        }
    }


    render() {
        return (
            <div className="container ">
                
                
                    <nav class="navbar navbar-expand-lg navbar-light ">
                                <a class="navbar-brand text-dark text-uppercase" href="#" >Product</a>
                                
                                <div class="collapse navbar-collapse text-justify form-inline " id="navbarText">
                                <ul class="navbar-nav mr-auto text-uppercase">
                                    <li class="nav-item active">
                                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#">Features</a>
                                    </li>
                                    <li class="nav-item">
                                    <button className="btn btn-light" >Cart <span className="text-danger">({this.state.len})</span></button>
                                    </li>
                                </ul>
                        
                        </div>
                        </nav>

                    <div className="row container bg-light">
                        {this.state.proData.map((value, id) =>
                            <div className="col-lg-3 col-md-3 col-sm-12 col-10 d-block m-auto" key={id}>
                                <div className="card">
                                <img src={value.images} alt="not found" height="250px" />
                                   <div className="card-body text-uppercase text-center">
                                
                                    <p className="card-title">
                                    
                                        {value.id}<br/>
                                        {value.pname}<br/>
                                        Price:{value.price}<br />
                                       
                                      Quantity:{value.quantity}<br />
                                       
                                    </p><br />
                                    <button className="btn btn-light" onClick={() => this.addCart(value)}>
                                        <i className="fa-solid fa-cart-shopping"></i>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                <hr />
                <h2 className="text-center display-4 text-uppercase">Cart</h2>
                <div className="row">
                    {/* <Cart displayCart={this.displayCart()}/> */}

                    {this.state.cartItems != null ? this.state.cartItems.map((value, index) => {

                        console.log(value);
                        return (
                            <div className="col-lg-3 col-md-3 col-sm-12 col-10 d-block m-auto bg-light" key={index}>
                                {/* <div className="card  text-uppercase">
                                    <img src={value.images} alt="not found" height="200px" />
                                   
                                    <p className="card-text text-center">
                                     {value.title}   <br/>
                                        {value.id}<br/>
                                        {value.title}<br/>
                                        Price:{value.price}<br />
                                        type:{value.type}<br />
                                        Quantity:{value.Quantity}<br />
                                       Rating{value.rating}<br />
                                    </p><br />
                                    

                                </div> */}
                                
                                <div className="card  text-uppercase">
                                  
                                    <table className="table">
                                    <tr>
                                        <td>Product Name</td> <td> {value.pname}  </td>
                                    </tr>
                                    <tr>
                                        <td>Product Price</td> <td>{value.price}</td>
                                    </tr>
                                    <tr>
                                        <td> Product Quantity</td> <td>{value.quantity}</td>
                                    </tr>
                                    
                                </table>
                                </div>
                            </div>
                        )
                    }

                    ) : ""}
                </div>
            </div>
        )
    }
}

export default Product