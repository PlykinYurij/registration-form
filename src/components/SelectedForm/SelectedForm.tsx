import { ICities } from "../../types/types"

interface ISelectProps {
    title: string
    description?: string
    register: any
    name: string
    options: ICities[]
}

export const SelectedForm = ({
    title,
    description,
    register,
    name,
    options
}: ISelectProps) => {

    return (
        <div className="form-container">

            <div className="form-container__title">
                {title}
            </div>

            <div className="form-container__input">
                <select {...(register(name))}>
                    {options.map(option =>
                        <option
                            key={option.city}
                            value={option.city}
                        >
                            {option.city}
                        </option>
                    )}
                </select>
            </div>

            <div className="form-container__description">
                {description}
            </div>

        </div>
    )
}