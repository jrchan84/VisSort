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
import { Card, CardHeader, CardBody, CardFooter, Row, Col, Button, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, CardDeck, CardText } from "reactstrap";
import { chartExample3 } from "variables/charts.js";
import { Bar } from "react-chartjs-2";

class DataStructures extends React.Component {

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <Row>
                    <Col>
                      <h4 className="text-success">Data Structures</h4>
                      <blockquote>
                        <p className="blockquote">
                          A data structure is a specific way of organizing and storing data
                          so that it can be used efficently in different situations. Each structure
                          has it's benefits and uses and we'll go over some of the most common ones
                          in terms of it's:
                          <br>
                          </br>
                          <br>
                          </br>
                          <ul>
                            <li>General Description</li>
                            <li>Implementation</li>
                            <li>Visualization</li>
                            <li>Operations</li>
                            <li>Space/Time Complexity</li>
                          </ul>
                        </p>
                      </blockquote>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <div style={{textAlign: "center"}}>
                    <Button color="info" className="animation-on-hover">
                      Arrays
                    </Button>
                    <Button color="info" className="animation-on-hover">
                      Linked Lists
                    </Button>
                    <Button color="info" className="animation-on-hover">
                      Stacks
                    </Button>
                    <Button color="info" className="animation-on-hover">
                      Queues
                    </Button>
                    <Button color="info" className="animation-on-hover">
                      Hash Tables
                    </Button>
                    <Button color="info" className="animation-on-hover">
                      Trees
                    </Button>
                    <Button color="info" className="animation-on-hover">
                      Heaps
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <CardDeck style={{marginBottom: "30px"}}>
                <Card>
                  <CardHeader>
                    <Row>
                      <Col xs="auto">
                        <i className="tim-icons icon-bullet-list-67"/>
                      </Col>
                      <Col style={{marginLeft: -20}}>
                        <h4>Description</h4>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <p>
                    Arrays are collections of elements stored together based on a sequential 0-based index (usually). They
                    are typically visualized as a chain of blocks, with each block having an incrementing index and
                    corresponding data element.
                    <br></br>
                    <br></br>
                    Arrays are one of the most fundamental data structures and are also used to implement other structures
                    such as trees and lists.
                    <br></br>
                    <br></br>
                    They are good for indexing, but sub-optimal for searching, inserting, and deleting unless
                    the exact index is known before-hand. Arrays can be static or dynamic, and can also be multi-dimensional.
                    <br></br>
                    <br></br>
                    <ul>
                      <li>Static Arrays</li>
                      <li className="list-unstyled">
                        <ul>
                          <li>Declared with a static, fixed size</li>
                        </ul>
                      </li>
                      <li> Dynamic Arrays </li>
                      <li className="list-unstyled">
                        <ul>
                          <li>When an array is full, it copies its elements into a larger array</li>
                        </ul>
                      </li>
                      <li> Multi-Dimensional Arrays </li>
                      <li className="list-unstyled">
                        <ul>
                          <li>Nested arrays can be used to model higher dimensions such as matrices</li>
                        </ul>
                      </li>
                    </ul>
                    </p>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    <Row>
                      <Col xs="auto">
                        <i className="tim-icons icon-laptop"/>
                      </Col>
                      <Col style={{marginLeft: -20}}>
                        <h4>Implementation</h4>
                      </Col>
                      <Col style={{textAlign: "right"}}>
                        <UncontrolledDropdown>
                          <DropdownToggle caret className="btn-icon"color="link"data-toggle="dropdown"type="button">
                            <i className="tim-icons icon-settings-gear-63" />
                          </DropdownToggle>
                          <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                              <DropdownItem>Java</DropdownItem>
                              <DropdownItem>C++</DropdownItem>
                              <DropdownItem>JavaScript</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <p>
                    Basic Java implementaion examples for your projects.
                    <br></br>
                    <br></br>
                    Java allows you to declare and initialize arrays with primitive or user-defined types
                    and also provides dynamic arrays called ArrayList(s).
                    </p>
                    <br></br>
                    <Card style={{margin: "auto"}}>
                      <CardBody>
                        <code>int intArray[];</code> &nbsp; // declaring array
                        <br></br>
                        <code>intArray = new int[7];</code> &nbsp; // allocating memory for 7 elements
                        <br></br>
                        // Or, declare an array literal if variables are known
                        <br></br>
                        <code> int[] intArray = new int[]{'{1,2,4,5,2,5,6}'}; </code>
                        <br></br>
                        <br></br>
                        // Example of accessing array elements (print sum of elements)
                        <br></br>
                        <code>int count = 0;</code>
                        <br></br>
                        <code>for (int i=0; i &lt; intArray.length; i++)</code>
                        <br></br>
                        <code>&nbsp; count += intArray[i];</code>
                        <br></br>
                        <code> System.out.println(count); </code>
                      </CardBody>
                    </Card>
                  </CardBody>
                </Card>
              </CardDeck>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <Row>
                    <Col xs="auto">
                      <i className="tim-icons icon-image-02"/>
                    </Col>
                    <Col style={{marginLeft: -20}}>
                      <h4>Visualization</h4>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={chartExample3.data}
                      options={chartExample3.options}
                    />
                  </div>
                </CardBody>
                <CardFooter style={{textAlign: "center"}}>
                  <Button color="info" className="animation-on-hover" size="sm">
                    <i className="tim-icons icon-double-left"/>
                  </Button>
                  <Button color="info" className="animation-on-hover" size="sm">
                    <i className="tim-icons icon-button-pause"/>
                  </Button>
                  <Button color="info" className="animation-on-hover" size="sm">
                    <i className="tim-icons icon-triangle-right-17"/>
                  </Button>
                  <Button color="info" className="animation-on-hover" size="sm">
                    <i className="tim-icons icon-double-right"/>
                  </Button>
                  <Button color="info" className="animation-on-hover" size="sm">
                    Randomize
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <CardDeck>
                <Card>
                  <CardHeader>
                    <Row>
                      <Col xs="auto">
                        <i className="tim-icons icon-simple-add"/>
                      </Col>
                      <Col style={{marginLeft: -20}}>
                        <h4>Operations</h4>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <p>
                    Arrays are collections of elements stored together based on a sequential 0-based index (usually). They
                    are typically visualized as a chain of blocks, with each block having an incrementing index and
                    corresponding data element.
                    <br></br>
                    <br></br>
                    Arrays are one of the most fundamental data structures and are also used to implement other structures
                    such as trees and lists.
                    <br></br>
                    <br></br>
                    They are good for indexing, but sub-optimal for searching, inserting, and deleting unless
                    the exact index is known before-hand. Arrays can be static or dynamic, and can also be multi-dimensional.
                    <br></br>
                    <br></br>
                    <ul>
                      <li>Static Arrays</li>
                      <li className="list-unstyled">
                        <ul>
                          <li>Declared with a static, fixed size</li>
                        </ul>
                      </li>
                      <li> Dynamic Arrays </li>
                      <li className="list-unstyled">
                        <ul>
                          <li>When an array is full, it copies its elements into a larger array</li>
                        </ul>
                      </li>
                      <li> Multi-Dimensional Arrays </li>
                      <li className="list-unstyled">
                        <ul>
                          <li>Nested arrays can be used to model higher dimensions such as matrices</li>
                        </ul>
                      </li>
                    </ul>
                    </p>
                  </CardBody>
                </Card>
                <Card>
                  <CardHeader>
                    <Row>
                      <Col xs="auto">
                        <i className="tim-icons icon-watch-time"/>
                      </Col>
                      <Col style={{marginLeft: -20}}>
                        <h4>Time and Space Complexity</h4>
                      </Col>
                      <Col style={{textAlign: "right"}}>
                        <UncontrolledDropdown>
                          <DropdownToggle caret className="btn-icon"color="link"data-toggle="dropdown"type="button">
                            <i className="tim-icons icon-settings-gear-63" />
                          </DropdownToggle>
                          <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                              <DropdownItem>Java</DropdownItem>
                              <DropdownItem>C++</DropdownItem>
                              <DropdownItem>JavaScript</DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <p>
                    Basic Java implementaion examples for your projects.
                    <br></br>
                    <br></br>
                    Java allows you to declare and initialize arrays with primitive or user-defined types
                    and also provides dynamic arrays called ArrayList(s).
                    </p>
                    <br></br>
                    <Card style={{margin: "auto"}}>
                      <CardBody>
                        <code>int intArray[];</code> &nbsp; // declaring array
                        <br></br>
                        <code>intArray = new int[7];</code> &nbsp; // allocating memory for 7 elements
                        <br></br>
                        // Or, declare an array literal if variables are known
                        <br></br>
                        <code> int[] intArray = new int[]{'{1,2,4,5,2,5,6}'}; </code>
                        <br></br>
                        <br></br>
                        // Example of accessing array elements (print sum of elements)
                        <br></br>
                        <code>int count = 0;</code>
                        <br></br>
                        <code>for (int i=0; i &lt; intArray.length; i++)</code>
                        <br></br>
                        <code>&nbsp; count += intArray[i];</code>
                        <br></br>
                        <code> System.out.println(count); </code>
                      </CardBody>
                    </Card>
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

export default DataStructures;
