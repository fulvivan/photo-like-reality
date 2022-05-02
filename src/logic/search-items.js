import context from "./context";
import { validateToken, validateQuery } from "./helpers/validators";
/**
 * Searches for items that meet the query criteria.
 *
 * @param {string} query The search criteria entered by the user in the search form.
 *
 * @throws {TypeError} When any of the arguments does not match the correct type.
 */
export default function searchItems(token, query) {
  if (token) validateToken(token);

  validateQuery(query);
  //Questa funzione sotto, async, si autoesegue. Si capisce dalle parentesi vuote alla fine e dalla parentesi prima di async. La possiamo chiamare una funzione selfie....
  return (async () => {
    if (token) {
      const response = await fetch(`${context.API_USER}/api/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //Se entra qui vuol dire che il token c'è e controlla se non è valido legge la riga sotto, else riga 28.
      //Se il tokrn non c'è va fino alla riga 57.
      if (!response.ok) {
        const { error } = response.json();

        throw new Error(error);
      } else {
        const user = await response.json();

        const { favs = [] } = user;

        const res2 = await fetch(
          `${context.API_PHOTOS}/search/photos?query=${query}&per_page=20&client_id=${context.CLIENT_ID}`,
          {
            method: "GET",
            Authorization: `${context.CLIENT_ID}`,
          }
        );
        //Se sopra il token era ok estrae dalla risposta i favoriti e chiede le foto alla api.
        //Se la risposta delle foto è ok restituisce le foto comprese della memoria dei favs.
        if (res2.ok) {
          const resultsContainer = await res2.json();

          const photos = resultsContainer.results;

          photos.forEach((photo) => {
            photo.isFav = favs.includes(photo.id);
          });

          return resultsContainer;
        } else {
          const { error } = res2.json();

          throw new Error(error);
        }
      }
      //Else sotto è un'altra funzione che viene letta se il token che viene chiesto sopra non c'è. Quindi restituisce le foto senza la memoria del fav.
    } else {
      const res2 = await fetch(
        `${context.API_PHOTOS}/search/photos?query=${query}&per_page=20&client_id=${context.CLIENT_ID}`,
        {
          method: "GET",
          Authorization: `Client-ID ${context.CLIENT_ID}`,
        }
      );

      if (res2.ok) {
        const resultsContainer = await res2.json();
        console.log(resultsContainer);

        return resultsContainer;
      } else {
        const { error } = res2.json();

        throw new Error(error);
      }
    }
  })();
}
