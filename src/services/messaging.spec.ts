import { Messaging } from './messaging'

const createSut = () => {
  return new Messaging;
}

describe('Persistency' ,() => {
  afterEach(() => jest.clearAllMocks())

  it('should  return undefined', () => {
    // sut : System under test
    const sut = createSut()
    expect(sut.sendMessage('teste')).toBeUndefined()
  });

  it('should call console.log once', () => {
    // sut : System under test
    const sut = createSut()
    const consoleSpy = jest.spyOn(console, 'log')

    sut.sendMessage('teste')
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
  it('should call console.log with "Mensagem enviada:" msg', () => {
    // sut : System under test
    const sut = createSut()
    const consoleSpy = jest.spyOn(console, 'log')

    sut.sendMessage('teste')
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });
})