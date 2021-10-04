import React, { Component } from 'react'
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForName=RegExp(/^[a-zA-Z]{2,100}$/);
const regForAge=RegExp(/^[0-9][0-9]{1}$/);
const regForDob=RegExp(/^(0?[1-9]|1[0-2])\/(0?[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/) ;
const regForMob=RegExp(/^[6-9][0-9]{9}$/);
const regForPan=RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
const regForBg=RegExp(/^(A|B|AB|O)[+-]$/);


export class ApplicationForm extends Component {
    constructor(props){
        super(props);
        this.state={
            uname:null,
            lname:null,
            age:null,
            mob:null,
            email:null,
            remail:null,
            password:null,
            cpassword:null,
            dob:null,
            gender:null,
            address:null,
            city:null,
            state1:null,
            pin:null,
            hobbies:null,
            aadharno:null,
            pan:null,
            bg:null,
            fb:null,
            errors:{
                uname:'',
                lname:'',
                age:'',
                mob:'',
                email:'',
                remail:'',
                pan:'',
                aadharno:'',
                dob:'',
                gender:'',
                password:'',
                cpassword:'',
                address:'',
                city:'',
                state1:'',
                pin:'',
                hobbies:'',
                bg:'',
                fb:''
                
            }
        }
    }
        handler=(event)=>{
            const {name,value}=event.target;
            let errors=this.state.errors;
            switch(name){
                case 'uname':
                        errors.uname=regForName.test(value)?'':'Enter alphabet only';
                        break;
                case 'lname':
                        errors.lname=regForName.test(value)?'':'Enter alphabet only';
                        break;
                case 'age':
                        errors.age=regForAge.test(value)?'':'Enter digit only';
                        break;
                case 'dob':
                        errors.dob=regForDob.test(value)?'':'Enter in DD-MM-YYYY format';
                        break;
                case 'gender':
                        errors.gender=regForAge.test(value)?'':'Enter digit only';
                        break;
                case 'mob':
                         errors.mob=regForMob.test(value)?'':'Enter 10 digit only';
                         break;
                case 'email':
                         errors.email=regForEmail.test(value)?'':'Enter Valid Email include@';
                         break;
                case 'remail':
                         errors.remail=regForEmail.test(value)?'':'Enter Valid Email as Above';
                         break;
                case 'password':
                         errors.password=value.length<8?'Password must me 8 character long':'';
                         break;
                case 'cpassword':
                         errors.cpassword=value.length<8?'Password must me 8 character long':'';
                         break;
                case 'pan':
                        errors.pan=regForPan.test(value)?'Enter Valid Pancard':'';
                        break;
                case 'aadharno':
                        errors.aadharno=value.length<11?'Enter Valid Aadhar No':'';
                        break;
                case 'hobbies':
                         errors.hobbies=value.length<8?'Enter Atleast 2 hobbies':'';
                         break;
                case 'address':
                         errors.address=value.length<15?'Add Proper Address!!':'';
                         break;
                 case 'city':
                         errors.city=value.length<3?'Enter Valid City':'';
                         break;
                 case 'state1':
                        errors.state1=value.length<3?'Enter Valid State':'';
                        break;
                case 'pin':
                         errors.pin=value.length<6?'Enter 6 digit Pincode!':'';
                         break;
                case 'bg':
                         errors.bg=regForBg.test(value)?'Enter Valid Blood grp':'';
                         break;
                case 'fb':
                         errors.fb=value.length<6?'Enter more words':'';
                         break;
                default:
                    
            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
        }
        formSubmit=(event)=>{
           event.preventDefault();
           if(this.validate(this.state.errors))
           {
               alert(" Form Submitted Successfully");
            //    this.setState({
            //     uname:'',
            //     age:'',
            //     mob:'',
            //     email:'',
            //     remail:''
            //     password:'',
            //     cpassword:'',
            //     address:''
            //    })
           }      
           else  {
               alert("Please recheck the form :(");
           }
        }
         validate=(errors)=>{
            let valid=true;
            Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
                if (this.state.password  !== this.state.cpassword ) {
                    valid = false;
                   alert("Passwords does not match!");
                  }
                else if (this.state.email  !== this.state.remail ) {
                    valid = false;
                   alert("Email does not match!");
                  }
                
            return valid;
        }
    render() {
        const {errors}=this.state;
        return (
            <div>                
                 <div className="container">
                 <h1 className="text-center text-white"> Application Form Validation</h1><hr/>
                <table className="container bg-light">
                    <tbody>
                        <th>FIRST NAME :</th>
                        <tr><input type="text" className="form-control" name="uname" onChange={this.handler}/> {errors.uname.length>0 && 
                        <span style={{color:'red'}}>{errors.uname}</span>}<br/></tr>
                        <th>LAST NAME :</th>
                        <tr><input type="text" className="form-control" name="lname" onChange={this.handler}/> {errors.lname.length>0 && 
                        <span style={{color:'red'}}>{errors.lname}</span>}<br/></tr>
                         <th>AGE :</th>
                        <tr><input type="number" className="form-control" name="age" onChange={this.handler}/> {errors.age.length>0 && 
                        <span style={{color:'red'}}>{errors.age}</span>}<br/></tr>
                         <th>EMAIL ID :</th>
                        <tr><input type="text" className="form-control" name="email" onChange={this.handler}/> {errors.email.length>0 && 
                        <span style={{color:'red'}}>{errors.email}</span>}<br/></tr>
                        <th>Re-Type EMAIL ID :</th>
                        <tr><input type="text" className="form-control" name="remail" onChange={this.handler}/> {errors.remail.length>0 && 
                        <span style={{color:'red'}}>{errors.remail}</span>}<br/></tr>
                         <th>MOBILE NO :</th>
                        <tr><input type="number"className="form-control" name="mob" onChange={this.handler}/> {errors.mob.length>0 && 
                        <span style={{color:'red'}}>{errors.mob}</span>}<br/></tr>
                         <th>PASSWORD :</th>
                        <tr><input type="password"className="form-control" name="password" onChange={this.handler}/>
                         {errors.password.length>0 && <span style={{color:'red'}}>{errors.password}</span>}<br/></tr>
                         <th>CONFIRM PASSWORD :</th>
                         <tr><input type="password"className="form-control" name="cpassword" onChange={this.handler}/>
                         {errors.cpassword.length>0 && <span style={{color:'red'}}>{errors.cpassword}</span>}<br/></tr>
                         <th>DATE OF BIRTH :</th>
                         <tr><input type="text"className="form-control" name="dob" onChange={this.handler}/>
                         {errors.dob.length>0 && <span style={{color:'red'}}>{errors.dob}</span>}<br/></tr>
                         <th>GENDER :</th>
                         <tr><input type="text"className="form-control" name="gender" onChange={this.handler}/>
                         {errors.gender.length>0 && <span style={{color:'red'}}>{errors.gender}</span>}<br/></tr>
                         <th>ADDRESS :</th>
                         <tr><input type="text"className="form-control" name="address" onChange={this.handler}/>
                         {errors.address.length>0 && <span style={{color:'red'}}>{errors.address}</span>}<br/></tr>
                         <th>CITY :</th>
                         <tr><input type="text"className="form-control" name="city" onChange={this.handler}/>
                         {errors.city.length>0 && <span style={{color:'red'}}>{errors.city}</span>}<br/></tr>
                         <th>STATE :</th>
                         <tr><input type="text"className="form-control" name="state1" onChange={this.handler}/>
                         {errors.state1.length>0 && <span style={{color:'red'}}>{errors.state1}</span>}<br/></tr>
                         <th>PINCODE :</th>
                         <tr><input type="number"className="form-control" name="pin" onChange={this.handler}/>
                         {errors.pin.length>0 && <span style={{color:'red'}}>{errors.pin}</span>}<br/></tr>
                         <th>PANCARD NO :</th>
                         <tr><input type="text"className="form-control" name="pan" onChange={this.handler}/>
                         {errors.pan.length>0 && <span style={{color:'red'}}>{errors.pan}</span>}<br/></tr>
                         <th>AADHAR NO:</th>
                         <tr><input type="number"className="form-control" name="aadharno" onChange={this.handler}/>
                         {errors.aadharno.length>0 && <span style={{color:'red'}}>{errors.aadharno}</span>}<br/></tr>
                         <th>HOBBIES:</th>
                         <tr><input type="text"className="form-control" name="hobbies" onChange={this.handler}/>
                         {errors.hobbies.length>0 && <span style={{color:'red'}}>{errors.hobbies}</span>}<br/></tr>
                         <th>BLOOD GROUP:</th>
                         <tr><input type="text"className="form-control" name="bg" onChange={this.handler}/>
                         {errors.bg.length>0 && <span style={{color:'red'}}>{errors.bg}</span>}<br/></tr>
                         <th>FEEDBACK:</th>
                         <tr><input type="text"className="form-control" name="fb" onChange={this.handler}/>
                         {errors.fb.length>0 && <span style={{color:'red'}}>{errors.fb}</span>}<br/></tr>
                         
                        <tr><input type="submit" value="Submit" className="form-control btn btn-primary" onClick={this.formSubmit}/></tr>
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default ApplicationForm;
