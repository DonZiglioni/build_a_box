import React, { useState } from "react";
import { useFormik } from 'formik';
import './BoxForm.css';
import { v4 as uuidv4 } from 'uuid';

//  **  Form for selecting color, width, and height of newly added boxes  **
const BoxForm = ({ addBox }) => {
    //  **  Initialize Formik Forms  **
    const formik = useFormik({
        initialValues: {
            id: '',
            color: '#000000',
            height: '50',
            width: '50',
        },
        onSubmit: values => {
            setFormData(JSON.stringify(values, null, 2));
            addBox(uuidv4(), values.color, `${values.height}px`, `${values.width}px`);
            formik.resetForm()
        },
        onChange: values => {
            setFormData(JSON.stringify(values, null, 2));
        }
    });

    const [formData, setFormData] = useState(formik.initialValues);

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="color"><b>Color: </b> <i>{formik.values.color}</i>
                    <input
                        type="color"
                        id="color"
                        name="color"
                        onChange={formik.handleChange}
                        value={formik.values.color}
                    />
                </label>
                <div className="ranges">
                    <div className="rangeH">
                        <label htmlFor="height"><u>Height</u></label>
                        <p>{formik.values.height}</p>
                        <input
                            type="range"
                            id="height"
                            name="height"
                            min="50"
                            max="150"
                            step="10"
                            onChange={formik.handleChange}
                            value={formik.values.height}
                        />
                    </div>
                    <div className="rangeW">
                        <label htmlFor="width"><u>Width</u></label>
                        <p>{formik.values.width}</p>
                        <input
                            type="range"
                            id="width"
                            name="width"
                            min="50"
                            max="150"
                            step="10"
                            onChange={formik.handleChange}
                            value={formik.values.width}
                        />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default BoxForm;