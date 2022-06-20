import context from "./context";
import { validateToken } from "./helpers/validators";

/**
 * Retrieves items that the user has stored in his favs list.
 *
 * @param {string} token The token received from the API when the user is logged in the application.
 *
 * @throws {TypeError} When any of the arguments does not match the correct type.
 */

export default function retrieveFavItems(token) {
  validateToken(token);
  // validateId(id);

  return (async () => {
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

      if (favs.length) {
        let items = [];

        await Promise.all(
          favs.map(async (id, index) => {
            const response2 = await fetch(
              `${context.API_PHOTOS}/photos/${id}?client_id=${context.CLIENT_ID}`,
              {
                method: "GET",
                headers: {
                  Authorization: `Client-ID ${context.CLIENT_ID}`,
                },
              }
            );
            if (response2.ok) {
              const item = await response2.json();

              if (!item) return new Error(`no photo found with id ${id}`);

              items[index] = item;

              if (index === favs.length - 1) {
                items = items.map((item) => ({ ...item, isFav: true }));
              }
            }
          })
        );
        return items;
      } else throw new Error("No favorites found in your profile");
    }
  })();
}
