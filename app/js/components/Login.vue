<template>
    <b-container class="login">
        <h2>Login</h2>
        <v-form
                ref="form"
                v-model="valid"
                lazy-validation
        >
            <v-flex md12>
                <v-text-field
                        label="Username"
                        outline
                ></v-text-field>
            </v-flex>
            <v-flex md12>
                <v-text-field
                        label="Password"
                        outline
                ></v-text-field>
            </v-flex>
            <v-btn
                    :disabled="false"
                    block color="primary" dark
                    @click="login()"
            >
                Login
            </v-btn>
        </v-form>
    </b-container>
</template>

<script>
    export default {
        name: 'Login',
        data: () => ({
            valid: true
        }),
        methods: {
            validate () {
                if (this.$refs.form.validate()) {
                    console.log('yo');
                }
            },
            login () {
                this.$store.dispatch('auth/login');
            }
        }
    }
</script>

<style>

</style>