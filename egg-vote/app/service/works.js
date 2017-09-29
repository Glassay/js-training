/**
 * 2017-9-29 Jifeng Cheng
 */

'use strict';
const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  class Works extends app.Service {
    * listvote() {
      let res;
      try {
        const listvote = knex.select('wechat', 'vnumber').from('works');
        yield app.mysql.query(listvote.toString());
        res = yield app.mysql.get('works', listvote);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * listworks() {
      let res;
      try {
        const listworks = knex('works').where({
          state: 'true',
        }).select('wechat', 'pic_url');
        yield app.mysql.query(listworks.toString());
        res = yield app.mysql.get('works', listworks);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * vote() {
      try {
        const times = knex.select('vtime').from('user');
        if (times <= 3) {
          const a = yield app.mysql.beginTransaction();
          try {
            const vote = knex('vnumber').insert({
              user: 'vtime',
            });
            yield a.commit();
          } catch (e) {
            yield a.rollback();
            this.ctx.logger.error(e);
            return false;
          }
          yield app.mysql.query(vote.toString());
          yield app.mysql.get('works', vote);
        }
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * upload(a) {
      try {
        yield app.mysql.insert('works', a);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Works;
};
