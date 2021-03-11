import {parseOptionPrice} from '../utils/parseOptionPrice';

/* SELECTORS */

export const getAllTrips = ({ trips }) => trips;

export const getFilteredTrips = ({ trips, filters }) => {
  let output = trips;

  // filter by search phrase
  if (filters.searchPhrase) {
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  } // TODO - filter by duration
  if (filters.duration) {
    const durationMin = filters.duration.from;
    const durationMax = filters.duration.to;
    output = output.filter((trip) => trip.days >= durationMin && trip.days <= durationMax );
  } // TODO - filter by tags
  if (filters.tags.length) {
    output=output.filter( trip=> filters.tags.every((tag) => trip.tags.includes(tag)));
  }
  // TODO - sort by cost descending (most expensive goes first)

  output = output.sort((a, b) => parseOptionPrice(b.cost).value - parseOptionPrice(a.cost).value);
  return output;
};

export const getTripById = ({ trips }, tripId) => {
  //let filtered = trips;
  // TODO - filter trips by tripId
  const filtered = trips.filter(trip => trip.id == tripId);

  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  // TODO - filter trips by countryCode
  const filtered = trips.filter(trip=> trip.country.code == countryCode);

  return filtered.length ? filtered : [{ error: true }];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
