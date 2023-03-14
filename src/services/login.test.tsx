import { login } from "./login";

describe('login', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert
  const mockEmail = 'patrick@email.com'
  it('should show an alert with welcome message when the email is valid', async () => {
    await login(mockEmail);
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
  })

  it('should not show a message of welcome without the user email', async () => {
    await login(mockEmail)
    expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo')
  })

  it('should show an error when email is invalid', async () => {
    await login('patrick@email.comm')
    expect(mockAlert).toHaveBeenLastCalledWith('Email inválido')
  })
})