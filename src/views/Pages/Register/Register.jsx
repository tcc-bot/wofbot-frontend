import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { signup } from '../../../_actions/authActions'
import Input from '../../../containers/Components/Input'
import Alerts from '../../../containers/Components/Alerts'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  onSubmit(values) {
    const { signup } = this.props
    signup(values)
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <div className="app flex-row align-items-center">
        <Alerts />
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <h1>Registrar</h1>
                  <p className="text-muted">Crie sua conta</p>
                  <form onSubmit={handleSubmit((v) => this.onSubmit(v))}>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field component={Input} type="nome" name="nome" placeholder="Username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Field component={Input} type="email" name="email" placeholder="Email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field component={Input} type="password" name="password" placeholder="Password" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field component={Input} type="password" name="confirm_password" placeholder="Repetir password" />
                    </InputGroup>
                    <Button type="submit" color="success" block>Cadastrar</Button>
                  </form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Register = reduxForm({ form: 'authForm' })(Register)
const mapDispatchToProps = dispatch => bindActionCreators({ signup }, dispatch)
export default connect(null, mapDispatchToProps)(Register)