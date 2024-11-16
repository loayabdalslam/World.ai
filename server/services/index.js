import users from './users/users.js';
import nations from './nations/nations.js';
import messages from './messages/messages.js';
import roles from './roles/roles.js';
import achievements from './achievements/achievements.js';

export default function (app) {
  app.configure(users);
  app.configure(nations);
  app.configure(messages);
  app.configure(roles);
  app.configure(achievements);
}