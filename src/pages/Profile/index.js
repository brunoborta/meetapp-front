import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, Form } from '@rocketseat/unform';
import { FaPlusCircle } from 'react-icons/fa';
import * as yup from 'yup';

import { Container, Content } from './styles';
import Button from '~/components/Button';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function Profile() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required('Nome é um campo obrigatório'),
    email: yup
      .string()
      .email('O e-mail deve ser válido')
      .required('E-mail é um campo obrigatório'),
    oldPassword: yup.string(),
    password: yup.string().when('oldPassword', (oldPassword, password) => {
      return oldPassword
        ? password
            .min(6, 'A senha deve conter no mínimo 6 caracteres')
            .required('A nova senha é um campo obrigatório para trocar a senha')
        : password;
    }),
    confirmPassword: yup
      .string()
      .when('password', (password, confirmPassword) => {
        return password
          ? confirmPassword
              .min(6, 'A senha deve conter no mínimo 6 caracteres')
              .required('Você deve confirmar a nova senha')
          : confirmPassword;
      }),
  });

  function updateProfile(data) {
    dispatch(updateProfileRequest(data));
  }
  return (
    <Container>
      <Content>
        <h1>Meu perfil</h1>
        <Form schema={schema} initialData={user} onSubmit={updateProfile}>
          <Input name="name" id="name" />
          <Input name="email" id="email" />

          <hr />

          <Input
            name="oldPassword"
            id="oldPassword"
            type="password"
            placeholder="Sua senha atual"
          />
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Sua senha nova"
          />
          <Input
            name="confirmPassword"
            id="confirmPassword"
            type="password"
            placeholder="Confirmação de senha"
          />
          <Button type="submit">
            <div>
              <FaPlusCircle color="#fff" />
              Salvar Perfil
            </div>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}
