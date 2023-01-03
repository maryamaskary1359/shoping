import React, { useEffect, useState } from 'react'
import EasyEdit from 'react-easy-edit';


export function EditableText(props) {

  const [productGroup, setProductGroup] = useState()
  const [productId, setProductId] = useState()
  const [changedItem, setChangedItem] = useState()

  useEffect(() => {
    setProductGroup(props.productGroup)
    setProductId(props.productId)
    setChangedItem(props.changedItem)
  }, [props.productGroup,props.productId,props.changedItem])

  const cancel = (value) => { console.log('edit price canceled ', value) }



  const onSave = (newValue) => {

    props.onSave({
      newValue,
      productGroup,
      productId,
      changedItem
    })
  }

  return (
    <EasyEdit
      type="text"
      onSave={onSave}
      onCancel={cancel}
      hideSaveButton={true}
      hideCancelButton={true}
      value={props.value}
      attributes={{ name: "awesome-input", id: 1 }}
    />
  );
}
