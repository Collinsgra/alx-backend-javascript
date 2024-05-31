export default function signUpUser(firstName, lastName) {
  const prom = Promise.resolve({ firstName: `${firstName}`, lastName: `${lastName}` });
  return prom;
}
