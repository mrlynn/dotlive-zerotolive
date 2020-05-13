1. Launching a Cluster
- Open a browser to https://cloud.mongodb.com
- Click Login
- < enter your login information >

[note: this will open access to atlas and show the BUILD A CLUSTER BUTTON]

1. Click Build a Cluster
    1. Select AWS as cloud provider.
    1. Open Tier - talk about how you can select a larger tier - but it will cost money… you will need a credit card. Let’s leave it at M0 for now.
    1. Change the cluster name to MyFirstCluster.

    1. Add a Database user.
    1. Click Database Access from left hand menu
    1. Click Add New Database User
    1. Enter “mike” for username”
    1. Click Atlas Admin for User Privilege
Explain temporary users.
Click Add User.
Add a network path.
Click Network Access from left-hand menu
Click Add IP Address
Explain adding current IP and risks with adding access from all.
Click Confirm… this will take a while.
Add a Stitch App.
Click Stitch from the top tabs.
Click Create App.
Name the App ZeroToLive
Link to the MyFirstcluster cluster.
Click Create Stitch Application (This will take a while)
Add a Rule
Click Rules from the left-hand menu of the stitch app.
Click the plus button to the right of the word mongodb-atlas under rules.
Specify zerotolive as the database name.
Specify responses as the collection name.
Keep No template.
Explain that you’re giving the stitch app access to create documents in the zerotolive database.
Ensure that Read/Write are clicked - giving access to read/write from anonymous.
Click Add Collection.
Add a user provider.
Click users from the left-hand menu.
Click Providers from the tabs
Click EDIT next to Allow users to log in anonymously.
