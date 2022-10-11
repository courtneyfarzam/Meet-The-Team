const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('info', () => {

        it('should return Manager info', () => {
            const manager = new Manager('Michael', '1', 'mscott@dundermifflin.com', '867-5309')

            expect(manager.name).toBe('Michael')
            expect(manager.id).toBe('1')
            expect(manager.email).toBe('mscott@dundermifflin.com')
            expect(manager.phone).toBe('867-5309')
        })
    })

    describe('getOfficeNum', () => {

        test('should get the manager Office number', () => {
          let manager = new Manager('Dwight', '3', 'dwight@dundermifflin', '555-HE-WISHES')
          let spy = jest.spyOn(manager, 'getOfficeNum').mockImplementation(() => '555-HE-WISHES')  

          expect(manager.getOfficeNum()).toBe('555-HE-WISHES')

          spy.mockRestore()
        })
    })

    describe('getRole', () => {

        test('should get the manager role', () => {
          let manager = new Manager('Dwight', '3', 'dwight@dundermifflin')
          let spy = jest.spyOn(manager, 'getRole').mockImplementation(() => 'manager')  

          expect(manager.getRole()).toBe('manager')

          spy.mockRestore()
        })
    })
})