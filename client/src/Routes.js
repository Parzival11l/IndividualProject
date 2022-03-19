import Admin from "./page/Admin"
import Auth from "./page/Auth"
import Personal from "./page/Personal"
import Test from "./page/Test"
import { ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PERSON_ROUTE, REGISTRATION_ROUTE, TEST_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: <Admin />
    },
    {
        path: PERSON_ROUTE,
        component: <Personal />
    }
]

export const publicRoutes = [
    {
         path: TEST_ROUTE,
         component: <Test />
    },
    {
        path: REGISTRATION_ROUTE,
        component: <Auth />
    },
    {
        path: LOGIN_ROUTE,
        component: <Auth />
    },
    {
        path: HOME_ROUTE,
        component: <Auth />
    }
     
]