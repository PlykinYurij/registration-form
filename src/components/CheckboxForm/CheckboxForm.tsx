interface ICheckboxProps {
    register: any
    type: string
    title: string
    description: string
    name: string
    id: number
}

export const CheckboxForm = ({
    register,
    title,
    name,
    type,
    description,
    id
}: ICheckboxProps) => {
    return (
        <div className="form-container">
            <div className="form-container__title">
                {title}
            </div>
            <div className="form-container__checkbox-form">
                <input {...(register(name))}
                    type={type}
                    className={"checkbox-form"}
                    id={`${id}`}
                />
                <div className="container-description-checkbox-form">
                    <div className="container-description-checkbox-form__container-label">
                        <label htmlFor={`${id}`} className="label-checkbox-form">
                            {description}
                        </label>
                    </div>
                </div>
            </div>
            <div className="form-container__description">
            </div>
        </div>
    )
}