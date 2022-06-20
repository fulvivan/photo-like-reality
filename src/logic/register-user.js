import context from "./context";
import {
  validateEmail,
  validatePassword,
  validateName,
  validateUsername,
} from "./helpers/validators";
/**
 * Signs up a user in the application.
 *
 * @param {string} name The name of the user to be signed up.
 * @param {string} username The username of the user to be signed up.
 * @param {string} email The email of the user to be signed up.
 * @param {string} password The password of the user to be signed up.
 *
 * @throws {TypeError} When any of the arguments does not match the correct type.
 * @throws {Error} When any of the arguments does not contain the correct format.
 */
export default function RegisterUser(name, username, email, password) {
  validateName(name);
  validateUsername(username);
  validateEmail(email);
  validatePassword(password);

  return (async () => {
    const response = await fetch(`${context.API_USER}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, username, email, password }),
    });

    if (response.ok) {
      return;
    } else {
      const { error } = await response.json();
      throw new Error(error);
    }
  })();
}
