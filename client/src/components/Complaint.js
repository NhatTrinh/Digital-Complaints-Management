import React, {Component} from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput, MDBContainer } from "mdbreact";
export default class Complain extends Component {
  render() {
    console.log(this.props)
    return (
      <MDBContainer>
      <section className="contact-section my-5">
        <MDBRow>
          <MDBCol>
            <div className="md-form mb-0">
              <MDBInput
                type="textarea"
                id="form-contact-message"
                label="Write New Complaint"
                onChange={ this.props.onChange.bind(this) }
                value={ this.props.value }
              />
              <MDBBtn rounded color="blue" onClick={ this.props.onClick }>
                Post Complaint    &nbsp; <MDBIcon icon="paper-plane" />
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
  );
}

  }
