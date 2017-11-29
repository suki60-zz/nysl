/*eslint-env browser*/
/*eslint "no-console": "off" */
/*eslint "no-undef": "off" */
/*eslint "no-unused-vars": "off" */

$(document).ready(function () {

    $("body").addClass("grid");
    getNav();
    getDropdown();
    getHome();
    getEvents();
    getChat();
    getAbout();
    getContact();
    getButtonsAndOpen();
});


function getNav() {

    //nav main
    divClass("nav", "flex-row-sb w-100vw nav grid-item", "body");


    //dropdown
    divClass("dropdown-icon", "flex center", "#nav");
    div("dropdown-icon-center", "#dropdown-icon");
    var num_week = getInitalFilter();
    inputImg("dropdown-button", "dropdown-button", "image", "css/images/dropdown-img.svg", 1000 + num_week, "dropdown-button", "#dropdown-icon-center");

    //title
    divClass("title", "flex center nav", "#nav");
    div("title-center", "#title");
    h1("NSYL", "#title-center");

    //logo
    divClass("logo", "flex center nav", "#nav");
    div("logo-center", "#logo");
    img("logo-img", "logo-img", "css/images/logo-img.png", "#logo-center");
}

function getDropdown() {
    divClass("dropdown", "dropdown grid-item flex-column center w-100vw", "body");
    divClass("dropdown-container", "flex-row-sb w-100vw", "#dropdown");


    //home
    divClass("home", "drop-item home-link flex center", "#dropdown-container");
    divClass("home-center", "home-center", "#home");
    button("home-button", "home-button drop-button", "Home", "home", "#home-center");

    //events
    divClass("events-link", "drop-item events-link flex center", "#dropdown-container");
    divClass("events-link-center", "events-link-center", "#events-link");
    button("events-button", "events-button drop-button", "Events", "events", "#events-link-center");

    //chat
    divClass("chat-link", "drop-item chat-link flex center", "#dropdown-container");
    divClass("chat-link-center", "chat-link-center", "#chat-link");
    button("chat-button", "chat-button drop-button", "Chat", "chat", "#chat-link-center");

    //about
    divClass("about-link", "drop-item about-link flex center", "#dropdown-container");
    divClass("about-link-center", "about-link-center", "#about-link");
    button("about-button", "about-button drop-button", "About", "home", "#about-link-center");

    //contact
    divClass("contact-link", "drop-item contact-link flex center", "#dropdown-container");
    divClass("contact-link-center", "contact-link-center", "#contact-link");
    button("contact-button", "contact-button drop-button", "Contact", "home", "#contact-link-center");
}

