import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import doctorStore from '../stores/doctorStore';

export default function DoctorAddModal(props) {
  const [doctor, setDoctor] = useState({
    name: '',
    price: 0,
    department: '',
    image: '',
  });
  const handleChange = (event) => {
    setDoctor({ ...doctor, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    doctorStore.createDoctor(doctor);
    props.closeModal();
  };
  return (
    <Modal
      show={props.isOpen}
      onHide={props.closeModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a doctor
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Department</Form.Label>
            <Form.Control
              name="department"
              type="text"
              onChange={handleChange}
              placeholder="Enter department"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              name="image"
              onChange={handleChange}
              type="text"
              placeholder="Enter image"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              name="price"
              onChange={handleChange}
              type="text"
              placeholder="Enter price"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleSubmit}>Add</Button>
        <Button onClick={props.closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
