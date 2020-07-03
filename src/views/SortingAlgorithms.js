/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

// reactstrap components
import {
  Alert,
  UncontrolledAlert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";

class SortingAlgorithms extends React.Component {

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                <h4 className="text-primary">Sorting Algorithms</h4>
                <blockquote>
                  <p className="blockquote">
                    Sorting algorithms are typically used to transform data in a list or array to a preferred order to be used later.
                    For example, programmers often sort a list to optimize the efficency of other algorithms such as search or merge.
                    We'll go over what each sort looks visually and their respective running times and applications.
                    <br>
                    </br>
                    <br>
                    </br>
                    <ul className="list-inline">
                      <li className="list-inline-item" style={{marginRight: 30}}>Selection</li>
                      <li className="list-inline-item" style={{marginRight: 30}}>Bubble</li>
                      <li className="list-inline-item" style={{marginRight: 30}}>Insertion</li>
                      <li className="list-inline-item" style={{marginRight: 30}}>Merge</li>
                      <li className="list-inline-item" style={{marginRight: 30}}>Quick</li>
                      <li className="list-inline-item" style={{marginRight: 30}}>Heap</li>
                    </ul>
                  </p>
                </blockquote>
                </CardHeader>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default SortingAlgorithms;
