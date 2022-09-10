<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card>
          <v-card-title primary-title>
            Edit this Post
          </v-card-title>
          <v-divider></v-divider>
          <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data">

            <v-text-field v-model="post.title" prepend-icon="mdi-note" label="Title" :rules="rules"  ></v-text-field>

             <v-text-field v-model="post.category" prepend-icon="mdi-note" label="Category" :rules="rules"></v-text-field>

              <v-text-field v-model="post.typeIs" prepend-icon="mdi-note" label="type" :rules="rules"></v-text-field>

            <v-textarea v-model="post.content" label="Content" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>

            <v-file-input @change="selectFile" show-size counter multiple label="Select Image"></v-file-input>  <!-- doesnt support v-model and also removed rules from here to insert the file-->  

            <v-img :src="`/${post.image}`" width="120"></v-img>

            <v-btn type="submit" class='mt-3' color="success">Update Post</v-btn>

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
        async created(){
            const response = await API.getPostById(this.$route.params.id); //getting id to show the current condition of the content to show to the user.
            this.post = response;   //fiiling typ form ko fields naa with the values of current id (getpost garyo then feild haru ko value maa paila vako value insert gareko)
        },

    methods:{
      selectFile(file){
        this.image = file[0];     //file maa as array insert garxa image lai so getting the first image
      },
      async updateForm(){
        const formData = new FormData();      //vuetify feature to track data
        formData.append('image',this.image);
        formData.append("title", this.post.title);
        formData.append("typeIs", this.post.typeIs);
        formData.append("category", this.post.category);
        formData.append("content", this.post.content);
        formData.append("old_image", this.post.image);  // to send the old image and also we have already set this up in backend api methods in if else conftion , schema maa hunu parxa vanne chaina but req body maa send gareko hunu paryo

        if(this.$refs.form.validate()){
          const response = await API.updatePost(this.$route.params.id, formData)
          this.$router.push({ name:'home', params:{ message: response.message } })  //message value is coming from the server side that we have added ,after we the post is successfullt added in the database.
        }
      }
    }
}
</script>

<style>

</style>