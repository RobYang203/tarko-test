import * as yup from 'yup';

export const formSchema = yup.object().shape({
  first_name:  yup.string().required('please enter first_name'),
  last_name:  yup.string().required('please enter last_name'),
  job:  yup.string().required('please enter job'),
  description:  yup.string().required('please enter description'),
});
