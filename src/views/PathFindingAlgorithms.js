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
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class PathFindingAlgorithms extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                <h4 className="text-danger">Path Finding Algorithms</h4>
                <blockquote>
                  <p className="blockquote">
                    Simply put, path finding algorithms finds the shortest route between two points. Specifically, it searches a graph
                    by exporing adjacent vertices until the destination is reached, finding the cheapest route. The examples below are popular
                    "pathfinding" algorithms, but they do differ from our definition in various ways. For example, Prim's algorithm returns a minimum spanning tree.
                    We'll explore them through visualizing how they work, their underlying implementation, and efficiency
                    <br>
                    </br>
                    <br>
                    </br>
                    <ul className="list-inline">
                      <li className="list-inline-item" style={{marginRight: 30}}> <span className="text-danger">Dijkstra's</span> Shortest Path First Algorithm</li>
                      <li className="list-inline-item" style={{marginRight: 30}}><span className="text-danger">Prim's</span> Greedy Algorithm</li>
                      <li className="list-inline-item" style={{marginRight: 30}}><span className="text-danger">A*</span> Path Search Algorithm</li>
                      <li className="list-inline-item" style={{marginRight: 30}}><span className="text-danger">D*</span> Incremental Search Algorithm</li>
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

export default PathFindingAlgorithms;
