import * as compose from 'koa-compose';
import UsersRouter from './users.router';

const routers = [
  UsersRouter
];

const middleware = [];
routers.forEach((router) => {
  middleware.push(router.routes());
  middleware.push(router.allowedMethods());
});


export default compose(middleware);
