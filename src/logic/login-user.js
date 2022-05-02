import context from "./context";
import { validateUsername, validatePassword } from "./helpers/validators";
/**
 * Logs a user in the application.
 *
 *@param {string} username The username of the user to be logged in.
 * @param {string} password The password of the user to be logged in.
 *
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
export default function loginUser(username, password) {
  validateUsername(username);
  validatePassword(password);

  return (async () => {
    const response = await fetch(`${context.API_USER}/api/users/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const { token } = await response.json();

      return token;
    } else {
      const { error } = await response.json();
      throw new Error(error);
    }
  })();
}
