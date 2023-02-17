import { useGlobalContext } from "../../context/isStatusActiveContext"
import { IHeader } from "../../types/types"

export const Header = ({ title, name, description }: IHeader) => {
    const { isActiveStatus, setIsActiveStatus } = useGlobalContext()

    const handleClickWindow = () => {
        setIsActiveStatus(false)
    }
    const handleIsActiveStatus = (event: React.MouseEvent) => {
        event.stopPropagation()
        setIsActiveStatus(!isActiveStatus)
    }

    window.addEventListener("click", handleClickWindow)


    return <div className="form-container form-container__header">
        <div className="form-container__title">
            <div className="header-form__title">{title}</div>
        </div>
        <div className="form-container__input">
            <div className="header-form__name">{name}</div>
        </div>
        <div className="form-container__description" onClick={(event) => handleIsActiveStatus(event)}>
            <div className="header-form__description">{description}</div>
        </div>
    </div>
}