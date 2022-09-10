import axios from 'axios'

const  url = "/api/post/"       //this is added behind the "proxy" we added in "vue.config.js" and act as an api to fetch data from which we pre-installed from "postman" while api testing. 

//bu the above url and proxy we added the frontend ko api and backend ko api is connected

export default class API{
    //to get all the post from the server
    static async getAllPost(){                      //we use static method so that we can call methods directly with class name without making new object.
        const res = await axios.get(url);
        return res.data;
    }

    //to get single post from server by id
    static async getPostById(id){
        const res = await axios.get(`${url}/${id}`) ;
        return res.data;
    }

     //to insert post from client to server and database
     static async addPost(post){
        const res = await axios.post(url,post);
        return res.data;
    }

    //to update post in database
    static async updatePost(id, post){
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }

        //delete a post 
    static async deletePost(id){
        const res = await axios.patch(`${url}/${id}`);
        return res.data;
    }
    
}