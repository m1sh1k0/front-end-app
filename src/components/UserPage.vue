<template>
  <div>
    <b-button id="show-btn" @click="showModal">Create Event</b-button>

    <b-modal
      ref="create-user-event-modal"
      hide-footer
      title="Create user event"
    >
      <div class="d-block text-center">
        <h3>Create user</h3>
      </div>
      <div role="group">
        <b-form-input
          id="input-live"
          v-model="title"
          :state="titleState"
          aria-describedby="input-live-help input-live-feedback"
          placeholder="Enter title of event"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback"
          >This is a required field.</b-form-invalid-feedback
        >
        <b-form-input
          id="input-live"
          v-model="description"
          :state="descriptionState"
          aria-describedby="input-live-help input-live-feedback-2"
          placeholder="Enter description for event"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback-2"
          >This is a required field.</b-form-invalid-feedback
        >
        <b-form-input
          id="input-live"
          v-model="startDate"
          :state="startDateState"
          aria-describedby="input-live-help input-live-feedback-3"
          placeholder="Enter startDate (like 2011-10-05T14:47:00.000Z)"
          trim
        ></b-form-input>
        <b-form-invalid-feedback id="input-live-feedback-3"
          >This is a required field.</b-form-invalid-feedback
        >
        <b-form-input
          id="input-live"
          v-model="endDate"
          :state="endDateState"
          aria-describedby="input-live-help input-live-feedback-4"
          placeholder="Enter endDate (like 2011-10-05T14:47:00.000Z)"
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
          @click="createUserEvent"
          >Create</b-button
        >
      </b-button-group>
    </b-modal>
    <b-table name="UsersTable" striped hover :items="items"> </b-table>
  </div>
</template>

<script>
export default {
  computed: {
    titleState() {
      return this.title.length > 2 ? true : false
    },
    descriptionState() {
      return this.description.length > 2 ? true : false
    },
    startDateState() {
      return this.startDate.length > 8 ? true : false
    },
    endDateState() {
      return this.endDate.length > 5 ? true : false
    }
  },
  data() {
    return {
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      items: []
    }
  },
  methods: {
    showModal() {
      this.$refs['create-user-event-modal'].show()
    },
    hideModal() {
      this.$refs['create-user-event-modal'].hide()
    },
    toggleModal() {
      this.$refs['create-user-event-modal'].toggle('#toggle-btn')
    },
    createUserEvent() {
      this.axios
        .put(`http://localhost:3000/users/${this.$route.params.id}`, {
          title: this.title,
          description: this.description,
          startDate: this.startDate,
          endDate: this.endDate
        })
        .then(
          (result) => {
            console.log(result)
            this.reloadData()
          },
          (error) => {
            console.log(error)
          }
        )
    },
    reloadData() {
      this.axios
        .get(`http://localhost:3000/users/${this.$route.params.id}`)
        .then(
          (result) => {
            console.log(result.data[0].events)
            this.items = result.data[0].events
          },
          (error) => {
            console.log(error)
          }
        )
    }
  },
  mounted() {
    this.axios.get(`http://localhost:3000/users/${this.$route.params.id}`).then(
      (result) => {
        console.log(result.data[0].events)
        this.items = result.data[0].events
      },
      (error) => {
        console.log(error)
      }
    )
  }
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
