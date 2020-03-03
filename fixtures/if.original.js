function foo() {
  return d && f && g();
}

if (a) {
  foo();
}

if (b && c) {
  foo();
}

if (b && (c || d)) {
  foo();
}

if (a || b) {
  foo();
}
