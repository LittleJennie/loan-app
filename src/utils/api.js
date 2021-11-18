import { onSubmit } from "@react-mf/api";

export function submitApp(app) {
  console.log('*** app: ', app)
  return onSubmit(app);
}
