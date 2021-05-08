describe('Employee', () => {
    it("throws an Error if no properties are passed", () => {
        expect(() => {
            new Employee();
        }).toThrow(console.log(error))
    })
})

it('stuff', () => {
    expect(generateReport()).toMatchSnapshot();
})