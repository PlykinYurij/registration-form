import { useForm, SubmitHandler } from "react-hook-form"
import { RegisrtationFields } from "../../types/types"
import { emailValidation, passwordValidation } from "../../validation"
import { ButtonForm } from "../ButtonForm/ButtonForm"
import { CheckboxForm } from "../CheckboxForm/CheckboxForm"
import { Header } from "../Header/Header"
import { InputForm } from "../InputForm/InputForm"
import { SelectedForm } from "../SelectedForm/SelectedForm"
import { StatusForm } from "../StatusForm/StatusForm"
import json from "./cities.json"

export const FormContainer: React.FC = () => {

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<RegisrtationFields>({
        mode: "onBlur"
    })

    const onSubmit: SubmitHandler<RegisrtationFields> = (data) => {
        console.log(data)
        reset()
    }

    const statusText = watch("status")

    const cities = json.map(j => {
        return {
            ...j,
            population: Number(j.population)
        }
    })

    const filteredCitiesArray = () => {
        const array = []
        let max = cities.reduce((acc, curr) => acc.population > curr.population ? acc : curr);
        array.push(max)
        cities
            .filter(city => city.population !== max.population)
            .filter(city => city.population > 50000)
            .map(city => array.push(city))
        return array
    }

    const filteredAndSortedArrayCities = filteredCitiesArray()

    return <form onSubmit={handleSubmit(onSubmit)}>

        <Header
            title="Здравствуйте,"
            name="Человек №3596941"
            description="Сменить статус"
        />

        <StatusForm
            register={register}
            type="text"
            name="status"
            statusText={statusText}
        />

        <SelectedForm
            title="Ваш город"
            description=""
            register={register}
            name="city"
            options={filteredAndSortedArrayCities}

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
            validation={passwordValidation}
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
            description="принимать актуальную информацию на емайл"
        />

        <ButtonForm>Изменить</ButtonForm>

    </form>
}