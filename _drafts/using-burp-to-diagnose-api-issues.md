# Setting up Burp Proxy to Diagnose Network-related app issues

1. Download and install Burp
1. Turn off 'intercept mode'
1. Follow guide to connect to Firefox
1. Set up manual proxy to Burp 127.0.0.1:8080 FOR ALL SERVICES
1. Then identify srdepmobileapp in Burp and right click to 'Set in scope'
  * this ensures that Burp stops looking at anything other than srdepmobileapp