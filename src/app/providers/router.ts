import { createRouter, createWebHistory } from 'vue-router'
import ClaimsListPage from 'pages/claims-list'

const temp = { template: '<div>test</div>' }

export const router = createRouter({
  //@ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'claims-list',
      component: ClaimsListPage,
      children: [
        {
          path: '',
          name: 'my-claims',
          component: () => import('pages/claims-list/my-claims'),
          props: true
        },
        {
          path: 'all',
          name: 'all-claims',
          component: () => import('pages/claims-list/all-claims'),
          props: true
        }
      ]
    },
    {
      path:'/client/:clientId',
      name:'client',
      component : () => import('pages/edit-claim'),
      props: true,
      children: [
        {
          path: ':claimId',
          name: 'edit-claim',
          component: () => import('features/edit-claim/form.vue'),
          props: true
        }
      ]
    }
  ]
    /*{
      path: '/claim',
      name: 'create-claim',
      component: () => import('pages/create-claim')
    }
  ]*/
})


