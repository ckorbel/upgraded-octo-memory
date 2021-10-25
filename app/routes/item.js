import Route from '@ember/routing/route';
import { products } from '../data/products';
export default class ItemRoute extends Route {
  model(params) {
    const { item_id } = params;
    console.log(products, item_id);
    return products.find(({ id }) => id === item_id);
  }
}
