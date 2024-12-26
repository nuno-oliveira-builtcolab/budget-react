import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { closeEditModal } from '../actions/modals.actions'
import useEntryDetails from '../hooks/useEntryDetails'
import EntryForm from './EntryForm'

function ModalEdit({ 
  isOpen, 
  description,
  setDescription,
  value,
  setValue,
  isExpense,
  setIsExpense
}) {
  const dispatch = useDispatch()
  const entryUpdate = useEntryDetails(description, value, isExpense)
  return (
    <Modal open={isOpen}>
        <Modal.Header>Edit entry</Modal.Header>
        <Modal.Content>
            <EntryForm 
              description={description} 
              value={value}
              isExpense={isExpense}
              setDescription={setDescription}
              setValue={setValue}
              setIsExpense={setIsExpense}
            />
        </Modal.Content>
        <Modal.Actions>
            <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
            <Button onClick={() => entryUpdate.updateEntry(entryUpdate.id)} primary >Ok</Button>
        </Modal.Actions>
    </Modal>
  )
}

export default ModalEdit