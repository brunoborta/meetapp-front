import produce from 'immer';

const INITIAL_STATE = {
  id: null,
  name: null,
  email: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        const { id, name, email } = action.payload.user;
        draft.id = id;
        draft.name = name;
        draft.email = email;
        break;
      }
      default:
    }
  });
}
