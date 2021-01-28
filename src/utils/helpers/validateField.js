const  ValidateFielding = (touched, errors, key) => {
    if (touched[key]) {
        if (errors[key])  {
            return 'error';
        } else {
            return 'success';
        }
    } else {
        return  '';
    }
}



export default ValidateFielding;