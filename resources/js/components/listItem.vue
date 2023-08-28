<template>
    <li class="list-group-item" >
        <v-row no-gutters>
        <v-col
            cols="4"
        >
            <input
                type="checkbox"
                @change="updateCheck()"
                v-model="checked"
            />
        </v-col>
        <v-col
            cols="4"
        >
            <span :class="[this.checked == true ? 'done' : '', 'item']">
                {{ item.name }}
            </span>
        </v-col>
        <v-col
            cols="4"
        >
            <button class="btn btn-danger" @click="removeItem()">
                <font-awesome-icon icon="trash" />
            </button>
        </v-col>
        </v-row>
    </li>
</template>

<script>
export default {
    props: ["item"],
    data: function () {
        return {
            checked: this.item.completed
        }
    },
    methods: {
        updateCheck() {
            this.item.completed = this.checked;
            console.log(this.checked, this.item);
            axios
                .put(`api/item/${this.item.id}`, {
                    item: this.item
                })
                .then(response => {
                    if (response.status == 200) {
                        this.$emit("itemchanged");
                    }
                })
                .catch(error => {
                    console.log("error from axios put", error);
                });
        },
        removeItem() {
            axios
                .delete(`api/item/${this.item.id}`)
                .then(response => {
                    if (response.status == 200) {
                        this.$emit("itemchanged");
                    }
                })
                .catch(error => {
                    console.log("error from axios delete ", error);
                });
        }
    },
};
</script>

<style>
.done {
    text-decoration: line-through;
    color: gray;
}
</style>
