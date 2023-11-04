import React from "react";

import { Col, Container, Row } from "react-bootstrap";

const Auth = ({ children }) => (
  <React.Fragment>
    <div className="d-flex w-100 justify-content-center">
      <Container className="d-flex flex-column">
        <Row className="h-100">
          <Col sm="10" md="8" lg="6" className="mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              {children}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>
);

export default Auth;
