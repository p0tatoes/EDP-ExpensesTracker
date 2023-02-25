// * Variables
var income, expense, totalBalance
income = expense = totalBalance = 0

// * Text Fields
const nameField = document.getElementById('nameField')
const priceField = document.getElementById('priceField')

// * Radio Buttons
const expenseRadio = document.getElementById('expenseRadio')
const incomeRadio = document.getElementById('incomeRadio')

// * Buttons
const resetButton = document.getElementById('resetButton')
const addButton = document.getElementById('addButton')

// * Text
const incomeAmount = document.getElementById('incomeAmount')
const expenseAmount = document.getElementById('expenseAmount')
const balanceAmount = document.getElementById('balanceAmount')

// * Error List
const errors = document.getElementById('errors')

// * Expense Card
const expenseCard = document.getElementById('record')

// * Event Handlers
resetButton.addEventListener('click', () => {
	income = expense = totalBalance = 0
	incomeAmount.innerHTML = income
	expenseAmount.innerHTML = expense
	balanceAmount.innerHTML = totalBalance
	expenseCard.innerHTML = ''
})

addButton.addEventListener('click', () => {
	errors.classList.add('hidden')

	let expenseName = nameField.value
	let expensePrice = parseInt(priceField.value)
	const newCard = document.createElement('h3')

	if (expenseRadio.checked && expenseName && expensePrice >= 0) {
		expense += expensePrice
		expenseAmount.innerHTML = expense
		newCard.classList.add(
			'font-bold',
			'text-white',
			'text-center',
			'py-2',
			'bg-red-500',
			'rounded-md'
		)
	} else if (incomeRadio.checked && expenseName && expensePrice >= 0) {
		income += expensePrice
		incomeAmount.innerHTML = income
		newCard.classList.add(
			'font-bold',
			'text-white',
			'text-center',
			'py-2',
			'bg-green-500',
			'rounded-md'
		)
	} else {
		let errorMsg = ''
		if (!expenseName) {
			errorMsg += '<li>"Name" should not be empty</li>'
		}
		if (expensePrice < 0 || !expensePrice) {
			errorMsg += '<li>Numbers should not be empty or less than 0</li>'
		}
		if (!expenseRadio.checked && !incomeRadio.checked) {
			errorMsg += '<li>Please choose a type</li>'
		}
		errors.innerHTML = errorMsg
		errors.classList.remove('hidden')
		return
	}
	totalBalance = income - expense
	balanceAmount.innerHTML = totalBalance
	newCard.innerHTML = `${expenseName} - ₱${expensePrice}`
	expenseCard.appendChild(newCard)
})
