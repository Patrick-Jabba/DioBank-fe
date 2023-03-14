export default interface IAppContext {
  user: string,
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void
}