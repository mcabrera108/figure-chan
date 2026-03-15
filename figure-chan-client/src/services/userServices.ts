export async function registerUserAPI(
  username: string,
  email: string,
  password: string,
) {
  const requestOptions = {
    mode: "cors",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  };

  const response = await fetch(
    "http://localhost:3000/register",
    requestOptions as RequestInit,
  );

  return response;
}
export async function loginUserAPI(username: string, password: string) {
  const requestOptions = {
    mode: "cors",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    credentials: "include",
  };

  const response = await fetch(
    "http://localhost:3000/login",
    requestOptions as RequestInit,
  );

  return response;
}
export async function getUserAccountSettingsAPI(username: string) {
  const requestOptions = {
    mode: "cors",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };

  const response = await fetch(
    `http://localhost:3000/settings/account/${username}`,
    requestOptions as RequestInit,
  );

  return response;
}
export async function getUserProfileAPI(username: string) {
  const requestOptions = {
    mode: "cors",
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  };

  const response = await fetch(
    `http://localhost:3000/profile/${username}`,
    requestOptions as RequestInit,
  );

  return response;
}

export async function logoutUserAPI() {
  const requestOptions = {
    mode: "cors",
    method: "POST",
    credentials: "include",
  };

  const response = await fetch(
    `http://localhost:3000/logout`,
    requestOptions as RequestInit,
  );

  return response;
}
