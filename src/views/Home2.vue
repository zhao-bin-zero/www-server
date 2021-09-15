<template>
    <div>
        <h3>文章列表</h3>
        
    </div>
</template>
<script>
export default {
    asyncData({ store, route }) {
        console.log('Home2', 'asyncData')
        // return store.dispatch('fetchList')
    },
    computed: {
        list() {
            // return this.$store.state.list;
        },
    },
    mounted() {
        console.log('Home2', 'mounted')
        // this.$store.dispatch('fetchList');
    },
    data() {
        return {
            name: 'wfz',
        };
    },
};
</script>