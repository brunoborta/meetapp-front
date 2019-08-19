import { takeLatest, all, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signFailure, signInSuccess } from './actions';

export function* signUp({ payload }) {
  const toastId = toast('Criando sua conta. Aguarde...', {
    autoClose: false,
  });
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    history.push('/');

    toast.update(toastId, {
      type: toast.TYPE.SUCCESS,
      render: 'Conta criada com sucesso. Ja é possível se logar no Meetapp!',
      autoClose: 3000,
    });
  } catch (err) {
    toast.update(toastId, {
      type: toast.TYPE.ERROR,
      render:
        'Erro ao criar sua conta. Verifique seus dados e tente novamente!',
      autoClose: 3000,
    });
    yield put(signFailure());
  }
}

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });
    const { token, user } = response.data;

    // Adiciona o token nos headers de todas as chamadas
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
    history.push('/dashboard');
  } catch (err) {
    toast.error(
      'Erro ao logar na sua conta. Verifique seus dados e tente novamente!'
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${payload.auth.token}`;
  }
}

export function signOut() {
  history.push('/');
  toast.info('Obrigado por utilizar o Meetapps!');
}

export default all([
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
