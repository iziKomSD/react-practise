export const INITIAL_STATE = {
  isValid: {
    header: true,
    post: true,
    date: true,
    tag: true,
  },
  values: {
    header: true,
    post: true,
    date: true,
    tag: true,
  },
  isFormReadyToSubmit: false,
}

export function formReducer(state, action) {
  switch (action.type) {
    case 'RESET_VALIDITY':
      return { ...state, isValid: INITIAL_STATE.isValid }
    case 'SUBMIT': {
      const headerValidity = action.payload.header?.trim().length
      const postValidity = action.payload.post?.trim().length
      const dateValidity = action.payload.date
      const tagValidity = action.payload.tag
      return {
        values: action.payload,
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
