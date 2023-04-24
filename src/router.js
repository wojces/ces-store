import { createRouter, createWebHistory } from "vue-router"

import ProductsList from './pages/products/ProductsList.vue'
import ProductDetail from './pages/products/ProductDetail.vue'
import CartList from './pages/cart/CartList.vue'
import UserAuth from './pages/auth/UserAuth.vue'
import UserAccount from './pages/account/UserAccount.vue'
import EditProduct from './pages/account/EditProduct.vue'
import AddProduct from './pages/account/AddProduct.vue'
import RemoveProduct from './pages/account/RemoveProduct.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList },
    { path: '/products/:id', component: ProductDetail, props: true },
    { path: '/cart', component: CartList },
    { path: '/auth', component: UserAuth },
    { path: '/account', component: UserAccount, props: true, children: [
      { path: '/edit_product', component: EditProduct },
      { path: '/add_product', component: AddProduct },
      { path: '/remove_product', component: RemoveProduct },
    ] },
    { path: '/:notFound(.*)', component: NotFound },

  ]
})

export default router;