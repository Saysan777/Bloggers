<template>
  <v-container grid-list-xs>
    <v-row>
        <v-col sm="10" class="pa-4 mx-auto">
            <v-card class= "pa-2">
                <v-img :src="`/${post.image}`"></v-img>  <!-- insert slash before the img src even while using a dynamic value-->
                <v-card-actions class="pb-0">
                    <v-row class ="mt-1 mx-1">
                        <v-col sm="2">
                            <v-btn small outlined color="primary">{{ post.category }}</v-btn>
                        </v-col>
                        <v-col sm="10" class="d-flex justify-end">
                            <v-btn :to="{name: 'edit', params:{ id: post._id } }" color="success" text>Edit</v-btn>
                            <v-btn @click="removePost(post._id)" color="red" text>Delete</v-btn>
                        </v-col>
                    </v-row>
                </v-card-actions>
                <v-card-subtitle class="headline">
                    <h3>{{ post.title }}</h3>
                </v-card-subtitle>
                <v-card-text class="grey--text">
                    <p>{{ post.typeIs}}</p>
                    <p>{{ post.content }}</p>
                    <p>{{ post.creatdAt }}</p>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from '../api'

export default {
    data(){
        return{
            post: {},
        }
    },
    async created(){
        const response = await API.getPostById(this.$route.params.id) // this.$router and this.$route hunxa
        this.post = response;
    },
    methods:{
        async removePost(id){
            const response = await API.deletePost(id);
            this.$router.push({name:'home', params: { message: response.message}})
        }
    }
}
</script>

<style>

</style>