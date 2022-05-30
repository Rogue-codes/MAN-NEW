import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {IoIosCall} from 'react-icons/io'
import {AiOutlineMail} from 'react-icons/ai'
import rev from '../Assets/SEGUN.jpg'
function MyVerticallyCenteredModal(props) {
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
                  <h3 className='h3'>SEGUN AJAYI-KADIR, mni</h3>
                  <p className='p'>DIRECTOR GENERAL</p><br />
                  <p className='p'>Mr. Segun Ajayi-Kadir is the Director General of the Manufacturers Association of Nigeria...</p>
                  <Row>
                      <Col className='col-xs-12 .col-md-6'>
                          <AiOutlineMail size='2rem'/><br /><span className='sp'><a href="mailto:info@manaufacturersnigeria.org">info@manaufacturersnigeria.org</a></span> 
                      </Col>
                      <Col className='col-xs-12 .col-md-6'>
                          <IoIosCall color='#2c3513' size='2rem'/><br /> <span>01-4542700</span>
                      </Col>
                  </Row>
              </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }
  


export default MyVerticallyCenteredModal