interface IButtonProps {
    description: string
    onClickSubmitButton: () => void
    isLastChange: boolean
    resoultLastChange: string
}

export const ButtonForm = ({
    description,
    onClickSubmitButton,
    isLastChange,
    resoultLastChange
}: IButtonProps) => {

    return (
        <div className="form-container">
            <div className="form-container__title">
            </div>
            <div className="form-container__checkbox-form">
                <button className="form-container__button-form" onClick={onClickSubmitButton}>
                    {description}
                </button>
                <div className="container-description-button-form">

                    {isLastChange && <div className="description-button__last-change">
                        {resoultLastChange}
                    </div>}
                </div>
            </div>
            <div className="form-container__description">
            </div>
        </div>
    )
}