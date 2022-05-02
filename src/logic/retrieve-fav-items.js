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
        let items = []

        await Promise.all(favs.map(async (id, index) => {
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
//  console.log(item);
            if (!item) return new Error(`no photo found with id ${id}`);

            items[index] = item

            if (index === favs.length - 1) {
              items = items.map(item => ( { ...item, isFav: true } ))
          }
      }

        }))
       return items
         
      } else throw new Error('No favorites found in your profile')
    } 
  })();
}

// const xhr = new XMLHttpRequest();

// xhr.onload = () => {
//   const { status, responseText } = xhr;

//   if (status === 401 || status === 404) {
//     const response = JSON.parse(responseText);

//     const message = response.error;

//   } else if (status === 200) {
//     const response = responseText;

//     const user = JSON.parse(response);

//     const { favs = [] } = user;

//     if (favs.length) {
//       let count = 0;
//       const items = [];

//       favs.forEach((id, index) => {
//         const xhr2 = new XMLHttpRequest();

//         xhr2.onload = () => {
//           const { status, responseText } = xhr2;

//           if (status === 200) {
//             const item = JSON.parse(responseText);

//             if (!item)
//               return (new Error(`no item found with id ${id}`));

//             count++;

//             items[index] = item;

//             if (count === favs.length) {
//               items.forEach((item) => (item.isFav = true));

//               // callback(null, items);
//             }
//           }
//         };

//         xhr2.open("GET", `https://localhost/items/${id}`);

//         xhr2.send();
//       });
//     };
//   }
// };

// xhr.open("GET", "https://localhost/users");

// xhr.setRequestHeader("Authorization", `Bearer ${token}`);

// xhr.send();
// }
