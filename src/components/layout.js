/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Col, Row, Container } from "react-bootstrap"

import Header from "./header"

/* import "../styles/layout.css" */
import "../styles/style.scss"
import "../styles/_custom_bootstrap.scss"

const Layout = ({ children }) => (
  <>
    <main>
      <Header />
      {children}
    </main>
    <footer>
      <Container>
        <h3>Vote-2020 National Websites</h3>
        <Row>
          <Col sm>
            <a href="https://www.absenteevoting.org">Absenteevoting.org</a>
            <a href="https://www.votingbymail.net">Votingbymail.net</a>
            <a href="https://www.mailinvote.net">MailInVote.net</a>
            <a href="https://www.usvote.net">USVote.net</a>
          </Col>
          <Col sm>
            <a href="https://www.usvoterregistration.com">USVoterRegistration.com</a>
            <a href="https://www.unitedstatesvote.com">UnitedStatesVote.com</a>
            <a href="https://democrats.org/es/">VotarUSA.com</a>
          </Col>
        </Row>
        <h3 style={{marginTop:"1rem"}}>State Websites</h3>
        <Row>
          <Col sm>
            <a href="https://www.AZvote.net">AZvote.net</a>
            <a href="https://www.Floridavote.net">Floridavote.net</a>
            <a href="https://www.MIvote.net">MIvote.net</a>
          </Col>
          <Col sm>
            <a href="https://www.NCvote.org">NCvote.org</a>
            <a href="https://www.PAvote.net">PAvote.net</a>
            <a href="https://www.Wisconsinvote.net">Wisconsinvote.net</a>
          </Col>
        </Row>
      </Container>
    </footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
