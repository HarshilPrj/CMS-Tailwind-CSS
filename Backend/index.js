const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const Strategy = require("passport-google-oauth20");
require("dotenv").config();

app.use(
    session({
        secret: "this_is_a_secret",
        resave: true,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

passport.use(
    new Strategy(
        {
            clientID: `198778854-u7ehf72g6o6ulcpf9gj07hch6nijirue.apps.googleusercontent.com`,
            clientSecret: `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`,
            callbackURL: `http://localhost:5000/login/google/callback`,
        },
        async (token, refreshToken, profile, done) => {
            done(null, profile);
        }
    )
);

app.get("/admin", (req, res) => {
    res.send("Welcome to The Admin!");
});

app.get(
    "/login/google",
    passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get(
    "/login/google/callback",
    passport.authenticate("google", {
        successRedirect: "/admin",
        failureRedirect: "/login/fail",
    }),
    (req, res, next) => {
        console.log(req.user, req.isAuthenticated());
        res.send("user login successfully");
    }
);

app.get("/login/fail", (req, res, next) => {
    res.redirect("/login/google");
    res.send("user login failed");
});

app.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
    });
    console.log(req.isAuthenticated());
    res.send("user logged out");
});

app.listen(5000);
