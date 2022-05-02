import context from "./context";
import { validateId, validateToken } from "./helpers/validators";

/**
 * Retrieves the details of the selected item.
 *
 * @param {string} id The id of the item being retrieved.
 *
 * @throws {TypeError} When any of the arguments does not match the correct type.
 */
export default function retrieveItem(token, id) {
  if (token) validateToken(token);

  validateId(id);

  return (async () => {
    if (token) {
      const response = await fetch(`${context.API_USER}/api/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const { error } = await response.json();

        throw new Error(error);
      } else {
        const user = await response.json();

        const { favs = [] } = user;

        const response2 = await fetch(
          `${context.API_PHOTOS}/photos/${id}?client_id=${context.CLIENT_ID}`,
          {
            method: "GET",
            headers: {
              Authorization: `Client-ID ${context.CLIENT_ID}`,
            },
          }
        );

        // const { status } = response2;
        // sopra sta destrutturando un oggetto e prende una proprietà, status, e la assegna e una costante.

        if (response2.ok) {
          const item = await response2.json();

          item.isFav = favs.includes(item.id);

          return item;
        } else {
          const { error } = await response2.json();

          throw new Error(error);
        }
      }
    } else {
      const response = await fetch(
        `${context.API_PHOTOS}/photos/${id}?client_id=${context.CLIENT_ID}`,
        {
          method: "GET",
          Authorization: `Client-ID ${context.CLIENT_ID}`,
        }
      );

      if (response.ok) {
        const item = await response.json();
      
        console.log(item);

        return item;
      } else {
        const { error } = await response.json();

        throw new Error(error);
      }
    }
  })();
}
