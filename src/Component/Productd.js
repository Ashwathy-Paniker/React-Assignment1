import { Component } from "react";
import json from '../Products.json';

class Productd extends Component {
    constructor(props) {
        super(props)
        this.state = {
            proData: [],
            pid: 0,
            cartItems:[]
        };
        this.state.cartItems =(localStorage.getItem('mycart'))
    }

componentDidMount() {
    this.setState({ proData: json.Product })
    this.setState({})
}

addcart = (id, pname, price) => {
    if (sessionStorage.getItem('mycart') != undefined) {
        let arr = JSON.parse(sessionStorage.getItem('mycart'));
        arr.push(id, pname, price)
        sessionStorage.setItem('mycart', JSON.stringify(arr));
        alert("Product Added to cart")
        this.setState({ pid: this.state.pid + 1 });
        // this.setState({ id: this.state.id, pname: this.state.pname, price: this.state.price });
        this.state.cartItems=arr;
        alert("cart function called!")
    }

    else {
        let arr = [];
        arr.push(id, pname, price);
        sessionStorage.setItem('mycart', JSON.stringify(arr));
        alert("Product Added to cart");
        this.setState({ pid: this.state.pid + 1 });
        // this.setState({ id: this.state.id, pname: this.state.pname, price: this.state.price });
        // let arr1 = JSON.parse(sessionStorage.getItem('mycart'));
        // arr1.push(id, pname, price)
        this.state.cartItems=arr;

    }
}


render() {
    return (
        <div >
            <h1 className="text-center text-white">Shopping Site</h1>
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
                            <h3 className=" bg-dark rounded text-white">{this.state.pid}</h3></a>

                        <a class="nav-item nav-link text-dark " href="#">Contact Us</a>
                    </div>
                </div>
            </nav>

            <div className=" row bg-light ">
                {json.Products.map(data =>
                    <div className="col-md-3">
                        <div className="card border">
                            <div className="card-body">
                                <img className="card-img-top border" height="200px" src={`${data.images}`} />
                                <h1 className="card-title">{data.pname}</h1>
                                <h4 className="card-text">id:{data.id}</h4>
                                <h4 className="card-text text-danger">{data.price}</h4>
                                <i id="fs" class="fa fa-star"></i>
                                <i id="fs" class="fa fa-star"></i>
                                <i id="fs" class="fa fa-star"></i>
                                <i id="fs" class="fa fa-star"></i><br />
                                Remaining:<h4 className="card-text">{data.quantity}</h4>
                                {/* <button onClick={this.addcart(data.id)} className="btn btn-primary">Add to Cart</button> */}
                                <a href="#" class="btn btn-primary" onClick={() => this.addcart(data.id, data.pname, data.price)}>Add to cart</a>
                            </div>

                        </div>

                    </div>
                )}
                <div>

                </div>
            </div>
            <h2 className="text-center">Cart</h2>
                <div className="row">
                    
                {this.state.cartItems!=null ? this.state.cartItems.map((value,id)=>{
                    
                    console.log(value);
                    return(
                        <div className="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto" key={id}>
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
export default Productd;