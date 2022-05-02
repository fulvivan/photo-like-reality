import context from "./context";
import { validateToken, validatePassword } from "./helpers/validators";
/**
 * Unregisters the user in the application.
 *
 * @param {string} token The token sent by the server when the user is authorized.
 * @param {string} password The password of the user to be unregistered.
 *
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
export default function unregisterUser(token, password) {
  validateToken(token);
  validatePassword(password);

  return (async () => {
    const response = await fetch(`${context.API_USER}/api/users`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      return;
    } else {
      const { error } = await response.json();
      throw new Error(error);
    }
  })();
}
