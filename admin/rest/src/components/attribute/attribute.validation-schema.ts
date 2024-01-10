import * as yup from 'yup';

export const attributeValidationSchema = yup.object().shape({

    values: yup.array().of(
        yup.object().shape({
            value: yup.string().required('value is required'),
            meta: yup.string().required('meta is required'),
        })
    ),
});