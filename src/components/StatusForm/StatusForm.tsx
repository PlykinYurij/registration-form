interface IStatusProps {
    register: any
    type: string
    title?: string
    description?: string
    name: string
    statusText: string
    isActiveStatus: boolean
}

export const StatusForm = ({
    register,
    type,
    title,
    description,
    name,
    statusText,
    isActiveStatus
}: IStatusProps) => {

    const inputStatusClasses: Array<string> = ["input-status-form"]
    const blockStatusClasses: Array<string> = ["block-status"]

    if (isActiveStatus) {
        inputStatusClasses.push("is-active-input")
        blockStatusClasses.push("is-active-block")
    }

    //stopPropogation не работает
    const handleClickInput = (event: React.MouseEvent) => {
        event.stopPropagation()
    }

    return (
        <div className="form-container form-container__status-form">

            <div className="form-container__title">
                {title}
            </div>

            <div className="form-container__input">
                <div className="container-content-status-form">
                    <div className={blockStatusClasses.join(" ")}>
                        <div className="block-status-text">{(!!statusText) ? statusText : "Прежде чем действовать, надо понять"}</div>
                        <div className="block-status-square"></div>
                    </div>
                </div>
                
                <input {...(register(name))}
                    type={type}
                    className={inputStatusClasses.join(" ")}
                    placeholder="напишите статус"
                    onClick={(event) => handleClickInput(event)}
                />
            </div>

            <div className="form-container__description">
                {description}
            </div>

        </div>
    )
}