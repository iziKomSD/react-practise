export const INITIAL_STATE = {
  isValid: {
    header: true,
    post: true,
    date: true,
    tag: true,
  },
  values: {
    header: '',
    post: '',
    date: '',
    tag: '',
  },
  isFormReadyToSubmit: false,
}

export function formReducer(state, action) {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, values: { ...state.values, ...action.payload } }
    case 'CLEAR':
      return {
        ...state,
        values: INITIAL_STATE.values,
        isFormReadyToSubmit: false,
      }
    case 'RESET_VALIDITY':
      return { ...state, isValid: INITIAL_STATE.isValid }
    case 'SUBMIT': {
      const headerValidity = state.values.header?.trim().length
      const postValidity = state.values.post?.trim().length
      const dateValidity = state.values.date
      const tagValidity = state.values.tag
      return {
        ...state,
        isValid: {
          header: headerValidity,
          post: postValidity,
          date: dateValidity,
          tag: tagValidity,
        },
        isFormReadyToSubmit:
          headerValidity && postValidity && dateValidity && tagValidity,
      }
    }
  }
}
