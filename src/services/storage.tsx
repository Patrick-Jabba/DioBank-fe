import IUserData from "../interfaces/IUserData"
interface IDioBank {
  login: boolean
}

const dioBank = {
  login: false
}


export const getAllLocalStorage = ():string | null => {
  return localStorage.getItem('diobank')
}

export const createLocalStorage = ():void => {
  localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDioBank): void => {
  localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const createUserAtLocalStorage = (userData: IUserData): void => {
  localStorage.setItem('userData', JSON.stringify(userData))
}

export const getUserFromLocalStorage = (): string | null => {
  return localStorage.getItem('userData')
}