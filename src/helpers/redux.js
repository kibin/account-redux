export function createReducer(reducers, initialState = {}) {
  return (state = initialState, action = {}) => {
    const reducer = reducers[action.type];

    if (!reducer) return state;

    return { ...state, ...reducer(state, action) };
  };
}
