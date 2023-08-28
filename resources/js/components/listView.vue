<template>
    <div class="mt-4">
        <hr class="w-50 m-auto mb-3" />
        <v-list lines="one" class="list-group">
            <div v-for="item in items">
            <list-item
                v-on:itemchanged="$emit('reloadlist')"
                :item="item"
                :key="item.id"
                />
            </div>
        </v-list>
    </div>
</template>

<script>
import listItem from "./listItem.vue";

export default {
    components: {
        listItem
    },
    props: ["items"]
};
</script>
