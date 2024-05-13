import React, { useState } from 'react';
import { Form, FloatingLabel, Button, Row, InputGroup, Alert } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";

export function Register({ switchToLogin }) {
  const [registrationMessage, setRegistrationMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      nomusuario: '',
      apellidos: '',
      email: '',
      password: '',
    },
    onSubmit: async (formValues) => {
      try {
        const response = await axios.post('/auth/registro', formValues);
        console.log(response.data);
        setRegistrationMessage("Usuario registrado correctamente"); // Mensaje de éxito
      } catch (error) {
        console.error(error);
        setRegistrationMessage("Error al registrar usuario"); // Mensaje de error
      }
    }
  });

  return (
    <div>
      {registrationMessage && <Alert variant={registrationMessage.includes('correctamente') ? 'success' : 'danger'}>{registrationMessage}</Alert>}

      <Form noValidate onSubmit={formik.handleSubmit}>
        <Row className='mb-3'>
          <InputGroup>
            <FloatingLabel controlId='floatingInput' label="Nombre de usuario" className='mb-3'>
              <Form.Control
                type="text"
                name="nomusuario"
                onChange={formik.handleChange}
                value={formik.values.nomusuario}
                required
              />
            </FloatingLabel>
          </InputGroup>

          <InputGroup>
            <FloatingLabel controlId='floatingInput' label="Apellidos" className='mb-3'>
              <Form.Control
                type="text"
                name="apellidos"
                onChange={formik.handleChange}
                value={formik.values.apellidos}
                required
              />
            </FloatingLabel>
          </InputGroup>

          <InputGroup>
            <FloatingLabel controlId='floatingInput' label="Correo" className='mb-3'>
              <Form.Control
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                required
              />
            </FloatingLabel>
          </InputGroup>

          <InputGroup>
            <FloatingLabel controlId='floatingInput' label="Contraseña" className='mb-3'>
              <Form.Control
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                required
              />
            </FloatingLabel>
          </InputGroup>
        </Row>

        <Form.Group>
          <div className='d-grid gap-2'>
            <Button type='submit' size='lg'>Registrarse</Button>
            <Button variant="secondary" size='lg' onClick={switchToLogin}>Volver al inicio de sesión</Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  )
}