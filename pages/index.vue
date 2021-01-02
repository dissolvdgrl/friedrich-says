<template>
    <quote />
</template>

<script>
    import Quote from '~/components/Quote.vue';
    import Quotes from '~/assets/json/quotes.json'

    export default {
        components: {
            quote: Quote
        },

        data() {
            return {
                quotes: Quotes
            }
        },

        mounted() {
            this.quotes = this.quotes[Math.floor(Math.random()*this.quotes.length)];
        }
    }
</script>
