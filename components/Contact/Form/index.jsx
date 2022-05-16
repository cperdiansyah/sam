/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import styles from './form.module.css';

export default function index() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className='row'>
        <div className='col-md-6'>
          <FloatingLabel
            controlId='floatingInputEmail'
            label='Email address'
            className='mb-3'
          >
            <Form.Control
              type='email'
              placeholder='name@example.com'
              className={`form-control-lg ${styles['radius']}`}
              {...register('email')}
            />
          </FloatingLabel>
        </div>
        <div className='col-md-6'>
          <FloatingLabel
            controlId='floatingInputName'
            label='Name'
            className='mb-3'
          >
            <Form.Control
              type='text'
              placeholder='Budi Sudarsono'
              className={`form-control-lg ${styles['radius']}`}
              {...register('name')}
            />
          </FloatingLabel>
        </div>
      </div>

      <FloatingLabel
        controlId='floatingInputSubject'
        label='Subject Email'
        className='mb-3'
      >
        <Form.Control
          type='text'
          placeholder='Invitation to '
          className={`form-control-lg ${styles['radius']}`}
          {...register('subject')}
        />
      </FloatingLabel>

      <FloatingLabel controlId='floatingTextarea' label='Message'>
        <Form.Control
          as='textarea'
          placeholder='Leave a comment here'
          style={{ height: '100px' }}
          {...register('message')}
          className={styles['radius']}
        />
      </FloatingLabel>

      <Button
        variant='primary'
        className={`mt-3 fs-5 d-block d-block shadow-sm  py-2 w-100 ${styles['radius']}`}
        type='submit'
      >
        Submit
      </Button>
    </Form>
  );
}
