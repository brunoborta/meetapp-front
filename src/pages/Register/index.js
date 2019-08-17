import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

export default function Register() {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required('Nome é um campo obrigatório'),
    email: yup
      .string()
      .email('O e-mail deve ser válido')
      .required('E-mail é um campo obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha deve conter no mínimo 6 caracteres')
      .required('Senha é um campo obrigatório'),
  });

  function createUser({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }
  return (
    <>
      <img src={logo} alt="logo" />
      <Form schema={schema} onSubmit={createUser}>
        <Input name="name" id="name" placeholder="Nome completo" />
        <Input name="email" id="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
