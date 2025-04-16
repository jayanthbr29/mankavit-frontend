import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import theme from "../../theme/Theme";
import {
  SidebarContainer,
  SidebarTitle,
  MenuList,
  MenuItem,
  IndentedItem,
  HamburgerIcon,
  Backdrop,
  DropdownIcon,
} from "./Sidebar.style";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSections, setOpenSections] = useState({}); // To handle collapsible sections

  const toggleSidebar = () => setIsOpen(!isOpen);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const menuItems = [
    { path: "/admin", label: "Dashboard" },
    { path: "/admin/student-management", label: "Student Management" },
    { label: "Mock Test" },
    { path: "/admin/payment-management", label: "Payment" },
  ];

  const courseManagementItems = [
    { path: "/admin/course-management", label: "Courses" },
    { path: "/admin/subject-management", label: "Subjects" },
    { path: "/admin/notes-management", label: "Notes" },
  ];

  const webmanagement = [
    { path: "/admin/web-management/home", label: "Home page" },
    "Why Mankavit",
    "About us",
    "Testimonial",
    "Achievement",
    "Question paper",
    "Live Classes",
    "Recorded Class",
    "Notification",
    "Static Page",
    "FAQs",
  ];

  const appManagementItems = ["Homepage", "Courses", "Live Classes", "FAQs"];

  const renderMenuItem = ({ path, label }, index) =>
    path ? (
      <NavLink
        to={path}
        style={{ textDecoration: "none", color: "inherit" }}
        key={index}
        onClick={() => setIsOpen(false)}
      >
        <MenuItem>{label}</MenuItem>
      </NavLink>
    ) : (
      <MenuItem key={index}>{label}</MenuItem>
    );

  const renderSection = (title, items, hasMarginTop = true) => {
    const isExpanded = openSections[title];

    return (
      <React.Fragment key={title}>
        <MenuItem
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            ...(hasMarginTop ? { marginTop: theme.spacing(3) } : {}),
          }}
          onClick={() => toggleSection(title)}
        >
          {title}
          <DropdownIcon>
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </DropdownIcon>
        </MenuItem>

        {isExpanded &&
          items.map((item, index) =>
            typeof item === "object" && item.path ? (
              <NavLink
                to={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
                key={`${title}-${index}`}
                onClick={() => setIsOpen(false)}
              >
                <IndentedItem>{item.label}</IndentedItem>
              </NavLink>
            ) : (
              <IndentedItem key={`${title}-${index}`}>
                {typeof item === "object" ? item.label : item}
              </IndentedItem>
            )
          )}
      </React.Fragment>
    );
  };

  return (
    <>
      <HamburgerIcon onClick={toggleSidebar}>
        <FaBars size={24} />
      </HamburgerIcon>

      <Backdrop isOpen={isOpen} onClick={() => setIsOpen(false)} />

      <SidebarContainer isOpen={isOpen}>
        <SidebarTitle>Mankavit</SidebarTitle>
        <MenuList>
          {menuItems.map((item, index) => renderMenuItem(item, index))}
          {renderSection("Course Management", courseManagementItems)}
          {renderSection("Web management", webmanagement)}
          {renderSection("App Management", appManagementItems)}
        </MenuList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
