export function createReducer(actions, initialState = {}) {
  return (state = initialState, action = {}) => {
    const reducer = actions[action.type];

    if (!reducer) return state;

    return { ...state, ...reducer(state, action) };
  };
}
