import { login } from "./login";

describe('login', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert
  const mockEmail = 'patrick@email.com'
  it('should show an alert with welcome message', () => {
    login(mockEmail);
    expect(mockAlert).toHaveBeenCalledWith(`Bem vindo ${mockEmail}!`)
  })

  it('should not show a message of welcome withou the user email', () => {
    login(mockEmail)
    expect(mockAlert).not.toHaveBeenCalledWith('Bem vindo')
  })
})