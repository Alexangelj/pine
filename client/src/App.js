import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { web3Connect } from '../src/reducers/web3Reducer';


class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        web3: undefined,
    }
  }

  
  componentDidMount = async () => {
      try {
        await this.props.web3Connect() // Initialize Web3
        this.setState({
          web3: this.props.web3Wrapper,
        }, 
        )
      } catch (error) {
          alert(
            'Failed to load web3, accounts, or contract.'
          );
          console.error(error);
      }
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h1 className='text-center'>Leaderboard</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapsDispatchToProps = {
  web3Connect,
}

const mapStateToProps = state => { 
  return {
    web3Wrapper: state.web3Wrapper,
  }
}

const App = connect(mapStateToProps, mapsDispatchToProps)(AppComponent);

export default App;
