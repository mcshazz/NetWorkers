import React from "react"
import Menurender from './Menurender'
import {
  FormGroup,
  Label,
  Input,
} from "reactstrap";


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            status: "Sign up as a ..."
        }
        this.chooseWorker = this.chooseWorker.bind(this)
        this.chooseCustomer = this.chooseCustomer.bind(this)
        
        
    }
    
    
    chooseWorker() {
        this.setState({ status: "Worker" })

    }
    
    chooseCustomer() {
        this.setState({ status: "Customer" })
    }
    
    
    
    render() {
        return (
<React.Fragment>
            <div className = "quickLogin" style={{fontFamily:'Georgia', color: '#2e4c63'}}>
            Already have an account? Log in here  <br/><br/>
                <div className="form-row">

          <FormGroup className="col-sm-6">
            <Label for="inputEmail4">Email</Label>
            <Input type="email"  id="inputEmail4" placeholder="Email"/>
          </FormGroup>
          <FormGroup className="col-sm-6">
            <Label for="inputPassword4">Password</Label>
            <Input type="password"  id="inputPassword4" placeholder="Password" autoComplete="off"/>
          </FormGroup>
        </div>


             </div>

            <div className = "chooseLogIn" style={{fontFamily:'Georgia', color: '#2e4c63'}}>
            
                 <h2>{this.state.status}</h2>
                
                
                <button className="buttstyle" onClick={this.chooseWorker}> Worker </button>
                <button className="buttstyle" onClick={this.chooseCustomer}> Customer </button>
                
                <Menurender menu={this.state.status} />
                
            </div>
            </React.Fragment>
        )
    }
}

export default Login