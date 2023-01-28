import { Events } from "./data/models/Events";
import { Users } from "./data/models/Users";

(async() => {
  await Users.sync({ force: true });
  await Events.sync({ force: true });
})();