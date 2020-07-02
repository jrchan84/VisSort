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
import About from "views/About.js";
import DataStructures from "views/DataStructures.js";
import TreeTraversals from "views/TreeTraversals.js";
import SortingAlgorithms from "views/SortingAlgorithms.js";
import PathFindingAlgorithms from "views/PathFindingAlgorithms.js";
import OtherResources from "views/OtherResources.js";

var routes = [
  {
    path: "/about",
    name: "About",
    icon: "tim-icons icon-badge",
    component: About,
    layout: "/admin"
  },
  {
    path: "/datastructures",
    name: "Data Structures",
    icon: "tim-icons icon-coins",
    component: DataStructures,
    layout: "/admin"
  },
  {
    path: "/treetraversals",
    name: "Tree Traversals",
    icon: "tim-icons icon-user-run",
    component: TreeTraversals,
    layout: "/admin"
  },
  {
    path: "/sortingalgorithms",
    name: "Sorting Algorithms",
    icon: "tim-icons icon-chart-bar-32",
    component: SortingAlgorithms,
    layout: "/admin"
  },
  {
    path: "/pathfindingalgorithms",
    name: "Path Finding Algorithms",
    icon: "tim-icons icon-puzzle-10",
    component: PathFindingAlgorithms,
    layout: "/admin"
  },
  {
    path: "/otherresources",
    name: "Other Resources",
    icon: "tim-icons icon-bullet-list-67",
    component: OtherResources,
    layout: "/admin"
  }
];
export default routes;
