<template>
  <div id="body-wrapper">
    <header>
        <div id="fs-logo">
            <a href="/" class="logo-link">friedrichsays.com</a>
            <p class="subtitle">
                Your daily dose of randomised Nietzsche quotes.
            </p>
        </div>
    </header>
    <main>
        <div id="nietzsche-img">
            <img src="~/static/images/nietzsche.png" alt="An old photo of Friedrich Nietzsche">
        </div>
        <nuxt />
    </main>
  </div>
</template>

<style>
    @import '../assets/scss/main.scss';
</style>
