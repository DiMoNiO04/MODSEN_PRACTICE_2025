enum EModalColumnEditActions {
  TOGGLE_MODAL = 'TOGGLE_MODAL_COLUMN_EDIT',
}

const toggleModaColumnEdit = () => ({
  type: EModalColumnEditActions.TOGGLE_MODAL,
});

export { EModalColumnEditActions, toggleModaColumnEdit };
