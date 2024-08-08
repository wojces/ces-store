<template>
  <div>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model.trim="enteredEmail" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="enteredPassword" />
        </div>
        <base-button>Zaloguj się</base-button>
      </form>
    </base-card>

    <base-card>
      <div>
        <p><b>Dane do zalogowania się</b></p>
        <p>email: user@email.com</p>
        <p>password: windowstore</p>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enteredEmail: "",
      enteredPassword: "",
    };
  },
  methods: {
    submitForm() {
      if (
        this.enteredEmail === this.$store.state.email &&
        this.enteredPassword === this.$store.state.password
      ) {
        this.$store.dispatch("login");
        alert("Zalogowano pomyślnie!");
        this.$router.push("/products");
      } else {
        return alert("Niepoprawny email lub hasło");
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-control {
  margin: 8px 0;
}

label {
  font-weight: bold;
  margin-bottom: 8px;
  display: block;
}
input,
textarea {
  display: block;
  width: 600px;
  border: 1px solid #ccc;
  padding: 2.5px;
}

input:focus,
textarea:focus {
  border-color: #009eca;
  background-color: #faf6ff;
  outline: none;
}

button {
  margin-top: 16px;
  scale: 1.2;
}
</style>