function getHome() {

    //---------------------------------game info-----------------------------------------//
    //nav weeks
    for (var i = 0; i <= (data.dates.length + 1); i++) {
        divClass("week-" + i, "grid-item flex center week test", "body");
        div("week-" + i + "-center", "#week-" + i);
    }
    for (i = 1; i <= data.dates.length; i++) {
        button("week-button-" + i, "week-button button", "week " + i, i, "#week-" + i + "-center");
    }

    //date
    for (i = 0, k = 1; i < (data.dates.length); i++, k++) {
        divClass("date-" + k, "grid-item flex center date w-100vw test", "body");
        divClass("date-" + k + "-center", "date-center", "#date-" + k);

        var title_date = getTitleDate(i);
        h3(title_date, "#date-" + k + "-center");
    }

    //game
    var src = "";
    for (i = 0, k1 = 1; i < data.dates.length; i++, k1++) {

        divClass("mg-" + k1, "grid-item matchgame w-100vw test", "body");

        for (j = 0, k2 = 1; j < data.dates[i].games.length; j++, k2++) {

            divClass("mg-" + k1 + "-g-" + k2, "flex-row-sb game", "#mg-" + k1);

            //team1
            divClass("mg-" + k1 + "-g-" + k2 + "-team-1", "flex center team", "#mg-" + k1 + "-g-" + k2);
            divClass("mg-" + k1 + "-g-" + k2 + "-team-1-center", "team-center", "#mg-" + k1 + "-g-" + k2 + "-team-1");
            src = getSrc(i, j, "team1");
            imgClass("mg-" + k1 + "-g-" + k2 + "-team-1-img", "team-logo", "team-logo", src, "#mg-" + k1 + "-g-" + k2 + "-team-1-center");

            //time
            divClass("mg-" + k1 + "-g-" + k2 + "-time-1", "flex center time", "#mg-" + k1 + "-g-" + k2);
            divClass("mg-" + k1 + "-g-" + k2 + "-time-1-center", "time-center", "#mg-" + k1 + "-g-" + k2 + "-time-1");
            var n1 = k1.toString();
            var n2 = k2.toString();
            button("mg-" + k1 + "-g-" + k2 + "-time-1-button", "time-button button", data.dates[i].games[j].time, n1 + n2, "#mg-" + k1 + "-g-" + k2 + "-time-1-center");

            //team2
            divClass("mg-" + k1 + "-g-" + k2 + "-team-2", "flex center team", "#mg-" + k1 + "-g-" + k2);
            divClass("mg-" + k1 + "-g-" + k2 + "-team-2-center", "team-center", "#mg-" + k1 + "-g-" + k2 + "-team-2");
            src = getSrc(i, j, "team2");
            imgClass("mg-" + k1 + "-g-" + k2 + "-team-2-img", "team-logo", "team-logo", src, "#mg-" + k1 + "-g-" + k2 + "-team-2-center");
        }
    }

    //---------------------------------game details--------------------------------------//

    //detail nav
    for (i = 0, k = 1; i < data.dates.length; i++, k++) {
        for (j = 0, k2 = 1; j < data.dates[i].games.length; j++, k2++) {

            divClass("detail-nav-" + k + "-g-" + k2, "grid-item flex-row-sb w-100vw detail-nav test2", "body")

            //detail-return
            divClass("detail-return-" + k + "-g-" + k2, "flex center detail-return", "#detail-nav-" + k + "-g-" + k2);
            divClass("detail-return-center-" + k + "-g-" + k2, "detail-return-center", "#detail-return-" + k + "-g-" + k2);
            inputImg("detail-return-button-" + k + "-g-" + k2, "detail-return-input", "image", "css/images/return.svg", k, "return", "#detail-return-center-" + k + "-g-" + k2);

            //title    
            divClass("detail-title-" + k + "-g-" + k2, "flex center detail-title", "#detail-nav-" + k + "-g-" + k2);
            divClass("detail-title-center-" + k + "-g-" + k2, "detail-title-center", "#detail-title-" + k + "-g-" + k2);
            var title_detail = getTitleDetail(i, j);
            h1(title_detail, "#detail-title-center-" + k + "-g-" + k2);

            //empty space
            divClass("empty-space-" + k + "-g-" + k2, "detail-empty", "#detail-nav-" + k + "-g-" + k2);
        }
    }

    //game info
    for (i = 0, k1 = 1; i < data.dates.length; i++, k1++) {
        for (j = 0, k2 = 1; j < data.dates[i].games.length; j++, k2++) {
            divClass("gi-" + k1 + "-g-" + k2, "grid-item gi w-100vw flex-row-sb", "body");
            //team1
            divClass("gi-" + k1 + "-g-" + k2 + "-team-1", "flex center gi-team", "#gi-" + k1 + "-g-" + k2);
            divClass("gi-" + k1 + "-g-" + k2 + "-team-1-center", "gi-team-center", "#gi-" + k1 + "-g-" + k2 + "-team-1");
            src = getSrc(i, j, "team1");
            imgClass("gi-" + k1 + "-g-" + k2 + "-team-1-img", "gi-team-logo", "team-logo", src, "#gi-" + k1 + "-g-" + k2 + "-team-1-center");

            //date
            divClass("gi-" + k1 + "-g-" + k2 + "-date-1", "flex-column center gi-date", "#gi-" + k1 + "-g-" + k2);
            divClass("gi-" + k1 + "-g-" + k2 + "-date-1-center", "gi-date-center", "#gi-" + k1 + "-g-" + k2 + "-date-1");
            var day_week = getDayOfWeek(i);
            h3(day_week, "#gi-" + k1 + "-g-" + k2 + "-date-1");
            var day_num = getDayNum(i);
            p(day_num, "#gi-" + k1 + "-g-" + k2 + "-date-1");
            //            p(day_week + "'\n'" + day_num, "#gi-" + k1 + "-g-" + k2 + "-date-1");


            //team2
            divClass("gi-" + k1 + "-g-" + k2 + "-team-2", "flex center gi-team", "#gi-" + k1 + "-g-" + k2);
            divClass("gi-" + k1 + "-g-" + k2 + "-team-2-center", "gi-team-center", "#gi-" + k1 + "-g-" + k2 + "-team-2");
            src = getSrc(i, j, "team2");
            imgClass("gi-" + k1 + "-g-" + k2 + "-team-2-img", "gi-team-logo", "team-logo", src, "#gi-" + k1 + "-g-" + k2 + "-team-2-center");
        }
    }

    //location title
    for (i = 0, k1 = 1; i < data.dates.length; i++, k1++) {
        for (j = 0, k2 = 1; j < data.dates[i].games.length; j++, k2++) {

            divClass("loc-title-" + k1 + "-g-" + k2, "grid-item flex center loc-title w-100vw", "body");
            div("loc-title-center-" + k1 + "-g-" + k2, "#loc-title-" + k1 + "-g-" + k2);
            h2("Location:", "#loc-title-center-" + k1 + "-g-" + k2);
        }
    }

    //location map
    for (i = 0, k1 = 1; i < data.dates.length; i++, k1++) {
        for (j = 0, k2 = 1; j < data.dates[i].games.length; j++, k2++) {

            divClass("loc-map-" + k1 + "-g-" + k2, "grid-item flex center loc-map w-100vw", "body");
            divClass("loc-map-center-" + k1 + "-g-" + k2, "loc-map-center", "#loc-map-" + k1 + "-g-" + k2);
            var src_map = getSrcMap(i, j);
            iframe("loc-map-iframe", src_map, "#loc-map-center-" + k1 + "-g-" + k2);
        }
    }

    //location name
    for (i = 0, k1 = 1; i < data.dates.length; i++, k1++) {
        for (j = 0, k2 = 1; j < data.dates[i].games.length; j++, k2++) {

            divClass("loc-address-" + k1 + "-g-" + k2, "grid-item flex-column center loc-address w-100vw", "body");
            div("loc-address-center-" + k1 + "-g-" + k2, "#loc-address-" + k1 + "-g-" + k2);
            var address1 = getAddress1(i, j);
            var address2 = getAddress2(i, j);
            p(address1, "#loc-address-center-" + k1 + "-g-" + k2);
            p(address2, "#loc-address-center-" + k1 + "-g-" + k2);
        }
    }
}

