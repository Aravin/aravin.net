---
title: 'Steps to integrate CCAvenue Payment gateway to your website using Node.js - Express Framework (with Screenshot)'
description: 'Steps to integrate CCAvenue Payment gateway to your website using Node.js - Express Framework (with Screenshot)'
published_at: '2017-03-10T00:00:00.000Z'
category: 'JavaScript'
tags: 'cc-avenue'
---

# Steps to integrate CCAvenue Payment gateway to your website using Node.js - Express Framework (with Screenshot)

This is a tutorial to integrate CCAvenue Payment gateway to your website. Please follow the steps carefully for proper integration.

### Prerequisites:

- Active CCAvenue account.
  - Merchant ID
  - Access Code
  - Secret or Encryption or Working Key
- Integration kit from CCAvenue website.
- Whitelist your domain/localhost
- Any text editor. (VS Code Editor Preferred)

## 1. Account & Domain

If you're testing in your local environment, you must add your localhost to your CCAvenue account. Also, make sure the valid port number is provided to CCAvenue for whitelisting.

Example: If your localhost URL is `http://localhost:55181/` you should have Access code & working key for this domain, not your main domain which you're using for production. Many people use to forget this. If you whitelisted localhost:1234 and if you're using localhost:1235 or some other port number will not work. Please make sure the testing URL matches your CCAVenue details.

## 2. Download Integration Kit

Login into you CCAvenue account. Then go to Resources -> Web Integration Kit -> Download Integration kit & then choose "Download Node.js" as shown in the image below.

![Download Node.js](/images/articles/ccavene_integration_using_nodejs_express_4_1_cf84de234d.png)

Also, I have attached working copy of the Node.js integration kit here: [CCAvenue-NodeJs-IntegrationKit](https://www.aravin.net/uploads/CC_Avenue_Node_Js_Integration_Kit_1_f85a948a79.zip)

## 3. Choose the Integration Method

CCAvenue gives 3 different types of integration.

- Billing Page (Non-Seamless)
- iFrame Checkout
- Checkout Form

In our tutorial, we are going to use Billing page method. In backend almost these 3 methods are same but front-end behaviors will vary. You can find more details about this integration method in the ccavenue website.

## 4. Setting up the project

Open the folder `nonseamless` and open it in any of your favorite editors. I prefer VSCode. Open the project path in command prompt in windows | bash in mac os. Install the dependencies using the following command `npm install` This command will install all the dependencies for the project to be up and running. You will find a new folder `node_modules`

## 5. Changes to be done in files

1. Open the file and `ccavRequestHandler.js` replace with your working key and access code.
2. `ccavResponseHandler.js` - replace with your working key.
3. `dataFrom.html` - replace the merchant id & success and redirect URL to your localhost URL.

Thanks all, you are ready to collect payment on your website.

## 6. Start the Node Server

From the root of the project, run the following command `node run_node.js` which will run the node server from the file `run_node.js`

## 7. Test the integration

Browse the URL: localhost:/about. You will be on the following page.

![Checkout Page 1](/images/articles/ccavene_integration_using_nodejs_express_2_1_d7a0ed61f0.png)

![Checkout Page 2](/images/articles/ccavene_integration_using_nodejs_express_3_1_733705158e.png)

### Download the working integration kit

[CCAvenue-NodeJs-IntegrationKit](https://www.aravin.net/uploads/CC_Avenue_Node_Js_Integration_Kit_1_f85a948a79.zip)

All the best :) For any clarification please write your comments below
