<template>
  <v-jumbotron height="700px">
      <v-container fill-height>
        <v-layout align-center row>
          <v-flex md4 >
            <h2 class="display-3">Welcome to the site</h2>

            <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum.</span>

            <v-divider class="my-3"></v-divider>

            <div class="title mb-3">Check out our newest features!</div>

            <v-btn
              class="mx-0"
              color="primary"
              large
            >
              See more
            </v-btn>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex md4>
            <v-form v-model="valid">
              <div class="smally">
              <h2>Přihlášení do souteže</h2>
              <v-text-field class="caption"
                v-model="name"
                :rules="nameRules"
                label="Name"
                required
                rows="2"
              ></v-text-field>
              <v-text-field class="caption"
                v-model="name"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>
              <v-text-field class="caption"
                v-model="name"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>
              <v-text-field class="caption"
                v-model="name"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Do you agree?"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
              ></v-checkbox>
              <div>
        <v-btn depressed color="primary">Primary</v-btn>
      </div>
    </div>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
  </v-jumbotron>
</template>

<style>
 .smally label {
   font-size:15px
 }