function getChat() {

    divClass("chat", "chat grid-item chat-grid w-100vw", "body");

    //---login page---//
    divClass("login-page", "chat-grid-item w-100vw", "#chat");

    //title login
    divClass("login-title", "flex center w-100vw", "#login-page");
    div("login-title-center", "#login-title");
    h2("Login", "#login-title-center");
    p("with your Google Account", "#login-title-center");

    //login button
    divClass("login", "flex center w-100vw", "#login-page");
    div("login-center", "#login");
    $('<button/>', {
        id: "login-button",
        text: "log in",
    }).appendTo("#login-center");


    //---chat box page---//
    divClass("chat-box-page", "chat-grid-item w-100vw", "#chat");

    //logout button
    divClass("logout", "flex w-100vw center", "#chat-box-page");
    div("logout-center", "#logout");
    $('<button/>', {
        id: "logout-button",
        text: "Log out",
    }).appendTo("#logout-center");

    //chat box
    divClass("chat-box", "flex w-100vw", "#chat-box-page");
    divClass("chat-box-center", "w-100vw", "#chat-box");
    div("posts", "#chat-box-center");

    //input and send button
    divClass("inputsend", "flex w-100vw", "#chat-box-page");
    divClass("inputsend-center", "flex-row-sb w-100vw", "#inputsend");

    // chat input
    div("chat-input-div", "#inputsend-center");
    $('<input/>', {
        id: "chat-input",
        type: "text",
        placeholder: "Your message...",
    }).appendTo("#chat-input-div");

    div("chat-send-div", "#inputsend-center");
    $('<button/>', {
        id: "send-button",
        text: "send",
    }).appendTo("#chat-send-div");

    //ini chat isotope

    var config = {
        apiKey: "AIzaSyCnRyKSlegXok-3dni6UYhk94Ks-C8o7og",
        authDomain: "my-app-3e258.firebaseapp.com",
        databaseURL: "https://my-app-3e258.firebaseio.com",
        projectId: "my-app-3e258",
        storageBucket: "my-app-3e258.appspot.com",
        messagingSenderId: "151124743497"
    };
    firebase.initializeApp(config);

    document.getElementById("login-button").addEventListener("click", logIn);
    document.getElementById("logout-button").addEventListener("click", logOut);
    document.getElementById("send-button").addEventListener("click", writeNewPost);

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            $(".chat-grid").isotope({
                filter: "#chat-box-page",
            });
            getPosts();
            $("#chat-input").focus();
        } else {
            $(".chat-grid").isotope({
                filter: "#login-page",
            });
            // No user is signed in.
        }
    });
}

