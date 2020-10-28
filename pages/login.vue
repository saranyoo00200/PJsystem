<template>
  <div>
    <LoginForm @login-submitted="handleLoginFormSubmitted" />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
export default {
  components: {
    LoginForm
  },
  methods: {
    handleLoginFormSubmitted (email, password) {
      // eslint-disable-next-line no-console
      console.log('page', email, password)
    }
  }
}
</script>

<style>

</style>
