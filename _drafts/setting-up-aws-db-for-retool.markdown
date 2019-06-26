https://aws.amazon.com/getting-started/tutorials/create-connect-postgresql-db/

(START HERE)

Then you have to whitelist it

https://docs.perimeter81.com/docs/amazon-ec2

Change inbound traffic to the IP that Retool gives you, and include this CIDR notation (I think you can get away with /256 but I need to test that...)

https://whatismyipaddress.com/cidr

Then, we have to figure out how to _write_ to our new DB so we can have actual data on there.

Can retool translate a CSV file into a DB table???

https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ConnectToPostgreSQLInstance.html

BINGO