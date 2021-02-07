import LoginForm from '../components/LoginForm';
import {connect} from 'react-redux';
import { withFormik } from "formik";
import store from "../../../redux/store";
import  {userActions} from "../../../redux/actions";
import validateForm from '../../../utils/validate'




const LoginFormContainer  = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: "",
        password: ""
    }),
    validate: values => {
        let errors = {};

        validateForm({ isAuth: true, values, errors });

        return errors;
    },
    handleSubmit: (values,{ setSubmitting, props }) => {
        store.dispatch(userActions.fetchUserLogin(values))
            .then(({status}) => {
                if (status ==='success') {
                    setTimeout(() => {
                        props.history.push('/')
                    }, 1000);
                }

                setSubmitting(false);
            })

    },
    displayName: "LoginForm"
})(LoginForm);

export default LoginFormContainer;