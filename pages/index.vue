<template>
  <div class="container">
    <header>
      <logo />
    </header>
    <main>
        <nietzsche />
        <quote />
    </main>
    <footer>
        <p>© friedrichsays.com 2020</p>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Nietzsche from '~/components/Nietzsche.vue'
import Quote from '~/components/Quote.vue'

export default {
  components: {
    Logo, Nietzsche, Quote
  }
}
</script>
