<template>
  <v-app>
    <v-app-bar title="To-do List"></v-app-bar>

    <v-main class="d-flex flex-column align-center mt-5">
        <v-container fluid style="margin: 0px; padding: 0px; width: 70%">
            <add-item-form v-on:reloadlist="getList()" />

            <list-view
                :items="items"
                v-on:reloadlist="getList()"
                class="text-center"
            />
        </v-container>
    </v-main>
  </v-app>
</template>

<script>
    import addItemForm from "./addItemForm.vue";
    import listView from "./listView.vue";

    export default {
        components: {
            addItemForm,
            listView
        },

        data: function() {
            return {
                items: []
            };
        },
        methods: {
            getList() {
                axios
                    .get("api/items")
                    .then(response => {
                        console.log(response.data);
                        this.items = response.data;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
        created() {
            this.getList();
        }
    };
</script>

<style scoped></style>
