import { useRef, useState } from "react"
import useOnClickOutside from "../../hooks/useOnClickOutside"

interface IStatusProps {
    register: any
    type: string
    title?: string
    description?: string
    name: string
    statusText: string
    isActiveStatus: boolean
    setIsActiveStatus: (c: boolean) => void
}

export const StatusForm = ({
    register,
    type,
    title,
    description,
    name,
    statusText,
    isActiveStatus,
    setIsActiveStatus
}: IStatusProps) => {

    const inputStatusClasses: Array<string> = ["input-status-form"]
    const blockStatusClasses: Array<string> = ["block-status"]

    if (isActiveStatus) {
        inputStatusClasses.push("is-active-input")
        blockStatusClasses.push("is-active-block")
    }

    const tooltipRef = useRef(null)

    const handleClickOutside = () => {
        setIsActiveStatus(false)
    }

    useOnClickOutside(tooltipRef, handleClickOutside)

    return (
        <div className="form-container form-container__status-form">

            <div className="form-container__title">
                {title}
            </div>

            <div className="form-container__input">
                <div className="container-content-status-form">
                    <div className={blockStatusClasses.join(" ")}>
                        <div className="block-status-text">{(!!statusText)
                            ? statusText
                            : "Прежде чем действовать, надо понять"}
                        </div>
                        <div className="block-status-square"></div>
                    </div>
                </div>
                <div ref={tooltipRef}>
                    <input {...(register(name))}
                        type={type}
                        className={inputStatusClasses.join(" ")}
                        placeholder="напишите статус"
                    />
                </div>
            </div>

            <div className="form-container__description">
                {description}
            </div>

        </div>
    )
}