function getEvents() {
    //events title
    divClass("events", "events grid-item flex center w-100vw", "body");
    divClass("events-center", "events-center", "#events");
    h2("Events: ", "#events-center");

    //events
    var num_events = getEventsToShow();
    for (i = num_events, k = 1; i < data.events.length; i++, k++) {
        var event_date = getEventDate(i);
        h3(event_date, "#events-center");
        p(data.events[i].event, "#events-center");
    }
}

function getAbout() {

    divClass("about", "about grid-item flex center w-100vw", "body");
    divClass("about-center", "about-center", "#about");

    h2("About: ", "#about-center");
    h3("Mission", "#about-center");
    p("To support young athletes living in Chicago's northside neighborhoods, who have an interest in learning and playing soccer, with opportunities to learn and practice skills related to the game of soccer, specifically those skills around team cooperation and good sportsmanship.", "#about-center");
    h3("Vision", "#about-center");
    p("The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, self-discipline, and leadership.", "#about-center");
    h3("General information", "#about-center");
    p("The Northside Youth Soccer League aspires to develop strong, well-rounded, and mindful athletes through the building of character, self-discipline, and leadership.", "#about-center");
}

function getContact() {

    divClass("contact", "contact grid-item flex center w-100vw", "body");
    divClass("contact-center", "contact-center", "#contact");

    h2("Contact: ", "#contact-center");
    p("Please email us at nysl@chisoccer.org", "#contact-center");
    p("We will reply to your email as soon as we can.", "#contact-center");
}

