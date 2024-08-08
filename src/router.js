import { createRouter, createWebHistory } from "vue-router"

import ProductsList from './pages/products/ProductsList.vue'
import CartList from './pages/cart/CartList.vue'
import OrderForm from './pages/cart/OrderForm.vue'
import UserAuth from './pages/auth/UserAuth.vue'
import UserAccount from './pages/account/UserAccount.vue'
import EditProduct from './pages/account/EditProduct.vue'
import EditForm from './pages/account/EditForm.vue'
import AddProduct from './pages/account/AddProduct.vue'
import RemoveProduct from './pages/account/RemoveProduct.vue'
import NotFound from './pages/NotFound.vue'
import store from './store/index.js'

const router = createRouter({
  history: createWebHistory('/ces-store/'),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList, meta: { requiresAuth: true } },
    { path: '/cart', component: CartList, meta: { requiresAuth: true } },
    { path: '/order', component: OrderForm, meta: { requiresAuth: true } },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/account', component: UserAccount, meta: { requiresAuth: true } },
    { path: '/edit_product', component: EditProduct, meta: { requiresAuth: true } },
    {
      path: '/edit_product/:id',
      component: EditForm,
      props: true,
      meta: { requiresAuth: true }
    },
    { path: '/add_product', component: AddProduct, meta: { requiresAuth: true } },
    { path: '/remove_product', component: RemoveProduct, meta: { requiresAuth: true } },
    { path: '/:notFound(.*)', component: NotFound },

  ]
})

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/products')
  } else {
    next()
  }
})

export default router;