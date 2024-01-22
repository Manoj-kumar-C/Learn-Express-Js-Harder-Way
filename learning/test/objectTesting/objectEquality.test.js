test('object Equality', ()=>{
    const obj1 = {a:1, b:2};

    const obj2 = {b:2, a:1};

    expect(obj1).toEqual(obj2);
})