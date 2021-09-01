import React from 'react';
import * as Yup from "yup";
import { useFormik, FormikHelpers } from "formik";
import Field from '../../forms/field/Field';
import { FC } from 'react';
import { NewVehicle } from '../../../types/vehicle';
import Button from '../../common/button/Button';
import { useAddVehicleMutation } from '../../../services/api';

export interface addVehicleProps {
  disable: () => void;
}

const AddVehicle: FC<addVehicleProps> = ({disable}) => {
  const [addVehicle] = useAddVehicleMutation()
  const schema = Yup.object({
    make: Yup.string().required("Required"),
    model: Yup.string().required("Required"),
    year: Yup.number().required("Required").test(
      "year",
      "Year must be between 1950-2050",
      (value) => {
        if (value === undefined){
          return false
        }
        return value >= 1950 && value <= 2050
      } 
    ),
  });

  const onSubmit = async(values: NewVehicle, formikHelpers: FormikHelpers<NewVehicle>) => {
    formikHelpers.setSubmitting(true)
    addVehicle(values)
    disable()
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    values
  } = useFormik({
    initialValues: {
      make: "",
      model: "",
      year: 2000,
    },
    validationSchema: schema,
    onSubmit
  });

  return(
    <div>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-borderColor p-8 max-w-md">
        <h2 className="text-3xl text-center mb-4">
          Add Vehicle
        </h2>
        <Field
          handleBlur={handleBlur}
          handleChange={handleChange}
          name="make"
          type="text"
          label="Make"
          touched={touched.make}
          error={errors.make}
          value={values.make}
        />
        <Field
          handleBlur={handleBlur}
          handleChange={handleChange}
          name="model"
          type="text"
          label="Model"
          touched={touched.model}
          error={errors.model}
          value={values.model}
        />
        <Field
          handleBlur={handleBlur}
          handleChange={handleChange}
          name="year"
          type="number"
          label="Year"
          touched={touched.year}
          error={errors.year}
          value={values.year}
        />
        <div className="flex justify-center gap-10">
          <Button label="Save" type="submit" primary={true}/>
          <Button label="Cancel" type="button" primary={false} onClick={disable}/>
        </div>
      </form>
    </div>
  )
}

export default AddVehicle;