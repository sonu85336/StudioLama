import * as Yup from "yup";
const today = new Date();
today.setDate(today.getDate() - 1)
export const formSchema = Yup.object({
    name:Yup.string().min(3).max(20).required("Please enter your name").matches(/^[a-zA-Z0-9]+$/, '* This field cannot contain white space and special character'),
    email:Yup.string().email().required("Please enter your email"),
    date_of_birth:Yup.date()
    .max(today, 'Date cannot be in the future and current')
    .required('Date is required'),
    mobile:Yup.number().required("Please enter your mobile number"),
born:Yup.number().min(20).max(36).required('Please enter weeks')
})