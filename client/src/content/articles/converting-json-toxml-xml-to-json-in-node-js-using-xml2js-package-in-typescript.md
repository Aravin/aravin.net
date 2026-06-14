---
title: 'Converting JSON to XML & XML to JSON in Node.js using xml2js package in TypeScript'
description: 'Converting JSON to XML & XML to JSON in Node.js using xml2js package in TypeScript'
published_at: '2020-08-12T00:00:00.000Z'
category: 'Node.js'
tags: 'typescript, nodejs, xml, json, xml2js'
---

# Converting JSON to XML & XML to JSON in Node.js using xml2js package in TypeScript

### Install xml2js

```bash
npm install xml2js
npm install @types/xml2js --save-dev
```

### Program

```typescript
import { parseString, Builder } from 'xml2js';

// Convert string/XML to JSON
function toJson(xml: string) {
  parseString(xml, { explicitArray: false }, function (error, result) {
    console.log(result);
  });
}

// Convert string/JSON to XML
function toXML(json: string) {
  const builder = new Builder();
  console.log(builder.buildObject(json));
}

// Test Data
const employeeJson: any = {
  Employee: {
    name: 'Aravind',
    age: 24,
    sex: 'Male',
  },
};

const employeeXml = '<Employee><name>Aravind</name><age>24</age><sex>Male</sex></Employee>';

// Result
toJson(employeeXml);
toXML(employeeJson);
```

### SAMPLE OUTPUT

```json
{
  "Employee": {
    "name": "Aravind",
    "age": "24",
    "sex": "Male"
  }
}
```

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Employee>
  <name>Aravind</name>
  <age>24</age>
  <sex>Male</sex>
</Employee>
```
