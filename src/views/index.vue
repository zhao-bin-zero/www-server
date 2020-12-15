<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'page',
    metaInfo() {
        // https://github.com/nuxt/vue-meta/blob/master/src/shared/constants.js
        return {
            title: 'TigerWit',
            meta: [
                { vmid: 'keywords', name: 'keywords', content: 'page' },
                { vmid: 'description', name: 'description', content: 'page' },
            ],
            htmlAttrs: {
                lang: 'en',
            },
        };
    },
    methods: {
    },
    components: {},
    computed: {},
};
</script>

