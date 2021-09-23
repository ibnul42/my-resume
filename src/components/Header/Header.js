import { HomeRounded, SendAndArchive } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import resumeData from "../../utils/resumeData";
import BasicButton from "../Button/Button";
import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathName;
  console.log(pathName);
  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse className="header_alignment">
        <Nav className="header_left">
          <Nav.Link
            as={NavLink}
            to={"/"}
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to={"/portfolio"}
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => {
            return (
              <a
                href={resumeData.socials[key].link}
                target="_blank"
                rel="noreferrer"
              >
                {resumeData.socials[key].icon}
              </a>
            );
          })}
          <BasicButton text="Hire me" icon={<SendAndArchive />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
