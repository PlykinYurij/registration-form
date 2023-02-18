import "./InputForm.scss"

interface IInputProps {
    register: any
    type: string
    validation: object
    errors: any
    title: string
    description: string
    name: string
}

export const InputForm = ({
    register,
    type,
    validation,
    errors,
    title,
    description,
    name
}: IInputProps) => {
    const inputFormClasses: Array<string> = ["inputForm"]
    if ((errors?.[name]) !== undefined) {
        inputFormClasses.push("error")
    }

    return (
        <div className="form-container">

            <div className="form-container__title">
                {title}
            </div>

            <div className="form-container__input">
                <input
                    {...(register(name, validation))}
                    type={type}
                    className={inputFormClasses.join(" ")}
                    id={name}
                />

                {errors?.[name] &&
                    <div className="form-container__input__error">
                        {errors[name].message}
                    </div>}
            </div>

            <div className="form-container__description">
                <div className="desctiption-text">
                    {description}
                </div>
            </div>

        </div>
    )
}