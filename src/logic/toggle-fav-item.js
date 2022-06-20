import { validateId, validateToken } from "./helpers/validators";
import context from "./context";

/**
 * Searches for items that meet the query criteria.
 *
 * @param {string} query The search criteria entered by the user in the search form.
 *
 * @throws {TypeError} When any of the arguments does not match the correct type.
 */

export default function toggleFavItem(token, id) {
  validateToken(token);
  validateId(id);

  return (async () => {
    const response = await fetch(`${context.API_USER}/api/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let favorites;

    if (!response.ok) {
      const { error } = await response.json();
      //La costante sopra, se non error sotto tra parentesi, non serve.
      throw new Error(error);
    } else {
      const user = await response.json();

      const { favs = [] } = user;

      const index = favs.indexOf(id);

      if (index < 0) favs.push(id);
      else favs.splice(index, 1);

      favorites = favs;
    }

    const response2 = await fetch(`${context.API_USER}/api/users`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ favs: favorites }),
    });

    if (response2.ok) {
      return;
    } else {
      const { error } = await response2.json();
      throw new Error(error);
    }
  })();
}
