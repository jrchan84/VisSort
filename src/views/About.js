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
import { Card, CardBody, Row, Col, Button, CardDeck } from "reactstrap";

class About extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <div className="typography-line">
                    <h1>
                      VisSort | A DSA Visualizer
                    </h1>
                  </div>
                  <div className="typography-line">
                    <h4 className="text-info">
                      Data structures and algorithms...
                    </h4>
                  </div>
                  <div className="typography-line">
                    <p>
                      ...sigh. Every budding computer scientist eventually comes to face that class. In my journey, it's name was CPSC 221 — your first introduction
                      to the world of confusingly circular, doubly-linked lists and recursive path finding algorithms. Or perhaps, it's that time of the year to start
                      appyling for internships again.
                      Maybe your like me and stumbling through the 708 pages of "Cracking the Coding Interview" just doesn't seem like a good way to pass time.
                      Anyways, welcome to my first react app! I've developed this to help other students and programmers to visualize the confusing DSA topics you come across in
                      a responsive and simple solution. <span className="text-info">Hope this helps!</span>
                    </p>
                  </div>
                  <br>
                  </br>
                  <div className="typography-line">
                    <h4 className="text-info">
                      Included DSA Topics:
                    </h4>
                    <ul className="list-inline">
                      <li className="list-inline-item align-top" style={{marginRight: 30}}>
                        <ul>
                          <li className="text-success">Data Structures</li>
                          <ul>
                            <li>Arrays</li>
                            <li>Linked Lists</li>
                            <li>Stacks</li>
                            <li>Queues</li>
                            <li>Hash Tables</li>
                            <li>Trees</li>
                            <li>Heaps</li>
                            <li>Sets</li>
                            <li>Graphs</li>
                          </ul>
                        </ul>
                      </li>
                      <li className="list-inline-item align-top" style={{marginRight: 30}}>
                        <ul>
                          <li className="text-warning">Tree Traversals</li>
                          <li className="list-unstyled">
                            <ul>
                              <li>BFS</li>
                              <li>DFS</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="list-inline-item align-top" style={{marginRight: 30}}>
                        <ul>
                          <li className="text-primary">Sorting Algorithms</li>
                          <li className="list-unstyled">
                            <ul>
                              <li>Selection Sort</li>
                              <li>Bubble Sort</li>
                              <li>Insertion Sort</li>
                              <li>Merge Sort</li>
                              <li>Quick Sort</li>
                              <li>Heap Sort</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="list-inline-item align-top" style={{marginRight: 30}}>
                        <ul>
                          <li className="text-danger">Path-Finding Algorithms</li>
                          <li className="list-unstyled">
                            <ul>
                              <li>Dijkstra's</li>
                              <li>Prim's</li>
                              <li>A*</li>
                              <li>D*</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <CardDeck>
                <Card>
                  <CardBody>
                    <div className="typography-line">
                      <span>Resources and Licensing</span>
                      <p>
                      This react app was built using <span> <a href="https://www.creative-tim.com/product/black-dashboard-react" target="_blank" rel="noopener noreferrer" className="text-info" >Creative Tim's Black Dashboard - React Template</a> </span> and my own DSA code.
                      <br>
                      </br>
                      <br>
                      </br>
                      You'll find license details in the project folder along with links to original sources.
                      <br>
                      </br>
                      If you have any questions or would like to contribute to this page, visit my site for contact details <span> <a href="https://jrchan.ca/" target="_blank" rel="noopener noreferrer" className="text-info">Jrchan.ca</a> </span>
                      </p>
                      <br>
                      </br>
                    </div>
                    <div className="typography-line">
                      <span>Source Code</span>
                      <p>
                        Head over to my <span> <a href="https://github.com/jrchan84/VisSort" target="_blank" rel="noopener noreferrer" className="text-info">repository</a> </span> if you'd like to play around with the template and code.
                      </p>
                      <ol>
                        <li>Download the zip and export it to your working directory.</li>
                        <li>Open up your command-line and make sure you have recent versions of Node.js and npm installed</li>
                        <li><code> cd #project-path-here# </code></li>
                        <li><code> npm install </code></li>
                        <li><code> npm start </code></li>
                      </ol>
                      <p>
                        A browser window should open and your app will display. Happy Coding!
                      </p>
                    </div>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                  <div className="typography-line" style={{textAlign: "center"}}>
                    <h5 className="text-info">
                      Before you dive in, here's my favourite programming meme :D
                    </h5>
                    <img
                      className="img-fluid"
                      style={{width: "450px"}}
                      alt=""
                      src={require("assets/img/codeMeme.png")}
                    />
                  </div>
                  </CardBody>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default About;
