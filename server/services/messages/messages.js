import { NeDB } from '@feathersjs/nedb';
import path from 'path';

export default function (app) {
  const dbPath = app.get('nedb');
  const Model = new NeDB({
    filename: path.join(dbPath, 'messages.db'),
    autoload: true
  });

  app.use('messages', {
    async find(params) {
      return Model.find(params.query);
    },
    async create(data, params) {
      return Model.create(data);
    }
  });

  app.service('messages').hooks({
    before: {
      create: [
        async context => {
          context.data.createdAt = new Date();
          return context;
        }
      ]
    }
  });
}