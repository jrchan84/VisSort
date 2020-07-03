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


class TreeTraversals extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                <h4 className="text-warning">Tree Traversals</h4>
                <blockquote>
                  <p className="blockquote">
                    Traversals (graph traverals) are used to recursively visit each of the nodes in a tree structure in a particular order.
                    Theres a wide array of reasons why we want to do this. For example, to count the nodes in a tree, search for
                    a given value, detect imbalances, ect. Traversals can be broken down into two main categories: BFS and DFS. Each of them
                    have their different implementations and traversal orders.
                    <br>
                    </br>
                    <br>
                    </br>
                    <ul>
                      <li>Depth-First Search</li>
                      <li className="list-unstyled">
                        <ul>
                          <li>Pre-Order Traversal</li>
                          <li>In-Order Traversal</li>
                          <li>Post-Order Traversal</li>
                        </ul>
                      </li>
                    </ul>
                    <ul>
                      <li>Breadth-First Search</li>
                      <li className="list-unstyled">
                        <ul>
                          <li>Level-Order Traversal</li>
                        </ul>
                      </li>
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

export default TreeTraversals;
