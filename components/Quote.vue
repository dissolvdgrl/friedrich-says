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
                currentQuote: ''
            }
        },

        mounted() {
            this.currentQuote = this.quotes[Math.floor(Math.random()*this.quotes.length)];
        },

        methods: {
            copyToClip() {
                let copyTxt = document.querySelector('#copy-link');
                let timeoutID;

                function replaceTxt() {
                    copyTxt.innerText = 'Get link';
                    copyTxt.classList.remove('copied');
                }
                navigator.clipboard.writeText(`https://friedrichsays.com/${this.currentQuote.url}`);
                copyTxt.classList.add('copied');
                copyTxt.innerText = 'Copied!';
                timeoutID = window.setTimeout(replaceTxt, 1000);
            }
        }
    }
</script>

<style lang="scss">
    #quote-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 60%;
    }

    .quote {
        margin-top: 1rem;
    }

    .share-container {
        display: flex;
        margin-top: 1rem;

        img {
            margin-right: 0.5rem;
        }
    }

    #copy-link {
        cursor: pointer;
        opacity: 0.5;
        transition: all 0.5s ease;
        text-decoration: none;
        color: #A58723;
    }

    .copied {
        opacity: 1 !important;
    }

</style>
