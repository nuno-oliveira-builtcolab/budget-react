import './App.css'
import { useEffect, useState } from 'react'
import { Container } from 'semantic-ui-react'
import MainHeader from './components/MainHeader'
import NewEntryForm from './components/NewEntryForm'
import DisplayBalance from './components/DisplayBalance'
import DisplayBalances from './components/DisplayBalances'
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit'
import { useSelector } from 'react-redux'

function App() {
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [entry, setEntry] = useState({})

  const { isOpen, id } = useSelector((state) => state.modals)
  const entries = useSelector((state) => state.entries)

  useEffect(() => {
    const index = entries.findIndex(entry => entry.id === id)
    setEntry(entries[index])
    // eslint-disable-next-line
  }, [isOpen, id])

  useEffect(() => {
    let totalIncomes = 0
    let totalExpenses = 0
    entries.map(entry => {
      if (entry.isExpense) {
        return totalExpenses += Number(entry.value)
      }
      return totalIncomes += Number(entry.value)
    })
    setTotal(totalIncomes - totalExpenses)
    setIncomeTotal(totalIncomes)
    setExpenseTotal(totalExpenses)
  }, [entries])

  return (
    <Container>
      <MainHeader title={'Budget'} />
      <DisplayBalance title={'Your Balcance:'} value={total} size={'small'} />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title={'History'} type={'h3'} />
      <EntryLines entries={entries} />

      <MainHeader title={'Add new transaction'} type={'h3'} />
      <NewEntryForm />
      <ModalEdit isOpen={isOpen} {...entry} />
    </Container>
  )
}

export default App;