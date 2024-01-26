const {add } = require("./math")


describe('add function ', ()=> {
    it('should add two positive numbers correctly', () => {
        const result1 = add(3, 4);
        expect(result1).toBe(7);
      });


    it('should add the + and - number correctly ', ()=>{
        const result2 = add(3,-2);

        expect(result2).toBe(1);
    })
})