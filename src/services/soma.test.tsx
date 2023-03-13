import { soma, multiplica } from './soma';

describe('soma', () => {
  it('deve somar 1 ao número informado', () => {
    const value = soma(1);

    expect(value).toBe(2)
  })

  it('should multiply a number times two', () => {
    const value = multiplica(2, 2);

    expect(value).toBe(4);
  })

  it('should multiply a number times three', () => {
    const vlaue = multiplica(2, 3)

    expect(vlaue).toBe(6)
  })

  it('should return an error with a value different of two or three', () => {
    const value = multiplica(2, 4);

    expect(value).toBe('Multiplicador não aceito')
  })
})