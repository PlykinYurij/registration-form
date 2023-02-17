import { InputProps } from "../../types/types"
import "./InputForm.scss"

export const InputForm = ({ register, type, validation, errors, title, description, name }: InputProps) => {
    const inputFormClasses: Array<string> = ["inputForm"]
    if ((errors?.[type]) !== undefined) {
       inputFormClasses.push("error")
    }
    return <div className="form-container">
        <div className="form-container__title">
            {title}
        </div>
        <div className="form-container__input">
            <input {...(register(name, validation))} type={type} className={inputFormClasses.join(" ")} />
            {errors?.[type] &&
                <div className="form-container__input__error">
                    {errors[type].message}
                </div>}
        </div>
        <div className="form-container__description">
            {description}
        </div>
    </div>
}