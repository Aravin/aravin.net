---
title: 'Complete guide to integrate CCAvenue Payment gateway into ASP.NET website - with Screenshot'
description: 'Complete guide to integrate CCAvenue Payment gateway into ASP.NET website - with Screenshot'
published_at: '2020-05-15T00:00:00.000Z'
category: '.NET'
tags: 'cc avenue, .net'
---

# Complete guide to integrate CCAvenue Payment gateway into ASP.NET website - with Screenshot

## About this tutorialThis is an end-to-end guide to integrating a CCAvenue payment gateway into ASP.NET web application using official kit. Starting from account setup to successful payment.

## Pre-Requirement

1. Visual Studio
2. Active CCAvenue account
3. Merchant ID
4. Access Code
5. Working Key
6. Official CCAvenue kit
7. Little knowledge about C\\# \u0026 ASP.NET

### Setting up your CCAvenue account for localhostIn order to run your CCAvenuepayment gateway in localhost, we need to add our localhost into CCAvenue account. You have to write an email to `service@ccavenue.com` and ask him to add your localhost. Kindly refer screenshot below for more details.

Example: http://localhost:55181/

#### Screenshot 1

![CCAvenue-Integration-Guide-2-1.png](/images/articles/CC_Avenue_Integration_Guide_2_1_e9173aa429.png)

### Download Integration Kit from CCAvenue websiteIntegration kit will be available on http://ccavenue.com → Resources → Web Integration Kit → Download Integration Kit → Download ASP.NET 3.5

![CCAvenue-Integration-Guide-3-1.png](/images/articles/CC_Avenue_Integration_Guide_3_1_6de90cb895.png)

Also, you can download from here: [ASP.Net\\\_Kit\\\_Version\\\_3.5](https://res.cloudinary.com/aravin/raw/upload/v1629651987/ASP_Net_Kit_Version_3_5_1_1ebd67b9ab.zip)

### Extract the Integration Kit

### Open the Project in Visual Studio

1. Open Visual Studio
2. Choose Open → Project/Solution from the file menu.

![CCAvenue-Integration-Guide-5-1.png](/images/articles/CC_Avenue_Integration_Guide_5_1_a5bd98de1e.png)

1. Browse to the downloaded Integration kit. Open the `NON-SEAMLESS KIT`

![CCAvenue-Integration-Guide-6-1.png](/images/articles/CC_Avenue_Integration_Guide_6_1_adb7d4c73b.png)

1. Open `MCPG.ASP.net.ENC`

![CCAvenue-Integration-Guide-7-2.png](/images/articles/CC_Avenue_Integration_Guide_7_2_88c5aa22be.png)

### Add Reference to the project \\[Very Important\\]Many people used to face an issue in this stage. But it is really an easy step. Kindly follow the screenshot.

Right-click the References in solution explorer → Add Reference

![CCAvenue-Integration-Guide-8-1.png](/images/articles/CC_Avenue_Integration_Guide_8_1_4746e10cd7.png)

> Note: Reference DLL file will be available in downloaded integration kit itself.

Browse the downloaded folder

1. bin → MCPG.ASP.net.ENC.dll \u0026 add it to the project.
2. lib → MCPG.CCA.Util.dll \u0026 add it to project.
   > Note: REMOVE existing dll, if any. You have to add fresh dll.

### Add localhost to the projectThis step is mandatory to run the CCAvenue setup in local system i.e in a development system. If you didn't ask localhost, this setup won't work because by default asp.net project will point to some default IP like `http://127.0.0.1/`

So, better add your localhost i.e In my case it is which `http://localhost:55181/` is same as in my CCAvenue Account, which we have added in step 1\.

> Right click project → Properties

![CCAvenue-Integration-Guide-10-1.png](/images/articles/large_CC_Avenue_Integration_Guide_10_1_d723bec42c.png)

### Change Merchant ID, Acess Code and Working Key in our applicationPages to be modified:-

1. ccavRequestHandler.aspx.cs
2. ccavResponseHandler.aspx.cs
3. dataFrom.htmChange workingKey and strAccessCode in ccavRequestHandler.aspx.cs ![CCAvenue-Integration-Guide-11-1.png](/images/articles/large_CC_Avenue_Integration_Guide_11_1_59b110868b.png)

Change workingKey again in ccavResponseHandler.aspx.cs

![CCAvenue-Integration-Guide-12-1.png](/images/articles/CC_Avenue_Integration_Guide_12_1_966bcf8cbb.png)

Change merchant_id, redirect_url, cancel_url - VERY IMPORTANT

![CCAvenue-Integration-Guide-13-1.png](/images/articles/CC_Avenue_Integration_Guide_13_1_b267fab24e.png)

#### Great :) If you followed all the step, you can build \u0026 run

### Choose between Testing/Live environmentYou can choose Testing or Live environment from the `ccavRequestHandler.aspx`

For Live Environment

    https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction

For Testing Environment

    https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction

### Making Payment in Live (Production) EnvironmentRun the application, you will see the following account.

![CCAvenue-Integration-Guide-15-1-1.png](/images/articles/CC_Avenue_Integration_Guide_15_1_1_cac29ac52f.png)

Fill the details \u0026 Proceed to checkout

Choose the preferred payment gateway from Credit Card/Debit Card/Net Baking etc..

Enter the required details and click on make payment

![CCAvenue-Integration-Guide-17-1.png](/images/articles/CC_Avenue_Integration_Guide_17_1_4e9e263a76.png)

Finally, Complete the payment :)

![CCAvenue-Integration-Guide-18-1.png](/images/articles/CC_Avenue_Integration_Guide_18_1_ee85909703.png)

That's all :) You can push your code to Live Website :)

I tried my best to cover all the steps in screenshot \u0026 steps. If I missed any steps, kindly drop the queries in a comment section.

Also, for any clarification or doubt, please write back to me on comment section. I will try to reply as soon as possible.
