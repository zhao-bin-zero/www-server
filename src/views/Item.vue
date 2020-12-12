<template>
    <div>
        <span v-if="!item">loading</span>
        <div v-if="item">
            <h2>{{ item.title }}</h2>
            <el-button>默认按钮</el-button>
            <div v-html="item.content"></div>
        </div>
    </div>
</template>
<script>
export default {
    metaInfo() {
        return {
            title: this.item && this.item.title,
            meta: [
                { vmid: 'keywords', name: 'keywords', content: '123' },
                { vmid: 'description', name: 'description', content: '1234' },
            ],
        };
    },
    asyncData({ store, route }) {
        return store.dispatch('fetchItem', route.params.id);
    },
    computed: {
        item() {
            return this.$store.getters.items[this.$route.params.id];
        },
    },
    mounted() {
        console.log('item logeed');
    },
};
</script>