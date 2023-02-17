import { ICheckboxForm } from "../../types/types"

export const CheckboxForm = ({ register, title, name, type, description }: ICheckboxForm) => {
    return <div className="form-container">
        <div className="form-container__title">
            {title}
        </div>
        <div className="form-container__checkbox-form">
            <input {...(register(name))} type={type} className={"checkbox-form"} />
            <div className="container-description-checkbox-form">
                <div>
                    {description}
                </div>
                </div>
        </div>
        <div className="form-container__description">
        </div>
    </div>
}