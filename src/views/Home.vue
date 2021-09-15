<template>
    <div>
        <h3>文章列表</h3>
            <router-link :to="{ path: '/home2/' }">home2</router-link>
        <div class="list" v-for="i in list">
            <router-link :to="{ path: '/item/' + i.id }">{{ i.title }}</router-link>
        </div>
    </div>
</template>
<script>
export default {
    asyncData({ store, route }) {
        console.log('Home', 'asyncData')
        return store.dispatch('fetchList')
    },
    computed: {
        list() {
            return this.$store.state.list;
        },
    },
    mounted() {
        console.log('Home', 'mounted')
        // this.$store.dispatch('fetchList');
    },
    data() {
        return {
            name: 'wfz',
        };
    },
};
</script>