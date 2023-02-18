const REQUIRED_FIELD_PASSWORD = "Укажите пароль"
const REQUIRED_FIELD_EMAIL = "Укажите E-mail"
const MIN_LENGTH_PASSWORD = 5

export const passwordValidation = {
    required: REQUIRED_FIELD_PASSWORD,
    validate: (value: string) => {
        if (value.length < MIN_LENGTH_PASSWORD) {
            
            return "Используйте не менее 5 символов"
        }

        return true
    }
}

export const emailValidation = {
    required: REQUIRED_FIELD_EMAIL,
    pattern: {
        value: /^[\w-.]+@[\w-]+\.[a-z]{2,4}$/,
        message: "Неверный E-mail"
    }
}