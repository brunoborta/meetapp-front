import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as yup from 'yup';
import { FaSync } from 'react-icons/fa';

import logo from '~/assets/logo.svg';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('O e-mail deve ser válido')
      .required('E-mail é um campo obrigatório'),
    password: yup
      .string()
      .min(6, 'A senha contém no mínimo 6 caracteres')
      .required('Senha é um campo obrigatório'),
  });

  function signIn({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="logo" />
      <Form schema={schema} onSubmit={signIn}>
        <Input name="email" id="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">
          {loading ? <FaSync size={14} /> : 'Entrar'}
        </button>
        <Link to="/register">Criar conta grátis</Link>
      </Form>
    </>
  );
}
