import { takeLatest, all, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import { updateProfileFailure, updateProfileSuccess } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;
    const profile = { name, email, ...(rest.oldPassword ? rest : {}) };
    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso!');
    yield put(updateProfileSuccess(response.data));
    history.push('/dashboard');
  } catch (err) {
    toast.error(err.message);
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
