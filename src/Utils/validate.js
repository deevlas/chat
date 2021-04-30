// eslint-disable-next-line import/no-anonymous-default-export
export default ({isAuth, values, errors}) => {

   const rules = {
       email: (value) => {
           if (!value) {
               errors.email = 'Введите E-mail';
           } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
               errors.email = 'Неверный E-mail';
           }
       },
       password: (value) => {
           if (!value) {
               errors.password = 'Введите пароль';
           } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(value)) {
               errors.password = isAuth ? 'Неверный пароль' : 'Слишком легкий пароль';
           }
       },
       name: (value) => {
           if (!value) {
               errors.name = 'Введите имя';
           } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$/.test(value)) {
               errors.name = isAuth ? 'Неверное имя' : 'Слишком короткое имя';
           }
       }
};

    Object.keys(values).forEach(
        key => rules[key] && rules[key](values[key]))

};

