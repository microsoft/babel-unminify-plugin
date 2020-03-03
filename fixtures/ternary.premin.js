a ? b : c;

const c = a ? b : c;

(() => a ? b : c)();

(() => {
  return a ? b : c;
})();

a ? b : (c ? d : (e ? f : g));

while (null) a ? b : c;
