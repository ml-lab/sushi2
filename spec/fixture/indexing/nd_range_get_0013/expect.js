if (indexing_error.get() > 0) {expect(() => x.get($M.jsa2mat([1, 2, 2, 1, 1], false, 'int32'),$M.colon($M.end-3,11,27))).toThrow();} else {var t = x.get($M.jsa2mat([1, 2, 2, 1, 1], false, 'int32'),$M.colon($M.end-3,11,27)); if (typeof(t) === 'number') {t = $M.jsa2mat([[t]]);}; expect($M.isequal(t, y)).toBeTruthy();}