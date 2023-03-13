import { login } from "./login";

describe('login', () => {
  const mockAlert = jest.fn()
  window.alert = mockAlert
  it('should show an alert with welcome message', () => {
    login();
    expect(mockAlert).toHaveBeenCalledWith('Seja bem-vindo!')
  })
})