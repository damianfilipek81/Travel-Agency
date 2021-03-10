/* SELECTORS */

export const getAllFilters = ({ filters }) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const ADD_MIN_DURATION = createActionName('ADD_MIN_DURATION');
export const ADD_MAX_DURATION = createActionName('ADD_MAX_DURATION');
export const REMOVE_TAGS = createActionName('REMOVE_TAGS');
export const ADD_TAGS = createActionName('ADD_TAGS');
// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const addMinDuration = payload => ({ payload, type: ADD_MIN_DURATION });
export const addMaxDuration = payload => ({ payload, type: ADD_MAX_DURATION });
export const addTags = payload => ({ payload, type: ADD_TAGS });
export const removeTags = payload => ({ payload, type: REMOVE_TAGS });


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case ADD_MIN_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration, from: action.payload},
      };
    case ADD_MAX_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration, to: action.payload},
      };
    case ADD_TAGS:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case REMOVE_TAGS:
      return {
        ...statePart,
        tags: statePart.tags.filter(tag => tag != action.payload),
      };
    default:
      return statePart;
  }
}
