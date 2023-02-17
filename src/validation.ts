const REQUIRED_FIELD_PASSWORD = "Укажите пароль"

export const passwordValidation = {
    required: REQUIRED_FIELD_PASSWORD,
    validate: (value: string) => {
        if (value.length < 5) {
            return "Используйте не менее 5 символов"
        }
        return true
    }
}

export const emailValidation = {
    required: "Укажите E-mail",
    pattern: {
        value: /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/,
        message: "Неверный E-mail"
    }
}

export const checkboxValidation = {
    
}