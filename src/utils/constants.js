const SERVER_IP="myapi-x6uy.onrender.com";

export const ENV={
    BASE_PATH: `https://${SERVER_IP}`,
    BASE_API: `https://${SERVER_IP}/api`,
    API_ROUTES:{
        LOGIN:'auth/login',
        USER_ME:'userme',
        REFRESHTOKEN:"auth/refreshtoken",
    },
    JWT:{
        ACCESS: "access",
        REFRESH: "refresh"
    }
}