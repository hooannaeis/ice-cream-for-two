<template>
  <button :class="{ 'btn--isPrimary': isPrimary, 'btn--warn': isWarning, 'btn--fullWidth': isFullWidth, 'btn--isLink': isLink }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    isWarning: String,
    isFullWidth: String,
    isLink: String,
    isPrimary: String
  },
};
</script>

<style>
button {
  color: #e7be7e;
  background: #1f2224;

  border-radius: 5px;
  padding: 0.4rem 1rem;
  margin: 0.4rem 1rem;
  border: none;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  line-height: 1.8rem;
  min-width: 1.8rem;
  cursor: pointer;
  font-weight: bold;
}
button:hover {
  box-shadow: 2px 2px 4px 0px rgba(15, 15, 16, 0.842),
    -2px -2px 4px 0px rgba(40, 40, 40, 0.801),
    inset 0px 0px 0px 0px rgba(15, 15, 16, 0.842),
    inset 0px 0px 0px 0px rgba(40, 40, 40, 0.801);
}

.btn--warn {
  color: rgba(231, 231, 240, 0.842);
  background: linear-gradient(225deg, #b94d62, #dc5b75);
}

.btn--warn:hover {
  box-shadow: 2px 2px 4px 0px #af485d, -2px -2px 4px 0px #ed627d,
    inset 0px 0px 0px 0px #af485d, inset 0px 0px 0px 0px #ed627d;
}

.btn--fullWidth {
  width: 90%;
  margin: 0;
}

.btn--isLink {
  color: #1f2224;
  background: linear-gradient(225deg, #d0ab71, #f7cb87);
}

.btn--isLink:hover {
  box-shadow: 2px 2px 4px 0px #c4a26b, -2px -2px 4px 0px #d0ab71,
    inset 0px 0px 0px 0px #c4a26b, inset 0px 0px 0px 0px #ffdb91;
}

.btn--isPrimary {
  color: black;
  background: radial-gradient(
    circle,
    rgb(98, 160, 231) 0%,
    rgba(1, 168, 223, 1) 100%
  );
}
</style>