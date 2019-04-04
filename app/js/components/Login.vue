<template>
    <b-container fluid class="login">
        <v-form
                ref="form"
                v-model="valid"
                lazy-validation
        >
            <b-form-group
                    id="usernameGroup"
                    label="Username:"
                    label-for="username"
                    description="Your dope username"
            >
                <b-form-input
                        id="username"
                        type="text"
                        v-model="username"
                        required
                        placeholder="Enter your username" />
            </b-form-group>
            <b-form-group
                    id="codeGroup"
                    label="Code:"
                    label-for="code"
                    description="Do what you gotta do"
            >
                <b-form-input
                        id="code"
                        type="text"
                        v-model="code"
                        required
                        placeholder="Enter your code" />
            </b-form-group>
            <b-button :disabled="!code || !username" block variant="primary" @click="login()">Enter the vault</b-button>
        </v-form>
    </b-container>
</template>

<script>
    export default {
        name: 'Login',
        data: () => ({
            valid: true,
            username: null,
            code: null
        }),
        methods: {
            validate () {
                if (this.$refs.form.validate()) {
                    console.log('yo');
                }
            },
            login () {
                this.$store.dispatch('auth/login', {
                    'username': this.username,
                    'code': parseInt(this.code)
                });
            }
        }
    }
</script>

<style>

</style>