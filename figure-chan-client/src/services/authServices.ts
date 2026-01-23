export default async function authUserToken() {
  const requestOptions = {
    mode: "cors",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };

  const response = await fetch(
    `http://localhost:3000/auth`,
    requestOptions as RequestInit,
  );

  return response;
}
