---
title: 'How to integrate CCAvenue payment gateway into ASP.NET Razor website? (with steps & screenshots)'
description: 'How to integrate CCAvenue payment gateway into ASP.NET Razor website? (with steps & screenshots)'
published_at: '2017-08-12T00:00:00.000Z'
category: '.NET'
tags: 'cc-avenue, asp-net, payment-gateway'
---

# How to integrate CCAvenue payment gateway into ASP.NET Razor website? (with steps & screenshots)

Hi All, this tutorial is about CCAvenue payment gateway integration for ASP.NET Razor website (.CSHTML). If you are using ASP.NET web pages (.ASPX) you can check the tutorial [here](https://www.aravin.net/).

## Pre-Requisites

1. Visual Studio 2012 or Latest
2. CCAvenue Active account with
3. Merchant ID
4. Encryption Key
5. Access Code
6. CCAvenue Integration Kit for ASP.NET
7. Custom ASP.NET Integration Kit for Razor (Download here: [ccavenue_aspnet_razor_kit_1](https://res.cloudinary.com/aravin/raw/upload/v1629652225/CC_Avenue_ASPNET_Razor_Kit_1_3_65d2691a74.zip))

## Steps for Integration

### 1. Download Custom ASP.NET Integration Kit for Razor

Download the ASP.NET Integration Kit for Razor from the above link and import into your project.

![CCAvenue Integration Kit Downloaded](/images/articles/large_CC_Avenue_Integration_Guide_6_1_af98784c26.png)

### 2. Adding reference to the project

Download the CCAvenue Integration kit and add Right click on your visual studio project -> Add -> Reference and choose the reference file `MCPG.CCA.Util.dll` and import it into the visual studio project.

![Reference File Inclusion](/images/articles/medium_cca_reference_1_3d72ffeb29.png)

### 3. Adding Access Code, Encryption and Merchant ID

Add Working key and Merchant ID to `index.cshtml` file.

Search for Snippet:

```csharp
string workingKey = "add_your_32_bit_working_key_here";
```

Replace with your 32 secret key given from CCAvenue

Add Working Key, Access Code to `processor.cshtml` file.

Search for Snippet:

```csharp
var workingKey = "add_your_32_bit_working_key_here";
```

and Snippet:

```csharp
var strAccessCode = "add_your_access_key_here";
```

Replace with your working key and access key.

### 4. Set Test/Production environment

Open `processor.cshtml` and change form action as following:

For Testing:
`https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction`

For Release:
`https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction`

### 5. Build & Run the project

i. Clean the project.
ii. Build the Project.
iii. Run the Project.

That's all :)
if you did all the steps as mentioned, you will get the website as shown below
Once you filled out this form, you will redirect to CCAvenue checkout page. Kindly drop your concern/issues/suggestion in below comment section.

![Checkout Form](/images/articles/thumbnail_cca_checkout_page_1_498a97f9eb.jpg)
