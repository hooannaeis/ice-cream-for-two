<template>
  <div>
    <Button @click.native="copyText" :isFullWidth="buttonIsLarge">{{
      buttonText
    }}</Button>
  </div>
</template>

<script>
import Button from './Button';

export default {
  data() {
    return {
      buttonIsLarge: null
    };
  },
  components: {
    Button
  },
  props: {
    buttonText: {
      type: String,
      default: 'kopieren'
    },
    textToBeCopied: {
      type: String,
      default: 'Text to be copied'
    }
  },
  methods: {
    copyText() {
      var copyTextArea = document.createElement('textarea');
      // https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript
      // *** This styling is an extra step which is likely not required. ***
      //
      // Why is it here? To ensure:
      // 1. the element is able to have focus and selection.
      // 2. if element was to flash render it has minimal visual impact.
      // 3. less flakyness with selection and copying which **might** occur if
      //    the textarea element is not visible.
      //
      // The likelihood is the element won't even render, not even a
      // flash, so some of these are just precautions. However in
      // Internet Explorer the element is visible whilst the popup
      // box asking the user for permission for the web page to
      // copy to the clipboard.
      //
      // Place in top-left corner of screen regardless of scroll position.
      copyTextArea.style.position = 'fixed';
      copyTextArea.style.top = 0;
      copyTextArea.style.left = 0;
      // Ensure it has a small width and height. Setting to 1px / 1em
      // doesn't work as this gives a negative w/h on some browsers.
      copyTextArea.style.width = '2em';
      copyTextArea.style.height = '2em';
      // We don't need padding, reducing the size if it does flash render.
      copyTextArea.style.padding = 0;
      // Clean up any borders.
      copyTextArea.style.border = 'none';
      copyTextArea.style.outline = 'none';
      copyTextArea.style.boxShadow = 'none';
      // Avoid flash of white box if rendered for any reason.
      copyTextArea.style.background = 'transparent';
      copyTextArea.value = this.textToBeCopied;
      document.body.appendChild(copyTextArea);
      copyTextArea.focus();
      copyTextArea.select();
      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
        this.buttonIsLarge = 'true';
        var self = this;
        window.setTimeout(function() {
          self.buttonIsLarge = undefined;
        }, 300);
      } catch (err) {
        console.log('Oops, unable to copy');
      }
      document.body.removeChild(copyTextArea);
    }
  }
};
</script>
