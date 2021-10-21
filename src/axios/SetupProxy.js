const proxy = require ("http-proxy-middleware");

module.exports = function (app) {
    app.use (
        proxy ("/register",{
            target:"http://localhost:35210",
            secure:false,
            changeOrigin:true
        })
    )
}