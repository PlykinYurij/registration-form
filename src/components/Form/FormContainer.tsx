import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { IRegistrationFields } from "../../types/types"
import { emailValidation, passwordValidation } from "../../validation"
import { ButtonForm } from "../ButtonForm/ButtonForm"
import { CheckboxForm } from "../CheckboxForm/CheckboxForm"
import { Header } from "../Header/Header"
import { InputForm } from "../InputForm/InputForm"
import { SelectedForm } from "../SelectedForm/SelectedForm"
import { StatusForm } from "../StatusForm/StatusForm"
import { useCities } from "../../hooks/useCities"


export const FormContainer: React.FC = () => {
    const [isActiveStatus, setIsActiveStatus] = useState<boolean>(false)
    const [isLastChange, setIsLastChange] = useState<boolean>(false)
    const [timeNow, setTimeNow] = useState<String>("")
    const [dateNow, setDateNow] = useState<String>("")

    const { register, handleSubmit, formState: { errors, isValid }, reset, watch } = useForm<IRegistrationFields>({
        mode: "onSubmit"
    })

    const { cities } = useCities()
    const statusText = watch("status")
    const passwordWatch = watch("password")
    const dataPerson = { namePerson: "Человек", idPerson: 3596941 }
    const resultNowDate = `последние изменения ${dateNow} в ${timeNow}`

    const onSubmit: SubmitHandler<IRegistrationFields> = (data) => {
        delete data.checkPassword;
        console.log( JSON.stringify(data))
        reset()
    }

    // не придумал как вынести эту валидацию из за переменной которая используется

    const cheсkPasswordValidation = {
        validate: (value: string) => {
            if (value !== passwordWatch) {
                return "Пароли не совпадают"
            }
            return true
        }
    }

    // хотел вынести в отдельную компоненту не получилось из за того что функия вызывается в Button 

    function onClickSubmitButton() {
        if (isValid) {
            const date = new Date()
            const dayWhithMonth = date.toLocaleString('ru', {
                month: 'long',
                day: 'numeric',
            })

            const fullYear = date.getFullYear()
            const time = date.toLocaleTimeString("ru")

            setTimeNow(time)
            setDateNow(`${dayWhithMonth} ${fullYear}`)

            setIsLastChange(true)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <Header
                title="Здравствуйте,"
                dataPerson={dataPerson}
                description="Сменить статус"
                isActiveStatus={isActiveStatus}
                setIsActiveStatus={setIsActiveStatus}
            />

            <StatusForm
                register={register}
                type="text"
                name="status"
                statusText={statusText}
                isActiveStatus={isActiveStatus}
            />

            <SelectedForm
                title="Ваш город"
                description=""
                register={register}
                name="city"
                options={cities}

            />

            <div className="line-hight-block"></div>

            <InputForm
                register={register}
                type="password"
                name="password"
                errors={errors}
                validation={passwordValidation}
                title="Пароль"
                description="Ваш новый пароль должен содержать не менее 5 символов"
            />

            <InputForm
                register={register}
                type="password"
                name="checkPassword"
                errors={errors}
                validation={cheсkPasswordValidation}
                title="Пароль еще раз"
                description="Повторите пароль, пожалуйста, это обезопасит вас с нами на случай ошибки."
            />

            <div className="line-hight-block"></div>

            <InputForm
                register={register}
                type="email"
                name="email"
                errors={errors}
                validation={emailValidation}
                title="Электронная почта"
                description="Можно изменить адрес, указанный при регистрации"
            />

            <CheckboxForm
                register={register}
                type="checkbox"
                name="subscription"
                title="Я согласен"
                description="принимать актуальную информацию на емейл"
                id={1}
            />

            <ButtonForm
                isLastChange={isLastChange}
                onClickSubmitButton={onClickSubmitButton}
                resoultLastChange={resultNowDate}
                description="Изменить"
            />

        </form>
    )
}