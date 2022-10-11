const Employee = require('../lib/Employee')

describe('Employee', () => {
    describe('info', () => {

        it('should return employee info', () => {
            const employee = new Employee('Michael', '1', 'mscott@dundermifflin.com')

            expect(employee.name).toBe('Michael')
            expect(employee.id).toBe('1')
            expect(employee.email).toBe('mscott@dundermifflin.com')
        })
    })

    describe('getName', () => {

        test('should get the employee name', () => {
          let employee = new Employee('Dwight', '3', 'dwight@dundermifflin')
          let spy = jest.spyOn(employee, 'getName').mockImplementation(() => 'Dwight')  

          expect(employee.getName()).toBe('Dwight')

          spy.mockRestore()
        })
    })

    describe('getID', () => {

        test('should get the employee ID', () => {
          let employee = new Employee('Dwight', '3', 'dwight@dundermifflin')
          let spy = jest.spyOn(employee, 'getID').mockImplementation(() => '3')  

          expect(employee.getID()).toBe('3')

          spy.mockRestore()
        })
    })

    describe('getEmail', () => {

        test('should get the employee email', () => {
          let employee = new Employee('Dwight', '3', 'dwight@dundermifflin')
          let spy = jest.spyOn(employee, 'getEmail').mockImplementation(() => 'dwight@dundermifflin')  

          expect(employee.getEmail()).toBe('dwight@dundermifflin')

          spy.mockRestore()
        })
    })

    describe('getRole', () => {

        test('should get the employee role', () => {
          let employee = new Employee('Dwight', '3', 'dwight@dundermifflin')
          let spy = jest.spyOn(employee, 'getRole').mockImplementation(() => 'Employee')  

          expect(employee.getRole()).toBe('Employee')

          spy.mockRestore()
        })
    })
})