import React from 'react'
const One1 = React.lazy(()=> import('./views/components/one/One1'))
const One2 = React.lazy(()=> import('./views/components/one/One2'))
const One3 = React.lazy(()=> import('./views/components/one/One3'))
const One4 = React.lazy(()=> import('./views/components/one/One4'))
const One5 = React.lazy(()=> import('./views/components/one/One5'))
const One6 = React.lazy(()=> import('./views/components/one/One6'))
const Two1 = React.lazy(()=> import('./views/components/two/Two1'))
const Two2 = React.lazy(()=> import('./views/components/two/Two2'))
const Two3 = React.lazy(()=> import('./views/components/two/Two3'))
const Two4 = React.lazy(()=> import('./views/components/two/Two4'))
const AddOne1 = React.lazy(()=> import('./views/components/one/add/AddOne1'))
const FixOne1 = React.lazy(()=> import('./views/components/one/fix/FixOne1'))
const AddOne3 = React.lazy(()=> import('./views/components/one/add/AddOne3'))
const FixOne3 = React.lazy(()=> import('./views/components/one/fix/FixOne3'))
const AddTwo3 = React.lazy(()=> import('./views/components/two/add/AddTwo3'))
const FixTwo3 = React.lazy(()=> import('./views/components/two/fix/FixTwo3'))
const routes = [
    {path: '/one', exact: true, name: 'One', component: One1},
    {path: '/one/one1', exact: true, name: 'One1', component: One1},
    {path: '/one/one2', name: 'One1', component: One2},
    {path: '/one/one3', exact: true, name: 'One1', component: One3},
    {path: '/one/one4', name: 'One1', component: One4},
    {path: '/one/one5', name: 'One1', component: One5},
    {path: '/one/one6', name: 'One1', component: One6},
    {path: '/one/one1/add', name: 'AddOne1', component: AddOne1},
    {path: '/one/one1/fix', name: 'FixOne1', component: FixOne1},
    {path: '/one/one3/add', name: 'AddOne3', component: AddOne3},
    {path: '/one/one3/fix', name: 'FixOne3', component: FixOne3},

    {path: '/two', exact: true, name: 'two', component: Two1},
    {path: '/two/two1', name: 'Two1', component: Two1},
    {path: '/two/two2', name: 'Two2', component: Two2},
    {path: '/two/two3',exact: true,  name: 'Two3', component: Two3},
    {path: '/two/two4', name: 'Two4', component: Two4},
    {path: '/two/two3/add', name: 'AddTwo3', component: AddTwo3},
    {path: '/two/two3/fix', name: 'FixTwo3', component: FixTwo3},
]
export default routes;