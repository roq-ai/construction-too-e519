import * as yup from 'yup';

export const storeValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  phone_number: yup.string().nullable(),
  email: yup.string().nullable(),
});
