import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {IoIosCall} from 'react-icons/io'
import {AiOutlineMail} from 'react-icons/ai'
import rev from '../Assets/pres.png'
function MyVerticallyCenteredModal2(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Row>
              <Col className='cl'>
                  <img src={rev} alt="" />
              </Col>
              <Col>
                  <h3 className='h3'>Engr. Mansur Ahmed</h3>
                  <p className='p'>PRESIDENT</p><br />
                  <p className='p'>Executive Director, Stakeholder Management and Corporate Communications, Dangote Industries Limited.</p>
                  <Row>
                      <Col className='col-xs-12 .col-md-6'>
                          <AiOutlineMail size='2rem'/><br /><span className='sp'><a href="mailto:info@manaufacturersnigeria.org">info@manaufacturersnigeria.org</a></span> 
                      </Col>
                      <Col className='col-xs-12 .col-md-6'>
                          <IoIosCall color='#2c3513' size='2rem'/><br /> <span>(+234) 1-4542700 - 2 </span>
                      </Col>
                  </Row>
              </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }
  


export default MyVerticallyCenteredModal2