import * as yup from 'yup'

function equalTo(ref, msg) {
  return this.test({
    name: 'equalTo',
    exclusive: false,
    message: msg || '${path} must be the same as ${reference}',
    params: {
      reference: ref.path
    },
    test: function (value) {
      return value === this.resolve(ref)
    }
  })
}

yup.addMethod(yup.string, 'equalTo', equalTo)
yup.addMethod(yup.string, 'sequence', function (funcList) {
  return this.test(async (value, context) => {
    try {
      for (const func of funcList) {
        await func().validate(value)
      }
    } catch ({ message }) {
      return context.createError({ message })
    }
    return true
  })
})
export const signup_schema = yup
  .object({
    name: yup.string().required('Vui lòng nhập tên'),
    phone_number: yup
      .string()
      .matches(/(0[3|5|7|8|9])+([0-9]{8})\b/, 'Số điện thoại ko hợp lệ')
      .required('Vui lòng nhập sdt'),
    dob: yup.string().required('Vui lòng chọn ngày sinh'),
    password: yup
      .string()
      .matches(/^.{8,}$/, 'Mật khẩu có ít nhất 8 kí tự')
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^`&*()_+])[A-Za-z\d!@#$%^`&*()_+]{8,}$/,
        'Mật khẩu chứa ít nhất 1 chữ hoa và 1 kí tự đặc biệt'
      )
      .required('Vui lòng nhập mật khẩu'),
    address: yup.string().required('Vui lòng nhập địa chỉ'),
    password_confirmation: yup
      .string()
      .required('Vui lòng nhập lại mật khẩu')
      .equalTo(yup.ref('password'), 'Mật khẩu nhập lại không khớp')
  })
  .required()

export const signin_schema = yup.object({
  phone_number: yup
    .string()
    .sequence([
      () => yup.string().required('Vui lòng nhập sdt'),
      () => yup.string().matches(/(0[3|5|7|8|9])+([0-9]{8})\b/, 'Số điện thoại ko hợp lệ')
    ]),

  password: yup.string().required('Vui lòng nhập mật khẩu')
})
export const deposit_schema = yup.object({
  money: yup.string().test('type', 'Số tiền ko hợp lệ', (val) => !isNaN(val))
})
export const trans_money_schema = yup.object({
  money: yup
    .string()
    .required('Vui lòng nhập số tiền')
    .test('type', 'Số tiền ko hợp lệ', (val) => !isNaN(val)),
  bank_account_des: yup.number().required('Vui lòng nhập số tài khoản'),
  bank_id: yup.number(),
  note: yup.string()
})
