import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Menu.Item
        id="about-tab"
        name="about me"
        as={Link}
        to={{ pathname: "/about"}}
        />
        <Menu.Item
        id="cv-tab"
        name="CV"
        as={NavLink}
        to={{ pathname: "/cv"}}
        />
        <Menu.Item
        id="projects-tab"
        name="projects"
        as={NavLink}
        to={{ pathname: "/projects"}}
        />
        <Menu.Item
        id="projects-tab"
        name="contact"
        as={NavLink}
        to={{ pathname: "/contact"}}
        />
      </Menu>
    </Segment>
  )
}

export default Header
