import React from "react";
import Logo from "../Images/Logo.jpg";
import Tree from "../Images/Tree.png";
import { Card, Container } from "react-bootstrap";
export default function Main() {
  return (
    <>
      <div className="Main">
        <img src={Logo} alt="Earth Tag Logo" style={{ padding: "50px 0" }} />
        <div className="container col-md-6">
          <strong style={{ fontSize: 25 }}>
            Use our Coupons to get upfront discounts &
            <img
              src={Tree}
              alt=" Tree Logo"
              style={{ height: "23px", margin: " 0 5px" }}
            />
            <img
              src={Tree}
              alt=" Tree Logo"
              style={{ height: "23px", margin: "0 3px" }}
            />
            <img
              src={Tree}
              alt=" Tree Logo"
              style={{ height: "23px", margin: "0 5px" }}
            />
            planted for free
          </strong>
          <Container className="col-md-10">
            <Card
              style={{
                marginTop: "50px",
                borderRadius: "50px",
                backgroundColor: "#c8f3fe",
              }}
            >
              <div className="row">
                <form action="" className="col-md-6">
                  <input
                    type="text"
                    style={{ height: "50px", width: "100px", margin: "3px" }}
                  ></input>
                </form>
                <Card.Body className="col-md-6">
                  <strong style={{ textAlign: "left" }}>
                    10% for you + 10% for
                  </strong>
                  <img
                    src={Tree}
                    alt=" Tree Logo"
                    style={{ height: "20px", margin: "0 5px" }}
                  />
                </Card.Body>
              </div>
            </Card>
          </Container>
          <Container className="col-md-10">
            <Card
              style={{
                marginTop: "20px",
                borderRadius: "50px",
                backgroundColor: "#c8f3fe",
              }}
            >
              <div className="row">
                <form action="" className="col-md-6">
                  <input
                    type="text"
                    style={{ height: "50px", width: "100px", margin: "3px" }}
                  ></input>
                </form>
                <Card.Body className="col-md-6">
                  <strong style={{ textAlign: "left" }}>
                    10% for you + 10% for
                  </strong>
                  <img
                    src={Tree}
                    alt=" Tree Logo"
                    style={{ height: "20px", margin: "0 5px" }}
                  />
                </Card.Body>
              </div>
            </Card>
          </Container>
          <Container className="col-md-10">
            <Card
              style={{
                marginTop: "20px",
                borderRadius: "50px",
                backgroundColor: "#c8f3fe",
              }}
            >
              <div className="row">
                <form action="" className="col-md-6">
                  <input
                    type="text"
                    style={{ height: "50px", width: "100px", margin: "3px" }}
                  ></input>
                </form>
                <Card.Body className="col-md-6">
                  <strong style={{ textAlign: "left" }}>
                    10% for you + 10% for
                  </strong>
                  <img
                    src={Tree}
                    alt=" Tree Logo"
                    style={{ height: "20px", margin: "0 5px" }}
                  />
                </Card.Body>
              </div>
            </Card>
          </Container>
          <Container className="col-md-10">
            <Card
              style={{
                marginTop: "20px",
                borderRadius: "50px",
                backgroundColor: "#c8f3fe",
              }}
            >
              <div className="row">
                <form action="" className="col-md-6">
                  <input
                    type="text"
                    style={{ height: "50px", width: "100px", margin: "3px" }}
                  ></input>
                </form>
                <Card.Body className="col-md-6">
                  <strong style={{ textAlign: "left" }}>
                    10% for you + 10% for
                  </strong>
                  <img
                    src={Tree}
                    alt=" Tree Logo"
                    style={{ height: "20px", margin: "0 5px" }}
                  />
                </Card.Body>
              </div>
            </Card>
          </Container>
          <Container style={{margin:'20px 0 50px 0'}}>
            <button className="btn" >Get notified when we add new brands</button>
          </Container>
          <strong style={{ fontSize: 25, margin:'20px 0'}}>
            Get to Know us 
            </strong>
            <Container className="col-md-10">
            <Card
              style={{
                margin: "40px 0 20px 0",
                borderRadius: "20px",
                backgroundColor: "#fff",
              }}
            >
              <Card.Body style={{textAlign:'left', paddingLeft:'30px'}}>
                Our, Why how and What
              </Card.Body>

            </Card>
          </Container>
            <Container>
            <button className="btn" >Contact Us | Join the ET Communtity</button>
          </Container>  

          
        </div>
      </div>
    </>
  );
}
