import React, { Component } from 'react';
import { Tab } from '@headlessui/react'
import {Form,Button} from 'semantic-ui-react';
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FormGroup, Label, Input, FormText } from 'reactstrap';


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
                        text: JSON.stringify(data.vc).slice(0,200),
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
                                    text: JSON.stringify(data.vc).slice(0,200),
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
        
            <div style={{backgroundColor:'#463B6B'}}>
                    <div style={{display:'flex'}}>
                        <img src='https://cdn-clebp.nitrocdn.com/cWNDIHLSkFLqhtZapRjEKdXMJezUGxxk/assets/static/optimized/rev-cd5f479/wp-content/uploads/2020/10/cropped-horizontal-140x46.png'style={{height:'5em',length:'5em',padding:'20px'}}/>
                    </div> 
                    <div style={{padding:'2em', color:'white', fontFamily:'italic'}}>
                    <h1>Dhiway playground</h1>
                        <h3>
                        A verifiable credential (VC) is an open standard for digital credentials.<br></br>
                        This playground was built to enable learning and usage.</h3>
                    </div>  
                <Tab.Group>
                    <Tab.List>
                       <div style={{marginLeft:'29em',marginBottom:'1em'}} >
                        <Tab className={'btn btn-light'} style={{marginLeft:'1em',color:'white',backgroundColor:'#453b66'}}>CERTIFICATE</Tab>
                        <Tab className={'btn btn-light'} style={{marginLeft:'1em',color:'white',backgroundColor:'#453b66'}}>IDENTITY</Tab>
                        </div>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel>
                            <div className='row justify-content-center'>
                                <div className="card col-md-6" style={{backgroundColor:'#453b66'}}>
                                    <div class="card-body">
                                    <div className="container my-5">
                                    <div className="row justify-content-around">
                                      <div className="col-lg-9">
                                        <form onSubmit={this.onSubmit1}>
                                          <div className="row g-3 text-dark">
                                            <div className="col-md-6">
                                              <label className="form-label">Your Name</label>
                                              <input type="text" className="form-control" id="your-name" name="your-name"
                                              value={this.state.name} onChange={event => this.setState({name:event.target.value})} required/>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="form-label">Event Name</label>
                                              <input type="text" className="form-control" id="your-email" name="your-email" 
                                              value={this.state.NameOfTheEvent}
                                              onChange={event => this.setState({eventName:event.target.value})} required/>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="form-label">Certification Name</label>
                                              <input type="text" className="form-control" id="your-surname" name="your-surname" 
                                               value={this.state.certificationName}
                                               onChange={event => this.setState({certificationName:event.target.value})} required/>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="form-label">Certification Id</label>
                                              <input type="text" className="form-control" id="your-subject" name="your-subject"
                                              value={this.state.certificateId}
                                              onChange={event => this.setState({certificateId:event.target.value})} required/>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="form-label">Duration</label>
                                              <input type="text" className="form-control" id="your-subject" name="your-subject"
                                              value={this.state.duration}
                                              onChange={event => this.setState({duration:event.target.value})} required/>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="form-label">Issue Date</label>
                                              <input type="date" className="form-control" id="your-subject" name="your-subject"
                                              value={this.state.issueDate}
                                              onChange={event => this.setState({issueDate:event.target.value})} required/>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="form-label">Start Date</label>
                                              <input type="date" className="form-control" id="your-subject" name="your-subject"
                                              value={this.state.startDate}
                                              onChange={event => this.setState({startDate:event.target.value})} required/>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="form-label">End Date</label>
                                              <input type="date" className="form-control" id="your-subject" name="your-subject"
                                              value={this.state.endDate}
                                              onChange={event => this.setState({endDate:event.target.value})} required/>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="form-label">Email ID</label>
                                              <input type="email" className="form-control" id="your-subject" name="your-subject"
                                              value={this.state.emailId}
                                              onChange={event => this.setState({emailId:event.target.value})} required/>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="form-label">Grade</label>
                                              <input type="text" className="form-control" id="your-subject" name="your-subject"
                                              value={this.state.grade}
                                              onChange={event => this.setState({grade:event.target.value})} required/>
                                            </div>
                                            <div className="col-12">
                                              <div className="row">
                                                <div className="col-md-12">
                                                  <button loading={this.state.loading} className="btn btn-dark w-100 fw-bold bg-dark">Issue</button>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>   
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                        <div className='row justify-content-center'>
                                <div className="card col-md-6" style={{backgroundColor:'#453b66'}}>
                                    <div class="card-body">
                                    <div className="container my-5">
                                    <div className="row justify-content-around">
                                      <div className="col-lg-9">
                                        <form onSubmit={this.onSubmit3}>
                                          <div className="row g-3 text-dark">
                                            <div className="col-md-6">
                                              <label className="form-label">Your Name</label>
                                              <input type="text" className="form-control" id="your-name" name="your-name"
                                              value={this.state.name} onChange={event => this.setState({name:event.target.value})} required/>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="form-label">Gender</label>
                                              <input type="text" className="form-control" id="your-email" name="your-email" 
                                              value={this.state.gender}
                                              onChange={event => this.setState({gender:event.target.value})} required/>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="form-label">Contact Number</label>
                                              <input type="text" className="form-control" id="your-surname" name="your-surname" 
                                               value={this.state.contactNumber}
                                               onChange={event => this.setState({contactNumber:event.target.value})} required/>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="form-label">Pincode</label>
                                              <input type="text" className="form-control" id="your-subject" name="your-subject"
                                              value={this.state.pincode}
                                              onChange={event => this.setState({pincode:event.target.value})} required/>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="form-label">Id</label>
                                              <input type="text" className="form-control" id="your-subject" name="your-subject"
                                              value={this.state.id}
                                              onChange={event => this.setState({id:event.target.value})} required/>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="form-label">Date of Birth</label>
                                              <input type="date" className="form-control" id="your-subject" name="your-subject"
                                              value={this.state.dob}
                                              onChange={event => this.setState({dob:event.target.value})} required/>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="form-label">Email</label>
                                              <input type="email" className="form-control" id="your-subject" name="your-subject"
                                              value={this.state.emailId}
                                              onChange={event => this.setState({emailId:event.target.value})} required/>
                                            </div>
                                            <div className="col-md-6">
                                              <label className="form-label">Address</label>
                                              <input type="text" className="form-control" id="your-subject" name="your-subject"
                                              value={this.state.address}
                                              onChange={event => this.setState({address:event.target.value})} required/>
                                            </div>
                                            <div className="col-md-6">
                                                <br></br>
                                            </div>
                                            <div className="col-12">
                                              <div className="row">
                                                <div className="col-md-12">
                                                  <button loading={this.state.loading} className="btn btn-dark w-100 fw-bold bg-dark">Issue</button>
                                                  <br></br>
                                                  <br></br>
                                                
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </form>
                                      </div>
                                    </div>
                                    </div>
                                    </div>
                                </div>   
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            
            );
    }
}

export default Index;

                                    