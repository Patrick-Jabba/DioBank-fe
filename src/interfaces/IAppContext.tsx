export default interface IAppContext {
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void
}