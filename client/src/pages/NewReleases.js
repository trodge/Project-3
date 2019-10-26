import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import MovieBrowser from '../components/NewModal/movie-browser/movie-browser.container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Col, Row, Container } from "../components/Grid";

class NewReleases extends Component {
  state = {
    movies: null,
    loading: false,
  };


  render() {
    return (
      <MuiThemeProvider>
        <Jumbotron>
          <Container>
            <h1 className="text-center" id="title">New Releases</h1>
            <p className="text-center" id="titleContext">List of upcoming new releases coming to a theatre near you!</p>
          </Container>
          </Jumbotron>
        <MovieBrowser location={this.props.location.pathname} />
      </MuiThemeProvider>
    );
  }
}

export default NewReleases;
