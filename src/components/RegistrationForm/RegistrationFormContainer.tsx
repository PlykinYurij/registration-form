import { useState, useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { IRegistrationFormFields } from "../../types/types"
import { emailValidation, passwordValidation, cheсkPasswordValidation } from "../../utils/validations/validation"
import { ButtonForm } from "../ButtonForm/ButtonForm"
import { CheckboxForm } from "../CheckboxForm/CheckboxForm"
import { Header } from "../Header/Header"
import { InputForm } from "../InputForm/InputForm"
import { SelectedForm } from "../SelectedForm/SelectedForm"
import { StatusForm } from "../StatusForm/StatusForm"
import { useCities } from "../../hooks/useCities"

export const FormContainer: React.FC = () => {
    const [isActiveStatus, setIsActiveStatus] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors, isValid }, reset, watch } = useForm<IRegistrationFormFields>({
        mode: "onSubmit"
    })

    const { cities } = useCities()
    const statusText = watch("status")
    const passwordWatch = watch("password")
    const dataPerson = { namePerson: "Человек", idPerson: 3596941 }
    const cheсkPasswordСorrectness = cheсkPasswordValidation(passwordWatch)
    const [date, setDate] = useState<Date>()
    const [formatDate, setFormatDate] = useState<string>()

    useEffect(() => {                                      
        const dayWithMonth = date?.toLocaleString('ru', {
            month: 'long',
            day: 'numeric',
        })
        const fullYear = date?.getFullYear()
        const timeNow = date?.toLocaleTimeString("ru")
        setFormatDate(`последние изменения ${dayWithMonth} ${fullYear} в ${timeNow}`)
    }, [date])

    function onClickSubmitButton() { 
        if (isValid) {
            setDate(new Date())
        }
    }

    const onSubmit: SubmitHandler<IRegistrationFormFields> = (data) => {
        const output = {
            status: data.status,
            city: data.city || cities[0].city,
            email: data.email,
            password: data.password,
            subscription: data.subscription
        }
        console.log(JSON.stringify(output))
        reset()
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            handleSubmit(onSubmit)()
        }}>

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
                setIsActiveStatus={setIsActiveStatus}
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
                validation={cheсkPasswordСorrectness}
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
                isLastChange={date}
                onClickSubmitButton={onClickSubmitButton}
                resoultLastChange={formatDate}
                description="Изменить"
            />

        </form>
    )
}