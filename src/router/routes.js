export default [
    {
        path: '/',
        component: () => import('../views/Layout'),
        children: [
            {
                path: '/',
                name: 'home',
                meta: {
                    componentName: 'Home',
                    keepAlive: true
                },
                component: () => import('../views/Home')
            },
            {
                path: '/singin',
                name: 'singin',
                meta: {
                    componentName: 'SingIn',
                    keepAlive: true
                },
                component: () => import('../views/SingIn')
            },
            {
                path: '/about',
                name: 'about',
                meta: {
                    componentName: 'About',
                    keepAlive: true
                },
                component: () => import('../views/About')
            },
            {
                path: '/404',
                name: '404',
                meta: {
                    componentName: 'NotFound',
                    keepAlive: true
                },
                component: () => import('../views/NotFound')
            },
        ]
    },
    {
        path: '*',
        redirect: '/404'
    }
]
