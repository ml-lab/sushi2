if (indexing_error.get() > 0) {expect(() => x.set(2,6, y)).toThrow();} else {x.set(2,6, y); expect($M.isequal(x, z)).toBeTruthy();}