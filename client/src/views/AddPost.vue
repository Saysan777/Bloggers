<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card>
          <v-card-title primary-title>
            Add New Post
          </v-card-title>
          <v-divider></v-divider>
          <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">

            <v-text-field v-model="post.title" prepend-icon="mdi-note" label="Title" :rules="rules"  ></v-text-field>

             <v-text-field v-model="post.category" prepend-icon="mdi-note" label="Category" :rules="rules"></v-text-field>

              <v-text-field v-model="post.typeIs" prepend-icon="mdi-note" label="type" :rules="rules"></v-text-field>

            <v-textarea v-model="post.content" label="Content" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>

            <v-file-input @change="selectFile"  show-size counter multiple label="Select Image"></v-file-input>  <!-- doesnt support v-model so using @change-->

            <v-btn type="submit" class='mt-3' color="primary">Add Post</v-btn>

          </v-form>
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
        rules:[(value)=>!!value || "This field is required!" ],
        post:{
          title:"",
          category:"",
          typeIs:"",
          content:"",
          image:""
        },
        image:""
      }
    },
    methods:{
      selectFile(file){
        this.image = file[0];     //file maa as array insert garxa image lai so getting the first image
      },
      async submitForm(){
        const formData = new FormData();      //vuetify feature to track data
        formData.append('image',this.image);
        formData.append("title", this.post.title);
        formData.append("typeIs", this.post.typeIs);
        formData.append("category", this.post.category);
        formData.append("content", this.post.content);

        if(this.$refs.form.validate()){
          const response = await API.addPost(formData)
          this.$router.push({ name:'home', params:{ message: response.message } })  //message value is coming from the server side that we have added ,after we the post is successfullt added in the database.
        }
      }
    }
}
</script>

<style>

</style>