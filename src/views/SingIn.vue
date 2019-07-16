<template>
<v-container fluid
             fill-height>
    <v-layout row
              justify-center
              align-center
              fill-height>
        <v-flex md6>
            <h2>Авторизація</h2>
            <v-form v-model="formValid"
                    ref="form">
                <v-text-field
                    v-model="form.email"
                    :rules="rules.email"
                    label="E-mail"
                    required/>
                <v-text-field
                    v-model="form.password"
                    :rules="rules.password"
                    label="Пароль"
                    required/>
                <p v-if="error"
                   class="red--text">
                    Такого користувача не існує або пароль не вірний
                </p>
                <v-btn @click="validate"
                       class="ml-0 mt-4">
                    Відправити
                </v-btn>
            </v-form>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>

export default {
    name: 'SingIn',
    data() {
        return {
            formValid: false,
            form: {
                email: 'admin@gmail.com',
                password: 'password1'
            },
            rules: {
                email: [
                    v => !!v || 'E-mail є обов\'язковим',
                    v => /\S+@\S+\.\S+/.test(v) || 'Введіть правильний E-mail'
                ],
                password: [
                    v => !!v || 'Пароль є обов\'язковим',
                    v => v.length >= 6 || 'Мінімально 6 символів',
                    v => v.length <= 30 || 'Максимальний пароль 30 символів',
                    v => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,30}$/.test(v) || 'Пароль повинен місти прийнані одну букву чи цифру'
                ]
            },
            error: false
        }
    },
    methods: {

    }
}
</script>
