import React, { Component } from 'react';
import json from '../Products.json';

export class Myproduct extends Component {
    constructor(props) {
        super(props);
        this.state = { proData: [], len: 0,  cartItems: [],price:null ,tot:[]};
        this.state.cartItems = (localStorage.getItem('mycart' ))
    }
    componentDidMount() {
        this.setState({ proData: json.Products })
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
                        data.price += data.price;
                        this.setState({total: obj.price})
                        alert("Product Quantity Increased")
                        data.total +=data.price
                        // let tot =[];
                        // tot.push(data.price);   
                        // tot.forEach(data =>{data.total += data.total})  
                        obj.total += obj.total;          
         
                    }
                });
            }
            // if not then just add the product
            else {
                arr.push(obj);
                alert("Product Added to Cart");
               
                obj.total +=obj.price
                // let tot =[];
                // tot.push(obj.price);
                obj.total += obj.total;          

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
            // let tot =[];
            //     tot.push(obj.price);
            //     tot.forEach(data =>{data.total += data.total})           

        }
    }


    render() {
        return (
            <div className="container-fluid">
                <h2 className="text-center text-white">Shopping Website</h2>
                <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                <a class="navbar-brand" href="#">Myntra</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link text-dark" href="#">Home</a>
                        <a class="nav-item nav-link text-dark" href="#">Features</a>
                        <a class="nav-item nav-link text-dark">My Cart
                            <h3 className=" bg-dark rounded text-white">{this.state.len}</h3></a>
                        <a class="nav-item nav-link text-dark " href="#">Contact Us</a>
                    </div>
                </div>
            </nav>

                    <div className="row bg-light">
                        {this.state.proData.map((value, id) =>
                            <div className="col-md-3" key={id}>
                                 <div className="card border">
                                   <div className="card-body">
                                    <img className="card-img-top border" src={value.images} alt="not found" height="300px" />
                                    <h5 className="card-title">{value.pname}</h5>
                                    <span id="fs" class="fa fa-star"></span>
                                    <span id="fs" class="fa fa-star"></span>
                                   
                                    <i id="fs" class="fa fa-star"></i>
                                    <i id="fs" class="fa fa-star"></i>
                                    <div className="card-text">Price: {value.price}<br />
                                    </div><br />
                                    <button className="btn btn-info" onClick={() => this.addCart(value)}>
                                        <i className="fa fa-shopping-cart"></i> Add to Cart</button>
                                        </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div><hr />
                <h2 className="text-center text-white">Cart</h2>
                <div className="row bg-light">
                    {this.state.cartItems != null ? this.state.cartItems.map((value, index) => {
                        console.log(value);
                        return (
                            <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto" key={index}>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <td>Name:</td>
                                                <td>Price:</td>
                                                <td>Quantity</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{value.pname}</td>
                                                <td>{value.price}</td>
                                                <td>{value.quantity}</td>                                                
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="table">
                                        <th>{value.total} </th>
                                    </table>
                            </div>
                        )
                    }

                    ) : ""}
                </div>
            </div>
        )
    }
}

export default Myproduct
