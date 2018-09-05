import React, { Component } from 'react';
import $ from 'jquery';
class Contact extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email:'',
      subject: '',
      message:''
    }
  }
  handleMessageSubmit = (event) =>{
    event.preventDefault();
    let name = event.target.elements.name.value;
    let email = event.target.elements.email.value;
    let subject = event.target.elements.subject.value;
    let message = event.target.elements.message.value;
    if(name !="" || email != ""|| subject !="" || message !=""){
      this.setState({name, email,  subject, message}, 
        ()=>{
          $.ajax({
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
              "key": '',
              "message": {
                "from_email": this.state.subject,
                "to": [
                    {
                     'email':"olivermensah96@gmail.com",
                      'name': "Oliver Mensah",
                      'type': 'to'
                    }
                  ],
                'autotext': 'true',
                'subject': this.state.subject,
                'html': this.state.message
              }
            }
           }).done(function(response) {
             console.log(response); // if you're into that sorta thing
           });
        })
    }
   
  }
  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
    }
    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>

            <div className="ten columns">
                  <p className="lead">
                  </p>

            </div>
         </div>
         <div className="row">

            <div className="eight columns">

         <form onSubmit={this.handleMessageSubmit}>
					<fieldset>
              <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text"  size="35" id="contactName" name="name"  required/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text"  size="35" id="contactEmail" name="email"  required/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text"  size="35" id="contactSubject" name="subject"  required/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="message" required></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
                  </fieldset>
                  </form>
       
                 <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                         <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
       
                   </div>
       
       
                   <aside className="four columns footer-widgets">
       
                      <div className="widget widget_contact">
       
                    <h4>Address and Phone</h4>
                    <p className="address">
                      {name}<br />
                      {street} <br />
                      {city}, {state} {zip}<br />
                      <span>{phone}</span>
                    </p>
       
                  </div>
       
       
                   </aside>
             </div>
       
          </section>
           );
         }
       }
       
       export default Contact;
       