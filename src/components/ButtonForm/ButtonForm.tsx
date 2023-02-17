export const ButtonForm = ({ children, description }: any) => {
    return <div className="form-container">
        <div className="form-container__title">
        </div>
        <div className="form-container__checkbox-form">
            <button className="form-container__button-form">{children}</button>
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