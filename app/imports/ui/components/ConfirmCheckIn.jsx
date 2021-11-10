import React from 'react';
import { Button, Grid, Header, Image, Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, NavLink } from 'react-router-dom';
import swal from 'sweetalert';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class ConfirmCheckIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  alert() {
    setTimeout(() => { swal('Check-In Confirmed!', 'test test...', 'success'); }, 10);
    this.context.history.push('/queue');
  }

  render() {
    return (

      <Modal
        onClose={() => this.setState({ open: false })}
        onOpen={() => this.setState({ open: true })}
        open={this.state.open}
        trigger={<Button inverted size="huge"> Check-In</Button>}
      >
        <Header icon='map' content='Confirm Check-In'/>
        <Modal.Content image>
          <Grid container doubling centered verticalAlign='middle' columns={2}>
            <Grid.Column textAlign='center'>
              <Image size='medium' src="/images/aaq-office.png" bordered/> {/* Possible Placeholder */}
            </Grid.Column>
            <Grid.Column>
              <Header as="h3">
                  By clicking confirm, you indicate that you are in vicinity of our offices. You will then be put into a queue for when you will be able to sign out your pet. Otherwise, click cancel until you are near our offices.
              </Header>
            </Grid.Column>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Grid relaxed padded centered columns={1}>
            <Grid.Row textAlign="center">
              <Button negative size="huge" content="Wait"
                onClick={() => this.setState({ open: false })}/>
              <Button as={NavLink} activeClassName="active" exact to="/Queue" positive size="huge" content="Confirm Check-In"
                onClick={() => {
                  this.alert();
                }}
              />
            </Grid.Row>
          </Grid>
        </Modal.Actions>
      </Modal>
    );
  }
}

ConfirmCheckIn.propTypes = {
  microchipCode: PropTypes.array,
  queueNumber: PropTypes.number,
};

export default withRouter(ConfirmCheckIn);