function getButtonsAndOpen() {

    //filters arrays
    var week = [];
    week[0] = ".test"
    for (i = 0, k = 1; i < (data.dates.length); i++, k++) {
        week[k] =
            "#nav" + ", " +
            "#week" + ", " +
            "#week-" + (k - 1) + ", " +
            "#week-" + k + ", " +
            "#week-" + (k + 1) + ", " +
            "#date-" + k + ", " +
            "#mg-" + k;
    }

    var info = [];
    info[0] = ".test2"
    for (i = 0, k1 = 1; i < data.dates.length; i++, k1++) {
        info[k1] = [];
        for (j = 0, k2 = 1; j < data.dates[i].games.length; j++, k2++) {
            info[k1][k2] =
                "#detail-nav-" + k1 + "-g-" + k2 + ", " +
                "#gi-" + k1 + "-g-" + k2 + ", " +
                "#loc-title-" + k1 + "-g-" + k2 + ", " +
                "#loc-map-" + k1 + "-g-" + k2 + ", " +
                "#loc-address-" + k1 + "-g-" + k2;
        }
    }


    //---buttons---//
    $("#dropdown-button").click(function () {
        var val_drop = +$(this).val();
        var num_week = val_drop % 100;
        var drop = parseInt(val_drop / 100) % 10;
        var menu = parseInt(val_drop / 1000) % 10;

        if (drop == 0) {
            if (menu == 1) {
                $(".grid").isotope({
                    itemSelector: '.grid-item',
                    filter: "#nav, " + week[(num_week)] + ", " + "#dropdown",
                });
            } else if (menu == 2) {
                $(".grid").isotope({
                    itemSelector: '.grid-item',
                    filter: "#nav, #events, #dropdown",
                });
            } else if (menu == 3) {
                $(".grid").isotope({
                    itemSelector: '.grid-item',
                    filter: "#nav, #chat, #dropdown",
                });
            } else if (menu == 4) {
                $(".grid").isotope({
                    itemSelector: '.grid-item',
                    filter: "#nav, #about, #dropdown",
                });
            } else if (menu == 5) {
                $(".grid").isotope({
                    itemSelector: '.grid-item',
                    filter: "#nav, #contact, #dropdown",
                });
            }
            $(this).val(val_drop + 100);
            $(".week-button, .time-button").prop('disabled', true);

        } else {
            if (menu == 1) {
                $(".grid").isotope({
                    itemSelector: '.grid-item',
                    filter: "#nav, " + week[(num_week)],
                });
            } else if (menu == 2) {
                $(".grid").isotope({
                    itemSelector: '.grid-item',
                    filter: "#nav, #events",
                });
            } else if (menu == 3) {
                $(".grid").isotope({
                    filter: "#nav, #chat",
                });
            } else if (menu == 4) {
                $(".grid").isotope({
                    filter: "#nav, #about",
                });
            } else if (menu == 5) {
                $(".grid").isotope({
                    filter: "#nav, #contact",
                });
            }
            $(this).val(val_drop - 100);
            $(".week-button").prop('disabled', false);
            $(".time-button").prop('disabled', false);
            $("#week-button-" + num_week).prop('disabled', true);
        }
        console.log(num_week);
        console.log(drop);
        console.log(menu);
    });

    $("#home-button").click(function () {

        var val_drop = +$(".dropdown-button").val();
        var num_week = val_drop % 100;

        $(".grid").isotope({
            filter: week[num_week],
        });
        $(".week-button, .time-button").prop('disabled', false);
        $("#week-button-" + num_week).prop('disabled', true);
        val_drop -= 100;

        val_drop = val_drop.toString().split("");
        val_drop[0] = "1";
        val_drop = val_drop.join("");
        val_drop = +val_drop;

        $(".dropdown-button").val(val_drop);
    })

    $("#events-button").click(function () {

        var val_drop = +$(".dropdown-button").val();

        $(".grid").isotope({
            filter: "#nav, #events",
        });
        $(".week-button, .time-button").prop('disabled', false);
        val_drop -= 100;

        val_drop = val_drop.toString().split("");
        val_drop[0] = "2";
        val_drop = val_drop.join("");
        val_drop = +val_drop;

        $(".dropdown-button").val(val_drop);

    })

    $("#chat-button").click(function () {

        var val_drop = +$(".dropdown-button").val();

        $(".grid").isotope({
            filter: "#nav, #chat",
        });
        $(".week-button, .time-button").prop('disabled', false);
        val_drop -= 100;

        val_drop = val_drop.toString().split("");
        val_drop[0] = "3";
        val_drop = val_drop.join("");
        val_drop = +val_drop;

        $(".dropdown-button").val(val_drop);

    })

    $("#about-button").click(function () {

        var val_drop = +$(".dropdown-button").val();

        $(".grid").isotope({
            filter: "#nav, #about",
        });
        $(".week-button, .time-button").prop('disabled', false);
        val_drop -= 100;

        val_drop = val_drop.toString().split("");
        val_drop[0] = "4";
        val_drop = val_drop.join("");
        val_drop = +val_drop;

        $(".dropdown-button").val(val_drop);

    })

    $("#contact-button").click(function () {

        var val_drop = +$(".dropdown-button").val();

        $(".grid").isotope({
            filter: "#nav, #contact",
        });
        $(".week-button, .time-button").prop('disabled', false);
        val_drop -= 100;

        val_drop = val_drop.toString().split("");
        val_drop[0] = "5";
        val_drop = val_drop.join("");
        val_drop = +val_drop;

        $(".dropdown-button").val(val_drop);

    })

    $(".week-button").click(function () {
        var f;
        f = +$(this).val();
        var val_drop = +$(".dropdown-button").val();

        if (parseInt(val_drop % 100) < f) {
            $(".dropdown-button").val(val_drop + 1);
        } else {
            $(".dropdown-button").val(val_drop - 1);
        }
        $(".week-button").prop('disabled', false);
        $("#week-button-" + f).prop('disabled', true);
        $(".grid").isotope({
            filter: week[f],
        });
        //        }
    });

    $(".time-button").click(function () {
        var val = +$(this).val();
        var f1 = parseInt(val / 10);
        var f2 = val % 10;
        var filter2 = info[f1][f2];

        $(".grid").isotope({
            filter: filter2,
        });
    });

    $(".detail-return-input").click(function () {
        var return_val = $(this).val();
        $(".grid").isotope({
            filter: week[return_val],
        });
    });

    $("#inputsend").on("keydown", function (e) {
        if (e.keyCode == 13) {
            writeNewPost();
        }
    })
    openApp(week);
}


