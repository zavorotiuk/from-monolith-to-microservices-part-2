import * as compose from 'koa-compose';
import OrdersRouter from './orders.router';
import InventoryRouter from './inventory.router';

const routers = [
  OrdersRouter,
  InventoryRouter
];

const middleware = [];
routers.forEach((router) => {
  middleware.push(router.routes());
  middleware.push(router.allowedMethods());
});


export default compose(middleware);
