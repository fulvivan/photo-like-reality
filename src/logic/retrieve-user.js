import context from "./context";
import { validateToken } from "./helpers/validators";
/**
 * Retrieves the info about the user from the server.
 *
 * @param {string} token The token sent by the server when the user is authorized.
 *
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
export default function retrieveUser(token) {
  validateToken(token);

  return (async () => {
    const response = await fetch(`${context.API_USER}/api/users`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      const { error } = await response.json();
      throw new Error(error);
    }
  })();
}