//---chat functions---//
function logIn() {

    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            $(".chat-grid").isotope({
                filter: "#chat-box-page",
            });
        } else {
            // No user is signed in.
        }
    });
    getPosts();
}

function logOut() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        $(".chat-grid").isotope({
            filter: "#login-page",
        });

    }, function (error) {
        console.log("error");
        // An error happened.
    });
}

function writeNewPost() {

    var text = $("#chat-input").val();

    if (text != "") {
        var userName = firebase.auth().currentUser.displayName;

        // a post entry.
        var postData = {
            name: userName,
            body: text
        };

        // get a key for a new post
        var newPostKey = firebase.database().ref().child('myMatch').push().key;

        // updates {newPostKey} = postData;
        var updates = {};
        //    update.name = "Raul";
        updates[newPostKey] = postData;

        $("#chat-input").val("");
        getPosts();
    } else {
        return false;
    }

    return firebase.database().ref().child('myMatch').update(updates);
}

function getPosts() {
    firebase.database().ref('myMatch').on('value', function (data) {
        var logs = document.getElementById('posts');
        logs.innerHTML = "";

        var posts = data.val();


        for (var key in posts) {
            var text = document.createElement("div");
            var element = posts[key];

            text.append(element.body);
            logs.append(text);
        }
        $("#chat-box-center").stop().animate({
            scrollTop: $("#chat-box-center")[0].scrollHeight
        }, 1000);
    })
}


//---functions---//
function divClass(id, class1, here) {
    $('<div/>', {
        id: id,
        class: class1,
    }).appendTo(here);
}

function div(id, here) {
    $('<div/>', {
        id: id,
    }).appendTo(here);
}

function h1(text, here) {
    $('<h1/>', {
        text: text,
    }).appendTo(here);
}

function h2(text, here) {
    $('<h2/>', {
        text: text,
    }).appendTo(here);
}

function h3(text, here) {
    $('<h3/>', {
        text: text,
    }).appendTo(here);
}

