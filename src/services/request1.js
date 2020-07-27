import axios from 'axios'
export function request (config){
    const  instance =axios.create({
        baseURL:'HTTP',
        timeout:5000,
    })
}
//axios拦截器
instance.interceptors.request.use(config=>{
    /*拦截请求 ，里面有很多的配置，ul.,headers*/
    console.log(config);
    /* 拦截了还要继续换回去*/
    return config;
},err=>{
    /* 不会走到下面这个*/
    console.log(err);

})

//axios拦截器
instance.interceptors.response.use(result=>{
    /*拦截请求 ，里面有很多的配置，ul.,headers*/
    console.log(result);
    /* 拦截了还要继续换回去*/
    return config;
},err=>{
    /* 不会走到下面这个*/
    console.log(err);

})