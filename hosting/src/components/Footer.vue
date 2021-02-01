<template>
  <div @click="goHome">
    <svg
      width="4rem"
      height="116px"
      viewBox="0 0 243 477"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xml:space="preserve"
      xmlns:serif="http://www.serif.com/"
      style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;"
    >
      <g id="Artboard1" transform="matrix(0.195652,0,0,0.216033,0,0)">
        <rect x="0" y="0" width="1242" height="2208" style="fill:none;" />
        <clipPath id="_clip1">
          <rect x="0" y="0" width="1242" height="2208" />
        </clipPath>
        <g clip-path="url(#_clip1)">
          <g transform="matrix(5.11111,0,0,4.62893,-2526.92,-7957.13)">
            <path
              d="M527,1719C541.894,1826.22 401.769,2179.71 609,2196C818.503,2178.04 708.986,1911.65 702,1719C607.583,1719.52 527,1719 527,1719Z"
              style="fill:rgb(227,179,131);stroke:black;stroke-width:1px;"
            />
          </g>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  computed: {
    homeLink() {
      if (this.$route.path === "/about") {
        return "/"
      }
      return "/about"
    }
  },
  methods: {
    goHome() {
      this.$router.push({ path: this.homeLink });
    }
  }
}
</script>