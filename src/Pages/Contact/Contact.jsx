import React from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";
import "./contact.scss";
import sideImg from '../../assets/img/sidenav2.jpg'

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact sec-pad">
        <Container>
          <div className="heading_2">CONTACT</div>
          <div className="heading_text">
            <p>
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
          </div>
          <div className="contact-content mt-5">
            <Row>
              <Col md={6}><img src={sideImg} className='sideImg' /></Col>
              <Col md={6}>
                <Card>
                  <CardBody>
                    <Form action="#" className="contact_form" method="post">
                      <FormGroup className="contact_form-field">
                        <Label htmlFor="name" className="contact_form-label">
                          Name
                        </Label>
                        <Input
                          type="text"
                          required
                          placeholder="Enter your name"
                          className="contact_form-input"
                          id="name"
                          name="name"
                        />
                      </FormGroup>
                      <FormGroup className="contact_form-field">
                        <Label htmlFor="email" className="contact_form-label">
                          Email
                        </Label>
                        <Input
                          type="email"
                          required
                          placeholder="Enter your email address"
                          className="contact_form-input"
                          id="email"
                          name="email"
                        />
                      </FormGroup>
                      <FormGroup className="contact_form-field">
                        <Label htmlFor="message" className="contact_form-label">
                          Message
                        </Label>
                        <Input
                          name="message"
                          className="contact_form-input"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Enter your message..."
                        ></Input>
                      </FormGroup>
                      <div className="d-flex justify-content-end">
                        <Button type="submit" className="btn_primary fw-bold">
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contact;
