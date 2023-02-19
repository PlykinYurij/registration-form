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

export const Header = ({
    title,
    dataPerson,
    description,
    isActiveStatus,
    setIsActiveStatus
}: IHeaderProps) => {

    return <div className="form-container form-container__header">
        <div className="form-container__title">
            <div className="header-form__title">{title}</div>
        </div>
        <div className="form-container__input">
            <div className="header-form__name">{dataPerson.namePerson} № {dataPerson.idPerson}</div>
        </div>
        <div className="form-container__description" onClick={() => setIsActiveStatus(!isActiveStatus)}>
            <div className="header-form__description">{description}</div>
        </div>
    </div>
}