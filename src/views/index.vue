<template>
    <router-view></router-view>
</template>

<script>
export default {
  name: "page",
  metaInfo() {
    // https://github.com/nuxt/vue-meta/blob/master/src/shared/constants.js
    return {
      title: 'TigerWit',
      meta: [
        { vmid: 'keywords', name: "keywords", content: 'page' },
        { vmid: 'description', name: "description", content: 'page' },
      ],
      htmlAttrs: {
        lang: 'en'
      }
    };
  },
  components: {},
  computed: {
  },
};
</script>

