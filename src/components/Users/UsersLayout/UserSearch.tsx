import React, {FC} from "react";
import {useFormik} from "formik";

const SearchForm: FC = () => {
    const form = useFormik({
        initialValues: {
            name: '',
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
        },
    });

    return (
        <form onSubmit={form.handleSubmit}>
            <label htmlFor='name'/>
            <input
                id='name'
                type='text'
                name='name'
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.name}
            />
            {form.touched.name && form.errors.name ? <div>{form.errors.name}</div> : null}
            <button type='submit'>Submit</button>
        </form>
    )
}

export default SearchForm