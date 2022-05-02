function validateId(id) {
  if (typeof id !== "string") throw new TypeError("id is not a string");
  if (!id.trim().length) throw new Error("id is empty or blank");
  if (/\r?\n|\r|\t| /g.test(id)) throw new Error("id has blank spaces");
}

function validateName(name) {
  if (typeof name !== "string") throw new TypeError("name is not a string");
  if (!name.trim().length) throw new Error("name is empty or blank");
  if (name.trim() !== name) throw new Error("blank spaces around name");
}

// function validateItemId(item_id) {
//   if (typeof item_id !== 'string') throw new TypeError('item_id is not a string')
//   if (!item_id.trim().length) throw new Error('item_id is empty or blank')
//   if (/\r?\n|\r|\t| /g.test(item_id)) throw new Error('item_id has blank spaces')
// }

function validateUsername(username) {
  if (typeof username !== "string")
    throw new TypeError("username is not a string");
  if (!username.trim().length) throw new Error("username is empty or blank");
  if (/\r?\n|\r|\t| /g.test(username))
    throw new Error("username has blank spaces");
  if (username.length < 4)
    throw new Error("username has less than 4 characters");
}

function validateEmail(email) {
  if (typeof email !== "string")
    throw new TypeError(email + " is not a string");
  if (!email.trim().length) throw new Error("email is empty or blank");
  if (/\r?\n|\r|\t| /g.test(email)) throw new Error("email has blank spaces");
  if (
    !String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  )
    throw new Error("email has invalid ");
}

function validatePassword(password) {
  if (typeof password !== "string")
    throw new TypeError("password is not a string");
  if (!password.trim().length) throw new Error("password is empty or blank");
  if (/\r?\n|\r|\t| /g.test(password))
    throw new Error("password has blank spaces");
  if (password.length < 8)
    throw new Error("password has less than 8 characters");
}

function validateNewPassword(newPassword) {
  if (typeof newPassword !== "string")
    throw new TypeError("new password is not a string");
  if (!newPassword.trim().length)
    throw new Error("new password is empty or blank");
  if (/\r?\n|\r|\t| /g.test(newPassword))
    throw new Error("new password has blank spaces");
  if (newPassword.length < 8)
    throw new Error("new password has less than 8 characters");
}

function validateToken(token) {
  if (typeof token !== "string")
    throw new TypeError(`${token} is not a string`);
  if (!/[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)$/.test(token))
    throw new Error("invalid token");
}

function validateData(data) {
  if (typeof data !== "object" || data.constructor.name !== "Object")
    throw new TypeError("data is not an object");

  const { newName, newUsername, newEmail, password, newPassword } = data;

  validatePassword(password);

  if (newName) validateName(newName);

  if (newUsername) validateUsername(newUsername);

  if (newEmail) validateEmail(newEmail);

  if (newPassword) validateNewPassword(newPassword);
}

function validateCallback(callback) {
  if (typeof callback !== "function")
    throw new TypeError("callback is not a function");
}

function validateString(string) {
  if (typeof string !== "string")
    throw new TypeError(`${string} is not a string`);
  if (!string.trim().length) throw new Error("string is empty or blank");
}

function validateNumber(number) {
  if (typeof number !== "number")
    throw new TypeError(`${number} is not a number`);
}

function validateQuery(query) {
  if (typeof query !== "string")
    throw new TypeError(`${query} is not a string`);
}

module.exports = {
  validateId,
  validateName,
  validateUsername,
  validateEmail,
  validatePassword,
  validateNewPassword,
  // validateItemId,
  validateToken,
  validateData,
  validateCallback,
  validateString,
  validateNumber,
  validateQuery,
};
