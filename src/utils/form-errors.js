/* eslint-disable */

/**
 * @param {*} formComponentInstance instância vue do component que contém os componentes de formulário
 * @param {*} formErrors objeto de erros retornados pelo backend
 * Pra isso funcionar, os componentes de formulário deve conter a propriedade ref="inputName", sendo o inputName o
 * mesmo valor dado à propriedade name o componente. Ex.:
 * <InputUi name='foo_name' ref='foo_name' type='text' />
 * 
 */
const setErrors = (formComponentInstance, formErrors) => {
    let errors = Object.entries(formErrors);
    let inputs = formComponentInstance.$refs;

    errors.forEach((v) => {
        let name = v[0];
        let error = v[1][0];
        let inpt = inputs[name] ?? null;

        if (inpt)
            inpt.inputInvalid = true;
    });
};

/**
 * @param {*} formComponentInstance instância vue do componente que contém os componentes de formulário
 */
const clearErrors = (formComponentInstance) => {
    let inputs = Object.values(formComponentInstance.$refs);

    inputs.forEach((input) => {
        input.inputInvalid = false;
    })
};

export default {
    setErrors,
    clearErrors
}