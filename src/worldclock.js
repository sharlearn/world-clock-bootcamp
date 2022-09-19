import React from "react";
import Clock from "./Clock.js"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const clockData = [{id: 1, countryName: "America/Anchorage"}, {id: 2, countryName: "America/Los_Angeles"}, {id:3, countryName: "Asia/Bangkok"}, {id: 4, countryName: "Asia/Dubai"}, {id:5, countryName: "Asia/Jakarta"}, {id: 6, countryName:"Asia/Seoul"}, {id: 7, countryName: "Asia/Tokyo"}, {id: 8, countryName: "Australia/Brisbane"}, {id: 9, countryName: "Australia/Adelaide"}, {id: 10, countryName: "Europe/Athens"}, {id: 11, countryName: "Europe/Lisbon"}, {id: 12, countryName: "Asia/Singapore"}]

export function WorldClock(props) {
return (
 <Row>
  <Col>
  <ul type="none">
  {props.clockData.map((clockData) =>
  <li key = {clockData.id}>
    {clockData.countryName}
  </li>
  )
  }
  </ul>
  </Col>
  <Col>
    <ul type="none">
      {props.clockData.map((clockData) =>
      <li key = {clockData.id}><Clock langCode='en-GB' timeZone={clockData.countryName}/></li>)}
    </ul>
  </Col>
</Row>
)
};
