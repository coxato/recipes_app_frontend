import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// style
import './styles/appLayoutStyle.css';

const AuthLayout = ({ children }) => (
  <React.Fragment>
    <div className="full-center">
      <Container className="d-flex flex-column">
        <Row className="h-100">
          <Col sm="10" md="8" lg="6" className="mx-auto d-table h-100">
            <div className="auth-wrapper-container">
              {children}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>
);

export default AuthLayout;