function p(text, here) {
    $('<p/>', {
        text: text,
    }).appendTo(here);
}

function iframe(class1, src, here) {
    $('<iframe/>', {
        class: class1,
        src: src,
    }).appendTo(here);
}

function img(id, alt, src, here) {
    $('<img/>', {
        id: id,
        alt: alt,
        src: src,
    }).appendTo(here);
}

function imgClass(id, class1, alt, src, here) {
    $('<img/>', {
        id: id,
        class: class1,
        alt: alt,
        src: src,
    }).appendTo(here);
}

function button(id, class1, text, value, here) {
    $('<button/>', {
        id: id,
        class: class1,
        text: text,
        value: value,
    }).appendTo(here)
}

function buttonSvg(id, class1, value, here) {
    $('<button/>', {
        id: id,
        class: class1,
        value: value,
    }).appendTo(here)
}

function inputImg(id, class1, type, src, val, alt, here) {
    $('<input/>', {
        id: id,
        class: class1,
        type: type,
        src: src,
        value: val,
        alt: alt,
    }).appendTo(here)
}

function getSrc(i, j, team1or2) {
    var team;
    var src = "";
    if (team1or2 == "team1") {
        team = data.dates[i].games[j].team1;
    }
    if (team1or2 == "team2") {
        team = data.dates[i].games[j].team2;
    }

    if (team == "U1") {
        src = "css/images/team-logos/U1.svg";
    }
    if (team == "U2") {
        src = "css/images/team-logos/U2.svg";
    }
    if (team == "U3") {
        src = "css/images/team-logos/U3.svg";
    }
    if (team == "U4") {
        src = "css/images/team-logos/U4.svg";
    }
    if (team == "U5") {
        src = "css/images/team-logos/U5.svg";
    }
    if (team == "U6") {
        src = "css/images/team-logos/U6.svg";
    }
    return src;
}

function getSrcMap(i, j) {
    var location = data.dates[i].games[j].location;
    var map_src = "";
    if (location == "AJ Katzenmaier") {
        map_src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.656836443422!2d-87.6312603845582!3d41.90023667922044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24+W+Walton+St%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2ses!4v1508167160345";
    }
    if (location == "Greenbay") {
        map_src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0251959124826!2d-87.64023168455779!3d41.91381707921941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734+N+Orleans+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2ses!4v1508167659225";
    }
    if (location == "Howard A Yeager") {
        map_src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.585683085616!2d-87.66511458455746!3d41.9232645792187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245+N+Southport+Ave%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2ses!4v1508172193965";
    }
    if (location == "Marjorie P Hart") {
        map_src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.2886667518005!2d-87.64815928455727!3d41.92964807921816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625+N+Orchard+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2ses!4v1508172347144";
    }
    if (location == "North") {
        map_src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.336427766927!2d-87.648358384558!3d41.90712597921987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af13a8945%3A0xb6ad1ec2b6f379ba!2s1409+N+Ogden+Ave%2C+Chicago%2C+IL+60610%2C+USA!5e0!3m2!1sen!2ses!4v1508172501443";
    }
    if (location == "South") {
        map_src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.749141506375!2d-87.65354528455761!3d41.91975117921891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101+N+Fremont+St%2C+Chicago%2C+IL+60614%2C+USA!5e0!3m2!1sen!2ses!4v1508172548653";
    }
    return map_src;
}

function getAddress1(i, j) {

    var address_1 = "";
    var location = data.dates[i].games[j].location;

    if (location == "AJ Katzenmaier") {
        address_1 = "AJ Katzenmaier Elementary";
    }
    if (location == "Greenbay") {
        address_1 = "Greenbay Elementary";
    }
    if (location == "Howard A Yeager") {
        address_1 = "Howard A Yeager Elementary";
    }
    if (location == "Marjorie P Hart") {
        address_1 = "Marjorie P Hart Elementary";
    }
    if (location == "North") {
        address_1 = "North Elementary";
    }
    if (location == "South") {
        address_1 = "South Elementary";
    }
    return address_1;
}

