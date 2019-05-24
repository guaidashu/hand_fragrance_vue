let validate = {
    emailValidate(email) {
        let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        return reg.test(email)
    },
    phoneValidate(phone) {
        let isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
        return isPhone.test(phone)
    }
};


export default validate;
