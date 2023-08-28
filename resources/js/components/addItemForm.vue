<template>
    <v-row
        justify="center"
        no-gutters
    >
        <v-col
            cols="4"
        >
            <div class="addItem">
                <input
                    type="text"
                    placeholder="Add item"
                    class="form-control"
                    v-model="item.name"
                />
                <button
                    :class="[item.name ? 'btn btn-success' : 'btn btn-secondary']"
                    @click="addItem()"
                >
                    <font-awesome-icon icon="plus" />
                </button>
            </div>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: function() {
        return {
            item: {
                name: ""
            }
        };
    },
    methods: {
        addItem() {
            if (this.item.name == "") {
                return;
            }
            axios
                .post("api/item/store", {
                    item: this.item
                })
                .then(response => {
                    if (response.status == 201) {
                        this.item.name = "";
                        this.$emit("reloadlist");
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>

<style scoped>
.addItem{
    display:flex;
    justify-content: center;
    align-items: center;
}
</style>