function getAddress2(i, j) {

    var address_2 = "";
    var location = data.dates[i].games[j].location;

    if (location == "AJ Katzenmaier") {
        address_2 = "24 W. Walton St., Chicago, IL 60610";
    }
    if (location == "Greenbay") {
        address_2 = "1734 N. Orleans St., Chicago, IL 60614";
    }
    if (location == "Howard A Yeager") {
        address_2 = "2245 N. Southport Ave., Chicago, IL 60614";
    }
    if (location == "Marjorie P Hart") {
        address_2 = "2625 N. Orchard St., Chicago, IL 60614";
    }
    if (location == "North") {
        address_2 = "1409 N. Ogden Ave., Chicago, IL 60610";
    }
    if (location == "South") {
        address_2 = "2101 N. Fremont St., Chicago, IL 60614";
    }
    return address_2;
}

function getTitleDate(i) {
    var someday = new Date();
    var month = +data.dates[i].month - 1;
    var day = +data.dates[i].day;
    var year = +data.dates[i].year;

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];

    someday.setFullYear(year, month, day);

    return days[someday.getDay()] + " " + day + " " + months[month] + " " + year;
}

function getEventDate(i) {
    var someday = new Date();
    var month = +data.events[i].month - 1;
    var day = +data.events[i].day;
    var year = +data.events[i].year;

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

    someday.setFullYear(year, month, day);

    return months[month] + " " + day;
}

function getEventsToShow() {
    var date = new Date();
    var d = +date.getDate();
    var m = +date.getMonth();
    var y = +date.getFullYear();

    var num_events = 0;

    for (var i = 0; i < data.events.length; i++) {
        console.log(+data.events[i].year);
        console.log((+data.events[i].month) - 1);
        console.log(+data.events[i].day);

        if (y < +data.events[i].year) {
            break;
        } else if (y == +data.events[i].year) {
            if (m < (+data.events[i].month - 1)) {
                break;
            } else if (m == (+data.events[i].month - 1)) {
                if (d <= +data.events[i].day) {
                    break;
                }
            }
        }
    }
    num_events = i;
    console.log(num_events);
    return num_events;
}

function getDayOfWeek(i) {
    var someday = new Date();
    var month = +data.dates[i].month - 1;
    var day = +data.dates[i].day;
    var year = +data.dates[i].year;

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    someday.setFullYear(year, month, day);

    return days[someday.getDay()];
}

function getDayNum(i) {
    var month = +data.dates[i].month;
    var day = +data.dates[i].day;
    var year = +data.dates[i].year;

    return day + " - " + month + " - " + year;
}

function getTitleDetail(i, j) {
    var team1, Team2;
    team1 = data.dates[i].games[j].team1;
    team2 = data.dates[i].games[j].team2;

    return team1 + " vs " + team2;
}

function getInitalFilter() {

    var date = new Date();
    var d = +date.getDate();
    var m = +date.getMonth();
    var y = +date.getFullYear();
    console.log(d, m, y);
    //        d = 1;
    //        m = 9;
    //        y = 2018;
    for (var i = 0; i < data.dates.length; i++) {
        if (y < +data.dates[i].year) {
            break;
        } else if (y == +data.dates[i].year) {
            if (m < (+data.dates[i].month - 1)) {
                break;
            } else if (m == (+data.dates[i].month - 1)) {
                if (d <= +data.dates[i].day) {
                    break;
                }
            }
        }
    }
    var num_week = i + 1;

    return num_week;
}

function openApp(week) {
    for (var i = 0; i < week.length; i++) {
        $(".grid").isotope({
            itemSelector: '.grid-item',
            layoutMode: 'fitRows',
            filter: week[i],
        });
    }

    var num_week = getInitalFilter();

    $(".grid").isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        filter: "#nav, " + week[(num_week)],
    });
    $("#week-button-" + num_week).prop('disabled', true);
}
