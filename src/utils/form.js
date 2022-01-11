export const submitForm = async(formEl) => {
  if (!formEl) return
  const validate = await formEl.validate()
  return validate
}

export const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
