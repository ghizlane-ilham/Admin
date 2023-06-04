import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">
                
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/articles" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">articles</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/utilesateur" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">liste utilisatuer</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/ajouter" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
              ajouter les articles
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/videos" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
              ajouter videos
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/boock" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
              ajouter livres
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/notification" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
              notification
              </CDBSidebarMenuItem>
            </NavLink>
         
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px"
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Navbar;
