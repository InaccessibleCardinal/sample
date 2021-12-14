
type SomeArgs = {
  username: string;
  password: string;
}
export default function someServiceCall({username, password}: SomeArgs) {
  return Promise.resolve(true);
}