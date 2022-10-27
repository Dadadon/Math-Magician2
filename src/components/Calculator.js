import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <Container className="d-grid mt-5 pt-5">
        <Row>
          <Col className="p-0">
            <Button className="mb-0 text-end w-100 border border-white rounded-0" variant="secondary">0</Button>
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <Button variant="secondary" className="w-100 border border-white rounded-0">
              AC
            </Button>
          </Col>
          <Col className="p-0">
            <Button variant="secondary" className="w-100 border border-white rounded-0">
              +/-
            </Button>
          </Col>
          <Col className="p-0">
            <Button variant="secondary" className="w-100 border border-white rounded-0">
              %
            </Button>
          </Col>
          <Col className="p-0">
            <Button variant="warning" className="w-100 border border-white rounded-0">
              /
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <Button variant="secondary" className="w-100 border border-white rounded-0">
              7
            </Button>
          </Col>
          <Col className="p-0">
            <Button variant="secondary" className="w-100 border border-white rounded-0">
              8
            </Button>
          </Col>
          <Col className="p-0">
            <Button variant="secondary" className="w-100 border border-white rounded-0">
              9
            </Button>
          </Col>
          <Col className="p-0">
            <Button variant="warning" className="w-100 border border-white rounded-0">
              *
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <Button variant="secondary" className="w-100 border border-white rounded-0">
              4
            </Button>
          </Col>
          <Col className="p-0">
            <Button variant="secondary" className="w-100 border border-white rounded-0">
              5
            </Button>
          </Col>
          <Col className="p-0">
            <Button variant="secondary" className="w-100 border border-whit rounded-0">
              6
            </Button>
          </Col>
          <Col className="p-0">
            <Button variant="warning" className="w-100 border border-white rounded-0">
              -
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="p-0">
            <Button variant="secondary" className="w-100 border border-white rounded-0">
              1
            </Button>
          </Col>
          <Col className="p-0">
            <Button variant="secondary" className="w-100 border border-white rounded-0">
              2
            </Button>
          </Col>
          <Col className="p-0">
            <Button variant="secondary" className="w-100 border border-white rounded-0">
              7
            </Button>
          </Col>
          <Col className="p-0">
            <Button variant="warning" className="w-100 border border-white rounded-0">
              +
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={6} className="p-0">
            <Button variant="secondary" className="w-100 border border-white rounded-0">
              0
            </Button>
          </Col>
          <Col className="p-0">
            <Button variant="secondary" className="w-100 rounded-0">
              .
            </Button>
          </Col>
          <Col className="p-0">
            <Button variant="warning" className="w-100 rounded-0">
              =
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calculator;
