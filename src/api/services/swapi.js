import { get } from '../requests';

import { ALL_FILMS_URL, FILM_BY_ID, PEOPLE_BY_ID, PEOPLE_BY_NAME } from '../apiConstans';

export default {
  getAllFilms: async () => get(ALL_FILMS_URL),
  getFilmeByID: async ({ id }) => get(FILM_BY_ID(id)),
  getPeopleByID: async ({ id }) => get(PEOPLE_BY_ID(id)),
  getByURL: async ({ url }) => get(url),
  searchUserByName: async ({ name }) => get(PEOPLE_BY_NAME(name)),
};
