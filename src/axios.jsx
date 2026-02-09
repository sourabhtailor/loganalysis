import axios from "axios";

// const EndPoint = 'http://localhost/infomagine_api/api/';
//  const EndPoint =   'https://infomagine.bands-erp.in/api/';
const EndPoint = 'https://infomagine.in/api/';
const axiosInstance = axios.create({
    timeout: 1000000,
    baseURL: EndPoint,

});
// axiosInstance.defaults.withCredentials = true;


// axiosInstance.interceptors.request.use(function (config) {
//   // Do something before request is sent
//    const user = JSON.parse(localStorage.getItem('user'))
//    if(user){
//     const token = user.accessToken
//     if(token){
//         config.headers['Authorization'] = 'Bearer ' + token;
//     }
//    }
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });


export default axiosInstance;
