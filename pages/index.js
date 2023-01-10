import React, { Component } from 'react';
import { Tab } from '@headlessui/react'
import {Form,Button} from 'semantic-ui-react';
import swal from 'sweetalert';



class Index extends Component {
    state = {
        name:'',
        eventName:'',
        certificationName:'',
        certificateId:'',
        duration:'',
        issueDate:'',
        startDate:'',
        endDate:'',
        emailId:'',
        grade:'',
        url:'',
        gender:'',
        contactNumber:'',
        photo:'',
        pincode:'',
        id:'',
        dob:'',
        address:'',
        loading: false
    };
    onSubmit1 = async (event) => {
        event.preventDefault();
        this.setState({loading: true})
        const url = "https://agent.demo.dhiway.com/api/v1/4AhQL5sdzRQNWp4GddRAwrWSiDXh6cypivA4MhPTZsVWymBP/records";
        let payload = {
            "schema": "schema:cord:57kRYJQmXvxJspGahJAdQhe2645QoCMdNpgubPrmyrUFxdzK",
            "title": "Certificate",
            "publish": false,
            "send_email": false,
            "issue_message": "Congratulations!",
            "content": {
                "studentName": this.state.name,
                "eventName":this.state.eventName,
                "certificateName":this.state.certificationName,
                "dertificateId":this.state.certificateId,
                "duration":this.state.duration,
                "issueDate":this.state.issueDate,
                "startDate":this.state.startDate,
                "endDate":this.state.endDate,
                "email":this.state.emailId,
                "grade":this.state.grade
            }
        };
            const response = await fetch(url, {
            credentials: "include",
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
            })
            .then(function(response){ 
                return response.json()})
            .then(function(data){
                if(data.result == "SUCCESS"){
                    swal({
                        title: "SUCCESS!",
                        text: JSON.stringify(data.vc),
                        icon: "success",
                    });
                }
                else
                swal({
                    title: "Failed!",
                    icon: "error",
                });
            })
            this.setState({loading: false});
        }
        onSubmit2 = async (event) => {
            event.preventDefault();
            this.setState({loading: true})
            const url = "https://agent.demo.dhiway.com/api/v1/4AhQL5sdzRQNWp4GddRAwrWSiDXh6cypivA4MhPTZsVWymBP/records";
            let payload = {
                "schema": "schema:cord:57kRYJQmXvxJspGahJAdQhe2645QoCMdNpgubPrmyrUFxdzK",
                "title": "Url",
                "publish": false,
                "send_email": false,
                "issue_message": "Congratulations!",
                "content": {
                    "url": this.state.url,
                }
            };
                const response = await fetch(url, {
                credentials: "include",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
                })
                .then(function(response){ 
                    return response.json()})
                    .then(function(data){
                        if(data.result == "SUCCESS"){
                            swal({
                                title: "SUCCESS!",
                                text: JSON.stringify(data.vc),
                                icon: "success",
                            });
                        }
                        else
                        swal({
                            title: "Failed!",
                            icon: "error",
                        });
                    })
                this.setState({loading: false});
            }
            onSubmit3 = async (event) => {
                event.preventDefault();
                this.setState({loading: true})
                const url = "https://agent.demo.dhiway.com/api/v1/4AhQL5sdzRQNWp4GddRAwrWSiDXh6cypivA4MhPTZsVWymBP/records";
                let payload = {
                    "schema": "schema:cord:57kRYJQmXvxJspGahJAdQhe2645QoCMdNpgubPrmyrUFxdzK",
                    "title": "Identity",
                    "publish": false,
                    "send_email": false,
                    "issue_message": "Congratulations!",
                    "content": {
                        "name": this.state.name,
                        "gender":this.state.gender,
                        "contactNumber":this.state.contactNumber,
                        "photo":this.state.photo,
                        "pincode":this.state.pincode,
                        "id":this.state.id,
                        "dateOfBirth":this.state.dob,
                        "email":this.state.emailId,
                        "address":this.state.address,
                    }
                };
                    const response = await fetch(url, {
                    credentials: "include",
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                    })
                    .then(function(response){ 
                        return response.json()})
                        .then(function(data){
                            if(data.result == "SUCCESS"){
                                swal({
                                    title: "SUCCESS!",
                                    text: JSON.stringify(data.vc),
                                    icon: "success",
                                });
                            }
                            else
                            swal({
                                title: "Failed!",
                                icon: "error",
                            });
                        })
                    this.setState({loading: false});
                }
    render(){
        return (
        <div style={{textAlign:'center', backgroundColor:'#dededc'}}>
                <div style={{backgroundColor:'#0A2F41', color:'white', padding:'30px'}}>
                    <h1 style={{letterSpacing:'2px', margin:'0px'}}>Dhiway playground</h1>
                    <h3 style={{letterSpacing:'0.12rem', margin:'35px'}}>A verifiable credential (VC) is an open standard for digital credentials. <br></br>This playground was built to enable learning and usage.</h3>
                    <img src='../static/dhiway-squarelogo-1664445115275-removebg-preview.png' style={{position: 'absolute', top:35,left:25}}/>
                    <a href="/verify">
                        <Button primary style={{width:'100px', height:'35px', borderRadius:'5px', backgroundColor:'#3399CC', color:'white', position: 'absolute', top:15, right:15, marginBottom:'25px'}}>Go to verify</Button>
                    </a>

                    <div>
                        <h2 style={{letterSpacing:'2px',margin:'20px'}}>Issue a verifiable credential</h2>
                    </div> 
                </div>   
            <Tab.Group>
                <Tab.List style={{margin:'10px'}}>
                    <Tab style={{padding:'12px', letterSpacing:'2px', borderRadius: '5px'}}>CERTIFICATE</Tab>
                    <Tab style={{ margin:'25px',padding:'12px', letterSpacing:'2px',borderRadius: '5px'}}>URL</Tab>
                    <Tab style={{padding:'12px', letterSpacing:'2px',borderRadius: '5px'}}>IDENTITY</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <div>
                            <Form onSubmit={this.onSubmit1}>
                                <Form.Field>
                                    <label style={{fontSize:'1.2rem'}}>Name</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '125px'}}
                                        value={this.state.name}
                                        onChange={event => this.setState({name:event.target.value})}
                                    /><br/>
                                    <label style={{fontSize:'1.2rem'}}>Event name</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '78px'}}
                                        value={this.state.NameOfTheEvent}
                                        onChange={event => this.setState({eventName:event.target.value})}
                                    /><br/>
                                    <label style={{fontSize:'1.2rem'}}>Certification name</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '30px'}}
                                        value={this.state.certificationName}
                                        onChange={event => this.setState({certificationName:event.target.value})}
                                    /><br/>
                                    <label style={{fontSize:'1.2rem'}}>Certificate ID</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '65px'}}
                                        value={this.state.certificateId}
                                        onChange={event => this.setState({certificateId:event.target.value})}
                                    /><br/>
                                    <label style={{fontSize:'1.2rem'}}>Duration</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '100px'}}
                                        value={this.state.duration}
                                        onChange={event => this.setState({duration:event.target.value})}
                                    /><br/>
                                    <label style={{fontSize:'1.2rem'}}>Issue date</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '95px'}}
                                        value={this.state.issueDate}
                                        onChange={event => this.setState({issueDate:event.target.value})}
                                    /><br/>
                                    <label style={{fontSize:'1.2rem'}}>Start date</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '95px'}}
                                        value={this.state.startDate}
                                        onChange={event => this.setState({startDate:event.target.value})}
                                    /><br/>
                                    <label style={{fontSize:'1.2rem'}} >End date</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '100px'}}
                                        value={this.state.endDate}
                                        onChange={event => this.setState({endDate:event.target.value})}
                                    /><br/>
                                    <label style={{fontSize:'1.2rem'}}>Email ID</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '95px'}}
                                        value={this.state.emailId}
                                        onChange={event => this.setState({emailId:event.target.value})}
                                    /><br/>
                                    <label style={{fontSize:'1.2rem'}}>Grade</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '115px'}}
                                        value={this.state.grade}
                                        onChange={event => this.setState({grade:event.target.value})}
                                    /><br/>
                                </Form.Field>
                                <br/>
                                <Button loading={this.state.loading} primary style={{width:'100px', height:'35px', borderRadius:'5px', backgroundColor:'#3399CC', color:'white', marginBottom:'25px'}}>Issue</Button>
                            </Form>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div>
                            <Form onSubmit={this.onSubmit2}>
                                <Form.Field>
                                    <label style={{fontSize:'1.2rem'}}>URL</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '35px'}}
                                        value={this.state.url}
                                        onChange={event => this.setState({url:event.target.value})}
                                    />
                                </Form.Field>
                                <Button loading={this.state.loading} primary style={{width:'100px', height:'35px', borderRadius:'5px', backgroundColor:'#3399CC', color:'white', marginBottom:'25px'}}>Issue</Button>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </Form>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div>
                            <Form onSubmit={this.onSubmit3}>
                                <Form.Field>
                                <label style={{fontSize:'1.2rem'}}>Name</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '95px'}}
                                        value={this.state.name}
                                        onChange={event => this.setState({name:event.target.value})}
                                    /><br/>
                                    <label style={{fontSize:'1.2rem'}}>Gender</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '80px'}}
                                        value={this.state.gender}
                                        onChange={event => this.setState({gender:event.target.value})}
                                    /><br/>
                                    <label style={{fontSize:'1.2rem'}}>Contact number</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '15px'}}
                                        value={this.state.contactNumber}
                                        onChange={event => this.setState({contactNumber:event.target.value})}
                                    /><br/>
                                    <label style={{fontSize:'1.2rem'}}>Pincode</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '75px'}}
                                        value={this.state.pincode}
                                        onChange={event => this.setState({pincode:event.target.value})}
                                    /><br/>
                                    <label style={{fontSize:'1.2rem'}}>Id</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '120px'}}
                                        value={this.state.id}
                                        onChange={event => this.setState({id:event.target.value})}
                                    /><br/>
                                    <label style={{fontSize:'1.2rem'}}>Date of Birth</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '35px'}}
                                        value={this.state.dob}
                                        onChange={event => this.setState({dob:event.target.value})}
                                    /><br/>
                                    <label style={{fontSize:'1.2rem'}}>Email</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '85px'}}
                                        value={this.state.emailId}
                                        onChange={event => this.setState({emailId:event.target.value})}
                                    /><br/>
                                    <label style={{fontSize:'1.2rem'}}>Address</label>
                                    <input
                                        style={{marginTop:'5px', marginBottom:'20px', marginLeft: '65px'}}
                                        value={this.state.address}
                                        onChange={event => this.setState({address:event.target.value})}
                                    /><br/>
                                    <label style={{fontSize:'1.2rem',marginLeft:'-100px',marginRight:'80px'}}>Photo</label>
                                    <input
                                        type='file'
                                        style={{marginTop:'5px', marginBottom:'20px',marginRight:'-170px'}}
                                        value={this.state.photo}
                                        onChange={event => this.setState({photo:event.target.value})}
                                    /><br/>
                                </Form.Field>
                                <br/>
                                <Button loading={this.state.loading} primary style={{width:'100px', height:'35px', borderRadius:'5px', backgroundColor:'#3399CC', color:'white', marginBottom:'25px'}}>Issue</Button>
                            </Form>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>

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

export default Index;