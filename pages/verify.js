import React, { Component } from 'react';
import {Form,Button,Input,TextArea} from 'semantic-ui-react';
import swal from 'sweetalert';

class Verify extends Component {
    state = {
        vc:'',
    };
    
    onClick = (event) => {
        event.preventDefault();
        const url = "https://agent.demo.dhiway.com/api/v1/verify";
        try{
            let vcCheck ={
                "vc": JSON.parse(this.state.vc)
            }
            const response = fetch(url, {
            credentials: "include",
            method:  'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(vcCheck),
            })
            .then(function(response){ 
                return response.json()})
            .then(function(data){
                let count = 0;
                if(data.signature.verified == true)
                    count++;
                if(data.stream.verified == true)
                    count++;
                if(data.digest.verified == true)
                    count++;
                if(count ==3 ){
                    swal({
                        title: "Verified!",
                        text: "This credential has been verified",
                        icon: "success",
                    });
                }
                else{
                    swal({
                        title: "Not verified!",
                        text: "This credential has not been verified",
                        icon: "error",
                    });
                }

            })
        }
        catch(error){
            alert("Please make sure that you enter the VC in the correct format");
        }
        

    }
    render(){
        return(
            <div style={{textAlign:'center', backgroundColor:'#dededc'}}>
                <div style={{backgroundColor:'#0A2F41', color:'white', padding:'30px'}}>
                    <h1 style={{letterSpacing:'2px', margin:'0px'}}>Dhiway playground</h1>
                    <img src='../static/dhiway-squarelogo-1664445115275-removebg-preview.png' style={{position: 'absolute', top:35,left:25}}/>
                    <h3 style={{letterSpacing:'0.12rem', margin:'35px'}}>A verifiable credential (VC) is an open standard for digital credentials. <br></br>This playground was built to enable learning and usage.</h3>
                    <a href="/">
                    <Button primary style={{width:'100px', height:'35px', borderRadius:'5px', backgroundColor:'#3399CC', color:'white', position: 'absolute', top:15, right:15, marginBottom:'25px'}}>Go to issue</Button>
                    </a>
                    <div>
                        <h2 style={{letterSpacing:'2px',margin:'20px'}}>Verify Credential</h2>
                    </div> 
                </div>
                <div>
                    <h1 style={{fontSize:'1.2rem'}}>Enter the credential</h1><br/>
                </div>
                <div>
                    <Form onSubmit={this.onClick}>
                        <Form.Field>
                            <textarea
                                style={{width: "30cm", height: "8cm"}}
                                value={this.state.vc}
                                onChange={event => this.setState({vc:event.target.value})}
                            />
                        </Form.Field>
                        <br/>
                        <Button primary style={{width:'100px', height:'35px', borderRadius:'5px', backgroundColor:'#3399CC', color:'white', marginBottom:'25px'}}>Verify</Button>
                    </Form>
                </div>
                <div style={{backgroundColor:'#0A2F41', height:'90px', padding:'40px'}}>
                    <footer>
                        <h2 style={{color:'white'}}>Dhayway playground</h2>
                        <p style={{color:'white'}}>Copyright &copy; 2019 All Rights Reserved.</p>
                    </footer>
                </div>
            </div>
            
        );
    }
}

export default Verify;