import LoginForm from "../Components/LoginForm"
import {withFormik} from "formik";
import validateForm from "Utils/validate"


export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),

    validate: values => {
        const errors = {};
        validateForm({isAuth: true, values, errors});
        return errors;
    },

    handleSubmit: (values, {setSubmitting}) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(true);
        }, 1000);

    },

    displayName: 'LoginForm', // helps with React DevTools
})(LoginForm);
;
