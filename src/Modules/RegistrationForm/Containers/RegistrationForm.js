import RegistrationForm from "../Components/RegistrationForm"
import {withFormik} from "formik";
import validateForm from "Utils/validate"



export default withFormik({

    enableReinitialize: true,

    mapPropsToValues: () => ({
        email: '',
        name: '',
        password: '',
        password2: ''
    }),

    validate: values => {
        const errors = {};

        validateForm({isAuth: false, values, errors});

        return errors;
    },

    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(true);
        }, 1000);

    },

    displayName: 'RegistrationForm', // helps with React DevTools
})(RegistrationForm);;
