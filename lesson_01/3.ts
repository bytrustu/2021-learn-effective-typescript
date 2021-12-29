function asNmber(val: number | string): number {
  return typeof val === 'string' ? Number(val) : val;
}

const item = asNmber('10');
console.log(item);
console.log(typeof item);
