import { useProductStore } from '@components/templates/products/store/useProductStore';
import axios, { AxiosError } from 'axios';
import { parseCookies, setCookie, destroyCookie } from 'nookies'

const apis = axios.create({
  baseURL: 'http://localhost:3003',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${parseCookies()['token']}`
  }
});

interface Login {
  login: string
  password: string
}

export function apisFetch() {
  return {
    async login(data: Login) {
      const response = await apis.post('/sessions/create', data);
      setCookie(
        {},
        'token',
        response.data.token,
        {
          // maxAge: 60 * 60 * 24, // 1 dias
          path: '/',
        })
      setCookie(
        {},
        'user',
        response.data.user,
        {
          maxAge: 60 * 60 * 24, // 1 dias
          path: '/',
        })

      setCookie(
        {},
        'role',
        response.data.role,
        {
          maxAge: 60 * 60 * 24, // 1 dias
          path: '/',
        })

      return response.data
    },

    async listAll() {
      const response = await apis.get('/products/list-all')
      return response.data
    }
  }
}


// async function interceptorOnRejected(error: AxiosError) {
//   if (error.response?.status === 401)
//     toast({ status: 'error', title: 'Sem autorização 😕', duration: 8000, isClosable: true })
//   return Promise.reject(error)
// }
// apis.interceptors.response.use(resp => resp, interceptorOnRejected)