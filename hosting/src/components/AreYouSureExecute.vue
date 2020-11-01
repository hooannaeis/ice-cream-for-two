<template>
  <div class="interaction__container" :class="{ 'mh-2rem': showDecision }">
    <span v-if="showDecision" class="interaction__dialogue">
      <button class="interaction__btn--yes" @click="acceptDecision">
        {{ acceptText }}
      </button>
      <button class="interaction__btn--no" @click="declineDecision">
        {{ declineText }}
      </button>
    </span>
    <span
      v-else
      class="interaction__dialogue--placeholder"
      @click="toggleDecisionMode"
    ></span>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    declineText: {
      default: 'no',
      type: String
    },
    acceptText: {
      default: 'yes',
      type: String
    }
  },
  data() {
    return {
      showDecision: false
    };
  },
  methods: {
    declineDecision() {
      this.toggleDecisionMode();
      this.$emit('declineDecision');
    },
    acceptDecision() {
      this.toggleDecisionMode();
      this.$emit('acceptDecision');
    },
    toggleDecisionMode() {
      this.showDecision = !this.showDecision;
    }
  }
};
</script>

<style>
.interaction__btn--no {
  min-width: 50%;
  background: radial-gradient(
    circle,
    rgb(98, 160, 231) 0%,
    rgba(1, 168, 223, 1) 100%
  );
}
.interaction__btn--yes {
  min-width: 50%;
  background: linear-gradient(225deg, #b94d62, #dc5b75);
}

.interaction__container {
  width: 100%;
  position: relative;
  min-height: 0rem;
  background: transparent;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.mh-2rem {
  min-height: 3rem;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.interaction__dialogue {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  background: #1f2224;
}

.interaction__dialogue--placeholder {
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
