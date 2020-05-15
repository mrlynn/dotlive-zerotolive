const { Stitch, AnonymousCredential } = stitch;

function sendResponse() {
    client.auth
        .loginWithCredential(new stitch.AnonymousCredential())
        .then(() => insertData())
        .catch(err => console.error(`login failed with error: ${err}`));
}

function insertData() {
    var n = new Date();
    var obj = {};
    obj.mdb_created = n;

    console.log("In insertData...");

    obj.name = $("#name").val();
    obj.email = $("#email").val();
    obj.tier = $("#tier").val();
    obj.interest = $("#interest").val();

    obj.browser = {};
    obj.browser.ua = navigator.userAgent || undefined;
    obj.browser.lang = navigator.language || undefined;
    obj.browser.plat = navigator.platform || undefined;
    obj.owner = client.auth.authInfo.userId;

    db.collection("responses")
        .insertOne(obj)
        .then(recordSuccess)
        .catch(err => console.error(`login failed with error: ${err}`));
}

function recordSuccess() {
    window.location = "thankyou.html";
}
