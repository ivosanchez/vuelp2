<template>
  <default-layout>
    <v-container class="text-xs-center">
      <h1>Sign Up Page</h1>

      <v-layout justify-center class="py-4">
        <v-flex xs12 md-8>
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
                <v-text-field
                  name="repassword"
                  label="Repeat Password"
                  type="password"
                  v-model="repassword"
                  :rules="repasswordRules"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" :disabled="!valid" @click="submit">Registration</v-btn>
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
  name: "SignUp",
  components: {
    DefaultLayout
  },
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      repassword: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length >= 6 || "Password must be greater than 6 characters"
      ],
      repasswordRules: [
        v => !!v || "Repeat Password is required",
        v => v === this.password || "Password must match"
        //v => v.length >= 6 || "Password must be greater than 6 characters"
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("userRegistration", {
          email: this.email,
          password: this.password
        });
      }
    }
  }
};
</script>