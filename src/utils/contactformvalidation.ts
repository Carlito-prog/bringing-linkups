import * as Yup from 'yup';
import { formTypes } from '../components/Page/ContactUs';

export const ContactFormSchema = Yup.object<formTypes>({
    fullName: Yup.string()
    .required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string()
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid').required('Phone Number required').max(10, 'Must be 10 characters or less'),
})
