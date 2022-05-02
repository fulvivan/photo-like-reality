import context from "./context";
import { validateToken, validateData } from "./helpers/validators";
/**
 * Updates the user's profile in the application.
 *
 * @param {string} token The token sent by the server when the user is authorized.
 * @param {object} data An object that contains password and can contain new username, new name, new email and new password.
 *
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
export default function modifyUser(token, data) {
  validateToken(token);
  validateData(data);

  return (async () => {
    const response = await fetch(`${context.API_USER}/api/users`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      return;
    } else {
      const { error } = await response.json();
      throw new Error(error);
    }
  })();
}
