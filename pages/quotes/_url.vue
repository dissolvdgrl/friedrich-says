<template>
    <div id="quote-container">
        <p class="book-title">{{ quote.publication }}</p>
        <p class="chapter">{{ quote.chapter }}</p>
        <p class="quote">— {{ quote.quote }}</p>
        <div class="share-container">
            <img src="~/static/images/link_icon.svg" alt="link icon">
            <a @click.prevent="copyToClip" id="copy-link" :href="quote.url">Get link</a>
            <span class="divider"></span>
        </div>
    </div>
</template>

<script>
    import Quotes from '~/assets/json/quotes.json'

    export default{
        data() {
            return {
                url: this.$route.params.url,
                quotes: Quotes
            }
        },

        computed: {
            quote () {
                return this.quotes.find(quote => quote.url === this.url)
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
            }
        }
    }
</script>