import { useRef } from "react"
import useOnClickOutside from "../../hooks/useOnClickOutside"

interface IDataPerson {
    namePerson: string
    idPerson: number
}

interface IHeaderProps {
    title: string
    description: string
    dataPerson: IDataPerson
    isActiveStatus: boolean
    setIsActiveStatus: (c: boolean) => void
}

export const Header = ({ title, dataPerson, description, isActiveStatus, setIsActiveStatus }: IHeaderProps) => {

    const tooltipRef = useRef(null)

    const handleClickOutside = () => {
        setIsActiveStatus(false)
    }

    const handleClickInside = () => {
        setIsActiveStatus(!isActiveStatus)
    }

    // с применением хука больше не могу вводить данные в форме

    useOnClickOutside(tooltipRef, handleClickOutside)

    return <div className="form-container form-container__header">
        <div className="form-container__title">
            <div className="header-form__title">{title}</div>
        </div>
        <div className="form-container__input">
            <div className="header-form__name">{dataPerson.namePerson} № {dataPerson.idPerson}</div>
        </div>
        <div className="form-container__description" onClick={() => handleClickInside()} ref={tooltipRef}>
            <div className="header-form__description">{description}</div>
        </div>
    </div>
}