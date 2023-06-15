import React from "react";
import Logo from "../Images/Logo.jpg";
import Tree from "../Images/Tree.png";
import Image from "../Images/Image_Placeholder.jpg";
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
            <Card className = "col-md-11 mx-auto"  style={{
                marginTop: "50px",
                borderRadius: "50px",
                alignContent:'center',
                backgroundColor: "#c8f3fe",}}
            >
              <Card.Body className="flexbox-container"
              style={{
                Width:'400px',
                display:'flex',
                justifyContent:'space-around'
              }}>
                <strong className="flex-item flex-item1">
                  10% for you + 10% for
                <img
                  src={Tree}
                  alt=" Tree Logo"
                  style={{ height: "20px", margin: "0 5px" }}
                  />
                  </strong>
                <img className="flex-item flex-item2" src={Image} alt="Placeholder" style={{height:'30px'}}/>
              </Card.Body>
            </Card>
            <Card  className = "col-md-11 mx-auto" style={{
                marginTop: "20px",
                borderRadius: "50px",
                backgroundColor: "#c8f3fe",}}
            >
              <Card.Body className="flexbox-container"
              style={{
                Width:'400px',
                display:'flex',
                justifyContent:'space-around'
              }}>
                <strong className="flex-item flex-item1">
                  15% for you + 15% for
                <img
                  src={Tree}
                  alt=" Tree Logo"
                  style={{ height: "20px", margin: "0 5px" }}
                  />
                  </strong>
                <img className="flex-item flex-item2" src={Image} alt="Placeholder" style={{height:'30px'}}/>
              </Card.Body>
            </Card>
            <Card  className = "col-md-11 mx-auto" style={{
                marginTop: "20px",
                borderRadius: "50px",
                backgroundColor: "#c8f3fe",}}
            >
              <Card.Body className="flexbox-container"
              style={{
                Width:'400px',
                display:'flex',
                justifyContent:'space-around'
              }}>
                <strong className="flex-item flex-item1">
                  15% for you + 15% for
                <img
                  src={Tree}
                  alt=" Tree Logo"
                  style={{ height: "20px", margin: "0 5px" }}
                  />
                  </strong>
                <img className="flex-item flex-item2" src={Image} alt="Placeholder" style={{height:'30px'}}/>
              </Card.Body>
            </Card>
            <Card className = "col-md-11 mx-auto" style={{
                marginTop: "20px",
                borderRadius: "50px",
                backgroundColor: "#c8f3fe",}}
            >
              <Card.Body className="flexbox-container"
              style={{
                Width:'400px',
                display:'flex',
                justifyContent:'space-around'
              }}>
                <strong className="flex-item flex-item1">
                  15% for you + 15% for
                <img
                  src={Tree}
                  alt=" Tree Logo"
                  style={{ height: "20px", margin: "0 5px" }}
                  />
                  </strong>
                <img className="flex-item flex-item2" src={Image} alt="Placeholder" style={{height:'30px'}}/>
              </Card.Body>
            </Card>
          <Container style={{ margin: "30px 0 50px 0" }}>
            <button className="btn mx-auto">Get notified when we add new brands</button>
          </Container>
          <strong style={{ fontSize: 25, margin: "20px 0" }}>
            Get to Know us
          </strong>
            <Card
              style={{
                margin: "40px 0 20px 0",
                borderRadius: "20px",
                backgroundColor: "#fff",
              }}
            >
              <Card.Body style={{ textAlign: "left", paddingLeft: "30px" }}>
                Our, Why how and What
              </Card.Body>
            </Card>
          <Container>
            <button className="btn mx-auto">Contact Us | Join the ET Communtity</button>
          </Container>
        </div>
      </div>
    </>
  );
}
