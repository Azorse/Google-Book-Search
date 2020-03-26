import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import "./style.css";


export function ResultList(props) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="md-2">
            <Thumbnail src={props.thumbnail} />
          </Col>
          <Col size="md-10">
            <h3>{props.title}</h3>
            <h5>{props.author}</h5>
            <p>{props.description}</p>
            <button className="btn"><a id="btn" rel="noreferrer noopener" target="_blank" href={props.href}>
              View Book
            </a></button>
            <button className="btn" id="btn" onClick={props.handleSavedBook}>Save Book</button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}