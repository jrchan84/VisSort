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

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

class DataStructures extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h4 className="text-success">Data Structures</h4>
                  <blockquote>
                    <p className="blockquote">
                      A data structure is a specific way of organizing and storing data
                      so that it can be used efficently in different situations. Each structure
                      has it's benefits and uses, and we'll go over some of the most common ones
                      in terms of:
                      <br>
                      </br>
                      <br>
                      </br>
                      <ul>
                      <li>Implementation</li>
                      <li>Operations</li>
                      <li>Space/Time Complexity</li>
                      <li>Benefits and Downfalls</li>
                      <li>Examples and Alternatives</li>
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

export default DataStructures;
