/* SELECTORS */

export const getAllFilters = ({ filters }) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');

export const CHANGE_DURATION = createActionName('CHANGE_DURATION');

export const REMOVE_TAGS = createActionName('REMOVE_TAGS');
export const ADD_TAGS = createActionName('ADD_TAGS');

export const REMOVE_REGIONS = createActionName('REMOVE_REGIONS');
export const ADD_REGIONS = createActionName('ADD_REGIONS');
// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });

export const changeDuration = payload => ({ payload, type: CHANGE_DURATION });

export const addTags = payload => ({ payload, type: ADD_TAGS });
export const removeTags = payload => ({ payload, type: REMOVE_TAGS });

export const addRegions = payload => ({ payload, type: ADD_REGIONS });
export const removeRegions = payload => ({ payload, type: REMOVE_REGIONS });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          [action.payload.type]: action.payload.value},
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
    case ADD_REGIONS:
      return {
        ...statePart,
        regions: [...statePart.regions, action.payload],
      };
    case REMOVE_REGIONS:
      return {
        ...statePart,
        regions: statePart.regions.filter(region => region != action.payload),
      };
    default:
      return statePart;
  }
}
