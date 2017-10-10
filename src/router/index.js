import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const index = r => require.ensure([], () => r(require('@/pages/index')), 'index')
const wealth = r => require.ensure([], () => r(require('@/pages/wealth')), 'wealth')
const business = r => require.ensure([], () => r(require('@/pages/business')), 'business')
/* start 会员中心 路由*/
const member = r => require.ensure([], () => r(require('@/pages/member')), 'member')
const myOrder = r => require.ensure([], () => r(require('@/pages/member/order/myOrder')), 'myOrder')
const myRefund = r => require.ensure([], () => r(require('@/pages/member/order/myRefund')), 'myRefund')
const myRating = r => require.ensure([], () => r(require('@/pages/member/order/myRating')), 'myRating')
const myFMS = r => require.ensure([], () => r(require('@/pages/member/order/myFMS')), 'myFMS')
const myReceipt = r => require.ensure([], () => r(require('@/pages/member/order/myReceipt')), 'myReceipt')

const myCenter = r => require.ensure([], () => r(require('@/pages/member/center/myCenter')), 'myCenter')
const myCart = r => require.ensure([], () => r(require('@/pages/member/center/myCart')), 'myCart')
const myDetailPage = r => require.ensure([], () => r(require('@/pages/member/center/detailPage')), 'detailPage')
const mySubmitOrder = r => require.ensure([], () => r(require('@/pages/member/center/mySubmitOrder')), 'mySubmitOrder')
const myFav = r => require.ensure([], () => r(require('@/pages/member/center/myFav')), 'myFav')
const myOrders = r => require.ensure([], () => r(require('@/pages/member/center/myOrders')), 'myOrders')
const myTeam = r => require.ensure([], () => r(require('@/pages/member/center/myTeam')), 'myTeam')
const myCode = r => require.ensure([], () => r(require('@/pages/member/center/myCode')), 'myCode')
const myBusiness = r => require.ensure([], () => r(require('@/pages/member/center/myBusiness')), 'myBusiness')
const myCoupon = r => require.ensure([], () => r(require('@/pages/member/center/myCoupon')), 'myCoupon')
const myLog = r => require.ensure([], () => r(require('@/pages/member/center/myLog')), 'myLog')

const myProfile = r => require.ensure([], () => r(require('@/pages/member/profile/myProfile')), 'myRrofile')
const mySupplier = r => require.ensure([], () => r(require('@/pages/member/profile/supplier')), 'supplier')
const myAddress = r => require.ensure([], () => r(require('@/pages/member/profile/myAddress')), 'myAddress')
const myEditAddress = r => require.ensure([], () => r(require('@/pages/member/profile/myEditAddress')), 'myEditAddress')
const mySystem = r => require.ensure([], () => r(require('@/pages/member/profile/mySystem')), 'mySystem')
const myVersion = r => require.ensure([], () => r(require('@/pages/member/profile/version')), 'version')
const myAboutUs = r => require.ensure([], () => r(require('@/pages/member/profile/aboutUs')), 'aboutUs')
/* end 会员中心 路由*/

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      // redirect: '/index'
      redirect: '/member'
    },
    {
      path:'/index',
      component:index
    },
    {
      path:'/wealth',
      component:wealth
    },
    {
      path:'/business',
      component:business
    },
    {
      path: '/member',
      component: member,
      children:[
          {
            path: 'myorder',
            component: myOrder,
            children:[
              {
                path:'myrefund',
                component:myRefund
              },
              {
                path:'myrating',
                component:myRating
              },
              {
                path:'myfms',
                component:myFMS
              },
              {
                path:'myreceipt',
                component:myReceipt
              }
            ]
          },
          {
            path: 'mycenter',
            component: myCenter,
            children:[
              {
                path:'mycart',
                component:myCart,
                children:[
                  {
                    path:'submitorder',
                    component:mySubmitOrder
                  },
                  {
                    path:'detail',
                    component:myDetailPage
                  }
                ]
              },
              {
                path:'myfav',
                component:myFav
              },
              {
                path:'order',
                component:myOrders
              },
              {
                path:'team',
                component:myTeam
              },
              {
                path:'qrcode',
                component:myCode
              },
              {
                path:'business',
                component:myBusiness
              },
              {
                path:'coupon',
                component:myCoupon
              },
              {
                path:'log',
                component:myLog
              }
            ]
          },
          {
            path: 'myprofile',
            component: myProfile
          },
          {
            path: 'supplier',
            component: mySupplier
          },
          {
            path: 'myaddress',
            component: myAddress,
            children:[
              {
                path:'edit',
                component:myEditAddress
              }
            ]
          },
          {
            path:'mysystem',
            component:mySystem,
            children:[
              {
                path:'version',
                component:myVersion
              },
              {
                path:'about',
                component:myAboutUs
              }
            ]
          }
      ]
    }
  ]
})