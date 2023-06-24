import * as yup from 'yup';

const joinSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().min(18).max(100).required(),
    location: yup.string().required(),
    genderIdentity: yup.string().required(),
    leadSource: yup.string().required(),
    socialLink: yup.string().required(),
});

export default joinSchema;
