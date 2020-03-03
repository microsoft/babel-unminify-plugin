if (a) {
  b;
} else {
  c;
}

const c = a ? b : c;

(() => a ? b : c)();

(() => {
  return a ? b : c;
})();

if (a) {
  b;
} else {
  if (c) {
    d;
  } else {
    if (e) {
      f;
    } else {
      g;
    }
  }
}

while (null) {
  if (a) {
    b;
  } else {
    c;
  }
}
