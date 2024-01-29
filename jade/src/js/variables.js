const elementDOM_var = {
  tabs: document.querySelectorAll('.tab-button'),
  mainContainer: document.getElementById('main'),
  overlay: document.getElementById('overlay'),
  put: document.getElementById('put'),
  change: document.getElementById('change'),
}

const expense_var = {
  noteForm: document.querySelector('#form'),
  allNoteInput: document.querySelectorAll('#note-input'),
  currencyElement: document.querySelector('.expense-field__info-currency'),
  removeButton: () => document.querySelectorAll('.expense-field__button_remove'),
  editButton: () => document.querySelectorAll('.expense-field__button_edit'),
  filterButton: () => document.querySelector('.expense-field__button_filter'),
  filterBlock: () => document.getElementById('filter'),
}

const convert_var = {
  fromSelect: () => document.getElementById('from'),
  toSelect: () => document.getElementById('to'),
  inputValue: () => document.getElementById('value'),
  convertForm: () => document.querySelector('.convert__form'),
  convertValue: () => document.querySelector('.convert__value'),
  convertCurrency: () => document.querySelector('.convert__currency'),
  switchButton: () => document.querySelector('.switch-button'),
  store: {
    url: 'https://v6.exchangerate-api.com/v6/9c6242bd7e216a4a71fe397b',
    from: '',
    to: '',
    amount: '',
  },
}

const home_var = {
  chartLinear: () => document.querySelectorAll('.chart__linear'),
  timeSelect: () => document.getElementById('time'),
  statisticsContent: () => document.getElementById('statistics'),
  chartHTML: () => document.getElementById('chart'),
  titleCategory: () => document.querySelector('.statistics__title'),
  homeDataValueEl: () => document.querySelectorAll('.data__value'),
  currencySelect: () => document.getElementById('currency'),
}
