import React, { useState } from 'react';
import { Form, FloatingLabel, Button, Row, InputGroup, Alert } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";
import { Register } from "./Register";

export function Login() {
  const [error, setError] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (formValues) => {
      try {
        const response = await axios.post('/api/auth/login', formValues);
        console.log(response.data);
        // Manejar la respuesta del servidor, como establecer tokens de acceso, etc.
      } catch (error) {
        setError("Error al iniciar sesión. Verifica tus credenciales.");
        console.error(error);
      }
    }
  });

  const handleRegisterSuccess = (formData) => { // Nueva función para manejar el éxito del registro
    setShowRegister(false); // Oculta el formulario de registro
    formik.setValues(formData); // Establece los valores del formulario de inicio de sesión con los datos del registro
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
  };

  return (
    <>
      {showRegister ? (
        <Register onRegisterSuccess={handleRegisterSuccess} />
      ) : (
        <div>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form noValidate onSubmit={formik.handleSubmit}>
            <Row className='mb-3'>
              <InputGroup>
                <FloatingLabel controlId='floatingInput' label="Correo" className='mb-3'>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder='nombre@ejemplo.com'
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
                <Button type='submit' size='lg'>Enviar</Button>
                <Button variant="secondary" onClick={handleRegisterClick} size='lg'>Registrarse</Button>
              </div>
            </Form.Group>
          </Form>
        </div>
      )}
    </>
  )
}