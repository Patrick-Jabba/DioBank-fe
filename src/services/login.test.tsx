import login from "./login";

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
  ...jest.requireActual('react') as any,
  useContext: () => ({
    setIsLoggedIn: mockSetIsLoggedIn
  })
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

describe('login', () => {
  const mockEmail = 'patrick@email.com'
  it('should show an alert with welcome message when the email is valid', async () => {
    await login(mockEmail);
    expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
    expect(mockNavigate).toHaveBeenCalledWith('/conta/1')
  })
  
  it('should not show a message of welcome without the user email', async () => {
    await login(mockEmail)
    expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
    expect(mockNavigate).toHaveBeenCalledWith('/conta/1')
  })

  it('should show an error when email is invalid', async () => {
    await login('patrick@email.comm')
    expect(mockSetIsLoggedIn).not.toHaveBeenCalled()
  })
})