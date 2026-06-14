---
title: 'How to encrypt plain text into SHA1 hash using C# program?'
description: 'How to encrypt plain text into SHA1 hash using C# program?'
published_at: '2021-08-10T00:00:00.000Z'
category: 'C#'
tags: 'c-sharp, sha1, encryption'
---

# How to encrypt plain text into SHA1 hash using C# program?

As we all know, SHA is an Cryptography hash function that is very much similar to [MD5 hashes](http://aravin.net/how-to-encrypt-plan-text-into-md5-hash-in-csharp-program/). SHA stands for Secure Hash Algorithm,. There are different versions in SHA like SHA-0, SHA-1, SHA-2, and SHA-3.
We are going to write program about SHA1 hash using C# code. We should know some basic thing about SHA1 before getting into code. So here are the some basic thing about SHA1,

1. It is an Hash Function.
2. It produce 160 bit output (20 Byte).
3. Output will be 20 digit (Hexadecimal value)

### Here is the program for SHA1 using C#:

```csharp
using System;
using System.Security.Cryptography;
using System.Text;

namespace sha {
  class Program {
    static void Main(string[] args) {
      string plain, hash;
      byte[] temp;
      plain = "Value to be hashed";
      SHA1 sha = new SHA1CryptoServiceProvider(); // This is one implementation of the abstract class SHA1.
      temp = sha.ComputeHash(Encoding.UTF8.GetBytes(plain)); //storing hashed vale into byte data type
      StringBuilder sb = new StringBuilder();
      for (int i = 0; i < temp.Length; i++) {
        sb.Append(temp[i].ToString("x2"));
      }
      hash = sb.ToString();
      Console.WriteLine(hash);
      Console.ReadKey();
    }
  }
}
```

The above code will generate the following output.
21d90aad4d34f48f4aad9b5fa3c37c118af16df9

Same SHA1 hash Program using Input from User:

```csharp
using System;
using System.Security.Cryptography;
using System.Text;

namespace sha {
  class Program {
    static void Main(string[] args) {
      string plain, hash;
      byte[] temp;
      Console.WriteLine("Enter any value : ");
      plain = Console.ReadLine();
      SHA1 sha = new SHA1CryptoServiceProvider(); // This is one implementation of the abstract class SHA1.
      temp = sha.ComputeHash(Encoding.UTF8.GetBytes(plain)); //storing hashed vale into byte data type
      StringBuilder sb = new StringBuilder();
      for (int i = 0; i < temp.Length; i++) {
        sb.Append(temp[i].ToString("x2"));
      }
      hash = sb.ToString();
      Console.WriteLine(hash);
      Console.ReadKey();
    }
  }
}
```
