x = rand(3, 8, 1);
y = 0;
z = 0;
indexing_error = 0;
try
y = x(end+0:-3:end-2,end-2:end-5,[1]);
catch
indexing_error = 1;
end
save('-mat', 'result.mat', 'x', 'y', 'z', 'indexing_error')
