import React from 'react';
import { useField, Form, FormikProps, Formik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../../atoms/Input/Input';
import { Button } from '../../atoms/Button/Button';

// eslint-disable-next-line node/no-unsupported-features/es-syntax,react/prop-types
const MyTextField = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <>
            <Input {...field} {...props} placeholder={label} />

            {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
        </>
    );
};
const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const FormContact = () => (
    <div>
        <h1>My Form</h1>
        <Formik
            initialValues={{
                email: '',
                name: '',
                phone: '',
                description: '',
            }}
            validationSchema={Yup.object({
                name: Yup.string().required('Wymagane!'),
                description: Yup.string().max(200, 'Maksymalna ilość znaków to 200').required('Wymagane!'),
                email: Yup.string().email('Nieprawidłowy adres email').required('Wymagane!'),
                phone: Yup.string().matches(phoneRegExp, 'Numer telefonu jest nieprawidłowy').required('Wymagane!'),
            })}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
                actions.resetForm();
            }}
        >
            {(props) => (
                <Form>
                    <MyTextField name="name" type="text" label="Imię" />
                    <MyTextField name="email" type="text" label="Email" />
                    <MyTextField name="phone" type="phone" label="Numer telefonu" />
                    <MyTextField name="description" type="text" label="Opis" />
                    <Button type="submit">Submit</Button>
                </Form>
            )}
        </Formik>
    </div>
);

export default FormContact;
