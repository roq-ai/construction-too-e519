import * as yup from 'yup';

export const invoiceValidationSchema = yup.object().shape({
  amount_due: yup.number().integer().nullable(),
  payment_status: yup.string().required(),
  due_date: yup.date().nullable(),
  rental_id: yup.string().nullable().required(),
});
