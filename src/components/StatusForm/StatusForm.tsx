import { useGlobalContext } from "../../context/isStatusActiveContext"
import { IStatusForm } from "../../types/types"

export const StatusForm = ({ register, type, title, description, name, statusText }: IStatusForm) => {
    const {isActiveStatus} = useGlobalContext()

    const inputStatusClasses: Array<string> = ["input-status-form"]
    if (isActiveStatus) {
        inputStatusClasses.push("is-active-input")
    }

    const blockStatusClasses: Array<string> = ["block-status"]
    if (isActiveStatus) {
        blockStatusClasses.push("is-active-block")
    }

    const handleClickInputStatus = (event: React.MouseEvent) => {
        event.stopPropagation()
    }

    return <div className="form-container form-container__status-form">
        <div className="form-container__title">
            {title}
        </div>
        <div className="form-container__input">
            <div className="container-content-status-form">
                <div className={blockStatusClasses.join(" ")}>
                    <div className="block-status-text">{(!!statusText) ? statusText : "без статуса"}</div>
                    <div className="block-status-square"></div>
                </div>
            </div>
            <input {...(register(name))} 
            type={type} 
            className={inputStatusClasses.join(" ")} 
            onClick={(event) => handleClickInputStatus(event)}
            placeholder="напишите статус"
            />
        </div>
        <div className="form-container__description">
            {description}
        </div>
    </div>
}