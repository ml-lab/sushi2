if (indexing_error.get() > 0) {expect(() => x.set(1,2,3, y)).toThrow();} else {x.set(1,2,3, y); expect($M.isequal(x, z)).toBeTruthy();}