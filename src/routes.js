/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/dashboard/Dashboard.jsx";
// import Dashboard from "views/examples/Dashboard.jsx";
import Profile from "views/examples/Profile.jsx";
import Maps from "views/examples/Maps.jsx";
import Register from "views/examples/Register.jsx";
import Login from "views/examples/Login.jsx";
import Tables from "views/examples/Tables.jsx";
import Icons from "views/examples/Icons.jsx";
import RulesValidation from "views/rules/RulesValidation.jsx";
import RulesCallback from "views/rules/RulesCallback.jsx";
import OutboundRequest from "views/outbound/OutboundRequest.jsx";
import Monitor from "views/monitor/Monitor.jsx";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/monitoring",
    name: "Monitoring",
    icon: "ni ni-glasses-2 text-primary",
    component: Monitor,
    layout: "/admin"
  },
  {
    path: "/rules_validation",
    name: "Validation Rules",
    subTitle: "(Error Callbacks)",
    icon: "ni ni-bullet-list-67 text-primary",
    component: RulesValidation,
    layout: "/admin"
  },
  {
    path: "/rules_callback",
    name: "Callback Rules",
    subTitle: "(Success Callbacks)",
    icon: "ni ni-curved-next text-primary",
    component: RulesCallback,
    layout: "/admin"
  },
  {
    path: "/outbound_request",
    name: "Outbound Request",
    icon: "ni ni-money-coins text-blue",
    component: OutboundRequest,
    layout: "/admin"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "ni ni-pin-3 text-orange",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/admin"
  // },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth"
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
