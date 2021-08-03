import React, { useCallback, useMemo } from "react";
import Form from "../components/Form";
import { useForm } from "../../../hooks";

const FormPageContainer = () => {
  const [formValues, handleChange, handleReset] = useForm({
    text: "",
    email: "",
    password: "",
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    [formValues]
  );

  const isSubmitDisabled = useMemo(() => {
    const values = Object.values(formValues);

    return values.findIndex((value) => value === "") !== -1;
  }, [formValues]);

  /*const [formValues, setValues] = useState({
    text: "",
    email: "",
    password: "",
  });

  const handleChange = useCallback(
    (event) => {
      const { name, value } = event.target;

      setValues({
        ...formValues,
        [name]: value,
      });
    },
    [formValues]
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    [formValues]
  );*/

  return (
    <Form
      formValues={formValues}
      handleChange={handleChange}
      handleReset={handleReset}
      handleSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
    />
  );
};

export default FormPageContainer;
