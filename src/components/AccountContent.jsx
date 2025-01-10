import { Component } from 'react';
import {
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Row,
  Button,
} from 'react-bootstrap';
import { Pencil } from 'react-bootstrap-icons';

class AccountContent extends Component {
  state = {
    accountName: 'Epicoder #1',
  };

  render() {
    return (
      <>
        <Container
          fluid
          className='d-flex flex-column align-items-center border border-2 border-info'
        >
          <h1 className='text-center text-white'>Edit Profile</h1>
          <Row className='border border-2 border-warning w-75'>
            <Col
              xs={12}
              lg={4}
              className='d-flex justify-content-center align-items-start border border-3 border-danger'
            >
              <div className='position-relative'>
                <img
                  src='https://placedog.net/500'
                  className='rounded-3'
                  width={'100%'}
                />
                <span className='modifyPicture'>
                  <Pencil className='text-white'></Pencil>
                </span>
              </div>
            </Col>

            <Col xs={12} lg={8}>
              <Form style={{ width: 'fit-content' }}>
                <FormGroup>
                  <Form.Control
                    type='text'
                    value={this.state.accountName}
                    onChange={(e) => {
                      this.setState({ accountName: e.target.value });
                    }}
                    maxLength={20}
                    className='bg-secondary border-0 rounded-0 text-white fs-5'
                    style={{ width: '250px' }}
                  ></Form.Control>
                </FormGroup>
                <FormGroup style={{ borderBottom: '1px solid gray' }}>
                  <h4 className='text-secondary fs-4'>Language</h4>
                  <Form.Select
                    className='text-white bg-dark rounded-0'
                    style={{ width: 'fit-content' }}
                  >
                    <option>English</option>
                    <option>Italiano</option>
                    <option>Espanol</option>
                  </Form.Select>
                </FormGroup>
                <FormGroup style={{ borderBottom: '1px solid gray' }}>
                  <h4 className='text-secondary fs-4'>Maturity Settings:</h4>
                  <span
                    className='d-block p-2 px-3 bg-secondary text-white'
                    style={{ width: 'fit-content' }}
                  >
                    ALL MATURITY SETTINGS
                  </span>
                  <FormText className='text-white'>
                    Show files for all maturity settings for this profile.
                  </FormText>
                  <Button
                    variant='outline-secondary'
                    className='d-block rounded-0'
                  >
                    EDIT
                  </Button>
                </FormGroup>
                <FormGroup style={{ borderBottom: '1px solid gray' }}>
                  <h4 className='text-secondary fs-4'>Maturity Settings:</h4>
                  <div>
                    <input type='checkbox' />
                    <label className='text-white'>
                      Autoplay next episode in a series on all device
                    </label>
                  </div>
                  <div>
                    <input type='checkbox' />
                    <label className='text-white'>
                      Autoplay next episode in a series on all device
                    </label>
                  </div>
                </FormGroup>
                <div>
                  <Button variant='light' className='fw-bold fs-5 me-2'>
                    SAVE
                  </Button>
                  <Button variant='outline-secondary' className='fs-5 me-2'>
                    CANCEL
                  </Button>
                  <Button variant='outline-secondary' className='fs-5'>
                    DELETE PROFILE
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default AccountContent;
