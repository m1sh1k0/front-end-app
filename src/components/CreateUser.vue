<template>
  <div>
    <b-button id="show-btn" @click="showModal">{{ buttonText }}</b-button>

    <b-modal
      ref="create-user-modal"
      hide-footer
      title="Create user on local DB"
    >
      <div class="d-block text-center">
        <h3>Create user</h3>
      </div>
      <div role="group">
        <b-form-input
          id="input-live"
          v-model="firstName"
          :state="nameState"
          aria-describedby="input-live-help input-live-feedback"
          placeholder="Enter your first name"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback"
          >This is a required field.</b-form-invalid-feedback
        >
        <b-form-input
          id="input-live"
          v-model="lastName"
          :state="lastNameState"
          aria-describedby="input-live-help input-live-feedback-2"
          placeholder="Enter your last name"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback-2"
          >This is a required field.</b-form-invalid-feedback
        >
        <b-form-input
          id="input-live"
          v-model="email"
          :state="emailState"
          aria-describedby="input-live-help input-live-feedback-3"
          placeholder="Enter your email"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback-3"
          >This is a required field.</b-form-invalid-feedback
        >
        <b-form-input
          id="input-live"
          v-model="phoneNumber"
          :state="phoneNumberState"
          aria-describedby="input-live-help input-live-feedback-4"
          placeholder="Enter your phone number"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback-4"
          >This is a required field.</b-form-invalid-feedback
        >
      </div>
      <b-button-group size="lg">
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal"
          >Cancel</b-button
        >
        <b-button
          class="mt-3"
          variant="outline-danger"
          block
          @click="createUser"
          >Create</b-button
        >
      </b-button-group>
    </b-modal>
  </div>
</template>

<script>
export default {
  computed: {
    nameState() {
      return this.firstName.length > 2 ? true : false
    },
    lastNameState() {
      return this.lastName.length > 2 ? true : false
    },
    phoneNumberState() {
      return this.phoneNumber.length > 8 ? true : false
    },
    emailState() {
      return this.email.length > 5 ? true : false
    }
  },
  data() {
    return {
      buttonText: 'Create user',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    }
  },
  methods: {
    showModal() {
      this.$refs['create-user-modal'].show()
    },
    hideModal() {
      this.$refs['create-user-modal'].hide()
    },
    toggleModal() {
      this.$refs['create-user-modal'].toggle('#toggle-btn')
    },
    createUser() {
      if (this.firstName) {
        this.axios
          .post('http://localhost:3000/users', {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phoneNumber: this.phoneNumber
          })
          .then(
            (result) => {
              this.count = result.data
              this.$refs['create-user-modal'].hide()
              this.$root.$children[0].$children[1].getAllUsers()
            },
            (error) => {
              console.log(error)
            }
          )
      }
    }
  },
  mounted() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  padding: 16px 32px;
  margin: 4px 2px;
  text-align: center;
}
</style>
