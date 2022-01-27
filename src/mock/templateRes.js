export const successRes = (data) => {
  return {
    data,
    msg: 'SUCCESS',
    status: '1001'
  }
}

export const errorRes = (data) => {
  return {
    data,
    msg: 'ERROR',
    status: '1002'
  }
}

