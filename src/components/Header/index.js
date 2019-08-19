import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Content, Profile } from './styles';
import Button from '~/components/Button';

import logo from '~/assets/logo.svg';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user);
  const dispatch = useDispatch();

  function logout() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          <Profile>
            <strong>{profile.name}</strong>
            <Link to="/profile">Meu perfil</Link>
          </Profile>
          <Button type="button" onClick={logout}>
            Sair
          </Button>
        </nav>
      </Content>
    </Container>
  );
}
