// Домашнее задание: Реализовать программу для решения квадратного уравнения.
// (a, b, c) (x1, x2, no roots)
const a = process.env.a;
const b = process.env.b;
const c = process.env.c;

const example = `${a}x^2 + ${b}x + ${c} = 0`;
console.log(example);
console.log("a =", a, "b =", b, "c =", c);
const discriminant = b * b - 4 * a * c;
console.log("D = b^2 - 4 * a * c =", discriminant);

if (discriminant >= 0) {
  const disc = Math.sqrt(discriminant);
  const x1 = -(b - disc) / (2 * a);
  const x2 = (Math.abs(b) - disc) / (2 * a);
  console.log("x1=", x1, "x2=", x2);
} else {
  console.log("D < 0, корней нет.");
  process.exit(1);
}
process.exit(0);
