export function createReducer(actions, initialState = {}) {
  return (state = initialState, action = {}) => {
    const reducer = actions[action.type];

    if (!reducer) return state;

    return { ...state, ...reduced }
  }
}

export const createActions = R.reduce((processedActions, actionDescription, actionName) => {
  if (!Array.isArray(actionDescription)) return R.is(Function, actionDescription)
    ? R.assoc(actionName, actionDescription, processedActions)
    : processedActions;

  return R.assoc(actionName, (state, action) => {
    return R.zipObj(
        actionDescription,
        R.values(R.pick(actionDescription, action))
    );
  }, processedActions);
}, {});
