import React from "react";

import { FaDatabase } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";

import { Form, Button } from "react-bootstrap";

const AddForm = ({ handleSubmit, handleChange, empForm }) => {
  const { name, email, city } = empForm;
  return (
    <div className="wrap">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="form-group">
          <Form.Label>Name</Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Add your Name..."
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Add your Email..."
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
            placeholder="Add your City..."
          />
        </Form.Group>
        <Button className="mr-3" type="submit" variant="info">
          <FaDatabase />
          Submit
        </Button>
        <Button type="button" variant="secondary">
          <MdFormatListBulleted />
          View All
        </Button>
      </Form>
    </div>
  );
};

export default AddForm;
