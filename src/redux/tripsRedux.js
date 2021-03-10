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

  output = output.sort((a, b) => parseOptionPrice(b.cost) - parseOptionPrice(a.cost));
  return output;
};

export const getTripById = ({ trips }, tripId) => {
  const filtered = trips;
  // TODO - filter trips by tripId
  filtered.filter(trip => trip.id == tripId);

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : { error: true };
};

export const getTripsForCountry = ({ trips }, countryCode) => {
  const filtered = trips;

  // TODO - filter trips by countryCode
  filtered.filter(trip=> trip.country.code == countryCode);

  console.log('filtering trips by countryCode:', countryCode, filtered);
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
