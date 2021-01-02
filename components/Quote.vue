<template>
  <div id="quote-container">
    <p class="book-title">{{ currentQuote.publication }}</p>
    <p class="chapter">{{ currentQuote.chapter }}</p>
    <p class="quote">— {{ currentQuote.quote }}</p>
    <div class="share-container">
        <img src="~/static/images/link_icon.svg" alt="link icon">
        <a @click.prevent="copyToClip" id="copy-link" :href="currentQuote.url">Get link</a>
        <span class="divider"></span>
    </div>
  </div>
</template>

<script>
    import Quotes from '~/assets/json/quotes.json'

    export default {
        data() {
            return {
                quotes: Quotes,
                currentQuote: Quotes[0]
            }
        },

        methods: {
            copyToClip() {
                let copyTxt = document.querySelector('#copy-link');
                let timeoutID;

                function replaceTxt() {
                    copyTxt.innerText = 'Get link';
                    copyTxt.classList.remove('copied');
                }

                navigator.clipboard.writeText(`https://friedrichsays.com/quotes/${this.currentQuote.url}`);
                copyTxt.classList.add('copied');
                copyTxt.innerText = 'Copied!';
                timeoutID = window.setTimeout(replaceTxt, 1000);
            },

            randomize() {
                this.currentQuote = this.quotes[Math.floor(Math.random()*this.quotes.length)];
                return this.currentQuote;
            }
        },

        mounted() {
            this.randomize();
        }
    }
</script>