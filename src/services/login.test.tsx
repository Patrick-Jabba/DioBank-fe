import {login} from "./login";

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
    const response = await login(mockEmail);
    expect(response).toBeTruthy()
  })

  it('should show an error when email is invalid', async () => {
    const response = await login('email@invalido.com')
    expect(response).toBeFalsy()
  })
})