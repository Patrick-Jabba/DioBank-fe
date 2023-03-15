import { changeLocalStorage, createLocalStorage, getAllLocalStorage, createUserAtLocalStorage } from "./storage"

const dioBank = {
  login: false
}

const userData = {
  email: 'patrick@email.com',
  name: 'Patrick',
  password: '123456',
  balance: 200,
  id: 1
}

describe('storage', () => {
  const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
  it('should return the object at the localStorage', () => {
    const getItem = jest.spyOn(Storage.prototype, 'getItem')
    getAllLocalStorage()
    expect(getItem).toHaveBeenCalledWith('diobank')
  })
  
  it('should create an object at the localStorage', () => {
    createLocalStorage()
    expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
  })

  it('should change the value of the object at the localStorage', () => {
    changeLocalStorage(dioBank)
    expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
  })

  it('should insert the user data in the local storage', () => {
    createUserAtLocalStorage(userData)
    expect(mockSetItem).toHaveBeenCalledWith('userData', JSON.stringify(userData))
  })
})