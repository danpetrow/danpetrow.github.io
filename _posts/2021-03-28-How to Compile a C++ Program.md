---
layout: post
author: dan
permalink: /:title/
---
<h1>How to Compile a C++ Program</h1>
After learning python learning a compiled language like C++ seemed both intimidating and unneeded. However the more I've learned about programming the more value I can see in removing as much abstraction as possible and getting closer to machine code. I found a C++ program that I wanted to use but I didn't find much in the way of documentation for how to compile the code into a usable program for Windows. Here is what I learned about how to compile some C++ code into an exe for Windows.

First you will want to install the Chocolately package manage if you don't already have it. Here you can find the documentation for that. https://docs.chocolatey.org/en-us/choco/setup.(Alternatively, I believe you can simply install NodeJS which will install Chocolatey.)

Next you will want to open up the command line and use Chocolatey to install MinGW-w64. 
$ choco install mingw

While still in the command line open up the directory with your .cpp file.

$ cd 'C:/Users/Dan/Desktop/Code'

Now enter the following command to compile the source file using g++.

$ g++ -o <your-exe-name-goes-here> code.cpp

Voila you have compiled an exe from some code written in C++.