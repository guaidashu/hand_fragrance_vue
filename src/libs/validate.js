let validate = {
    emailValidate(email) {
        let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        return reg.test(email)
    },
    phoneValidate(phone) {
        let isPhone = /^[1][3,4,5,7,8][0-9]{9}$/;
        return isPhone.test(phone)
    }
};


export default validate;
