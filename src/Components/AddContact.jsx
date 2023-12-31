import React from "react";

class AddContact extends React.Component{
    state={
        name:"",
        emailid:"",
    };
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" && this.state.emailid === "" )
        {
           alert("All fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",emailid:""})
        console.log(this.state);
    };
        render() {
            return(
                <div className="ui main">
                    <h2>Sign Up</h2>
                    <form className="ui form" onSubmit={this.add}>
                        <div className="field">
                            <label>Name</label>
                            
                            <input type="text" 
                            name="name"
                             placeholder="Name" 
                             value={this.state.name}
                            onChange={(e) => this.setState({name:e.target.value})}/>

                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="text" 
                            name="emailid" 
                            placeholder="Email"
                            value={this.state.emailid}
                            onChange={(e) => this.setState({emailid:e.target.value})}/>
                            
                        </div>
                        
                        <button className="ui button blue">Signup</button>
                    </form>
                </div>

            );
        };

    }
export default AddContact;