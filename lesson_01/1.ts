interface State {
  name: string;
  capital: string;
}

const states: State[] = [
  { name: 'bytrustu', capital: 'Montgomery' },
  { name: 'bytrustu1', capital: 'Juneau' },
  { name: 'bytrustu2', capital: 'Phoenix' },
]

for (const state of states) {
  console.log(state.capital)
}
