import React from 'react'
const One1 = React.lazy(()=> import('./views/components/one/one_1/One1'))
const One2 = React.lazy(()=> import('./views/components/one/one_2/One2'))
const One3 = React.lazy(()=> import('./views/components/one/one_3/One3'))
const One4 = React.lazy(()=> import('./views/components/one/one_4/One4'))
const One5 = React.lazy(()=> import('./views/components/one/one_5/One5'))
const One6 = React.lazy(()=> import('./views/components/one/one_6/One6'))

const routes = [
    {path: '/one/one1', name: 'One1', component: One1},
    {path: '/one/one2', name: 'One1', component: One2},
    {path: '/one/one3', name: 'One1', component: One3},
    {path: '/one/one4', name: 'One1', component: One4},
    {path: '/one/one5', name: 'One1', component: One5},
    {path: '/one/one6', name: 'One1', component: One6}

]
export default routes;