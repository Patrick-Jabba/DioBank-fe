const conta = {
  email: 'patrick@email.com',
  password: '123456',
  name: 'Patrick Monteiro'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 1000)
})