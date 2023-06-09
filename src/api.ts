import IUserData from "./interfaces/IUserData"

const conta: IUserData = {
  email: 'patrick@email.com',
  password: '123456',
  name: 'Patrick Monteiro',
  balance: 200,
  id: 1
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 1000)
})