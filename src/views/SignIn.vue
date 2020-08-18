<template>
  <default-layout>
    <v-container class="text-xs-center">
      <h1>Sign In Page</h1>

      <v-layout justify-center class="py-4">
        <v-flex xs12>
          <v-card>
            <v-card-text>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  name="email"
                  label="Email"
                  type="email"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
                <v-text-field
                  name="password"
                  label="Password"
                  type="password"
                  v-model="password"
                  :rules="passwordRules"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" :disabled="!valid" @click="submit">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout justify-center class="py-4">
        <v-flex xs12>
          <v-card>
            <v-card-title primary-title class="layout justify-center">
              <h4 class="title mb-0">Or Log In with Social</h4>
            </v-card-title>

            <v-card-actions class="white justify-center pb-4">
              <v-btn @click="submitSocialGoogle" color="primary" class="white--text" fab icon small>
                <v-icon>fab fa-google-plus-g</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </default-layout>
</template>
<script>
import DefaultLayout from "../layouts/DefaultLayout";

export default {
  name: "SignIn",
  components: {
    DefaultLayout
  },
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length >= 6 || "Password must be greater than 6 characters"
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("userLogin", {
          email: this.email,
          password: this.password
        });
      }
    },
    submitSocialGoogle() {
      this.$store.dispatch("userLoginGoogle");
    }
  }
};
</script>