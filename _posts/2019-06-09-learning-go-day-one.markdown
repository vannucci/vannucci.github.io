---
layout: post
title:  "Learning Go: Day 1"
date:   2019-06-09 14:47:42 -0500
categories: go
---
# Learn Go Every Day

So today (okay and yesterday) I started learning Go.

Not gonna lie, I'm kind of loving it. It's really a slick language, combining a good strong and flexible type system, with just good syntax and (from what I've read) strong concurrency.

In this series I want to explore doing things with Go. My focus will be largely on doing _web development_ things with Go, but there may be some other programs or ideas sprinkled in there.

Every day learn some Go.

Let's start with the simple wiki web app that I made using [this guide](https://golang.org/doc/articles/wiki/)

```
package main

import (
	"errors"
	"fmt"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
	"regexp"
)

var validPath = regexp.MustCompile("^/(edit|save|view)/([a-zA-Z0-9]+)$")

type Page struct {
	Title string
	Body  []byte
}

func (p *Page) save() error {
	filename := p.Title + ".txt"
	return ioutil.WriteFile(filename, p.Body, 0600)
}

func loadPage(title string) (*Page, error) {
	filename := title + ".txt"
	body, err := ioutil.ReadFile(filename)
	if err != nil {
		return nil, err
	}
	return &Page{Title: title, Body: body}, nil
}

func getTitle(w http.ResponseWriter, r *http.Request) (string, error) {
	m := validPath.FindStringSubmatch(r.URL.Path)
	if m == nil {
		http.NotFound(w, r)
		return "", errors.New("Invalid Page Title")
	}
	return m[2], nil //The title is the second subexpression
}

var templates = template.Must(template.ParseFiles("edit.html", "view.html", "post.html"))

func renderTemplate(w http.ResponseWriter, tmpl string, p *Page) {
	err := templates.ExecuteTemplate(w, tmpl+".html", p)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func saveHandler(w http.ResponseWriter, r *http.Request, title string) {
	body := r.FormValue("body")
	p := &Page{Title: title, Body: []byte(body)}
	err := p.save()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	http.Redirect(w, r, "/view/"+title, http.StatusFound)
}

func postHandler(w http.ResponseWriter, r *http.Request, title string) {
	err := templates.ExecuteTemplate(w, "post", newPost)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
}

func viewHandler(w http.ResponseWriter, r *http.Request, title string) {
	p, err := loadPage(title)
	if err != nil {
		http.Redirect(w, r, "/edit/"+title, http.StatusFound)
		return
	}
	renderTemplate(w, "view", p)
}

func editHandler(w http.ResponseWriter, r *http.Request, title string) {
	p, err := loadPage(title)
	if err != nil {
		p = &Page{Title: title}
	}
	renderTemplate(w, "edit", p)
}

func makeHandler(fn func(http.ResponseWriter, *http.Request, string)) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		m := validPath.FindStringSubmatch(r.URL.Path)
		if m == nil {
			http.NotFound(w, r)
			return
		}
		fn(w, r, m[2])
	}
}

func main() {
	http.HandleFunc("/view/", makeHandler(viewHandler))
	http.HandleFunc("/edit/", makeHandler(editHandler))
	http.HandleFunc("/save/", makeHandler(saveHandler))

	log.Fatal(http.ListenAndServe(":8080", nil))
}

```

## Broad Strokes on Functionality
---------
So I want to break down this code above into some broad pieces which are common to all web applications and all web servers. Ultimately _how_ you implement these things depends on the design pattern you choose and on what language you choose, but the pieces are broadly the same.

### File System Interaction
---------

Getting data from the local environment and changing it into something you can serve is the basic job of a web server. This function's job is to get a file, and then return it in the proper Page type.
```
func loadPage(title string) (*Page, error) {
	filename := title + ".txt"
	body, err := ioutil.ReadFile(filename)
	if err != nil {
		return nil, err
	}
	return &Page{Title: title, Body: body}, nil
}
```
On the flip side, when we are handed a Page struct, we want to then convert it into a file to save. That's the purpose of this function
```
func (p *Page) save() error {
	filename := p.Title + ".txt"
	return ioutil.WriteFile(filename, p.Body, 0600)
}
```
Basic Input and Output. We use ReadFile to get new information, and we use WriteFile to write it back out.

### Handlers
---------
This is a handler function. The idea with this is that it's job is to 'handle' requests of a particular type, and do specific things with it. What kinds of things? Well here, it takes the last text in the URL and checks to see if the file system has a file with that name in it. If it doesn't, then it starts a new file of that name. If it DOES then it renders (draws/creates) that template for the user and then serves it up.
```
func viewHandler(w http.ResponseWriter, r *http.Request, title string) {
	p, err := loadPage(title)
	if err != nil {
		http.Redirect(w, r, "/edit/"+title, http.StatusFound)
		return
	}
	renderTemplate(w, "view", p)
}
```
A good next step for any advanced beginner developer is to look into different ways of writing handlers. At the bottom of this file is a list of static handlers (which is good at first for writing something quickly, but it fast becomes a poor way of doing things). See if you can find different design patterns for URL handlers and find out what others think the 'best way' is!

### Main
---------
This is the portion of our code that is run _first_, and then calls everything else:
```
func main() {
	http.HandleFunc("/view/", makeHandler(viewHandler))
	http.HandleFunc("/edit/", makeHandler(editHandler))
	http.HandleFunc("/save/", makeHandler(saveHandler))

	log.Fatal(http.ListenAndServe(":8080", nil))
}
```
You have to start thinking in this branching sort of way. Imagine what it would take to cook yourself dinner. Having a 'dinner plate' in front of you is the end, the goal. But every time you think and start expanding on steps, you're adding in functionality. "Well I should make pasta," is a good first step, so what's involved with that? Are there things about making pasta that you can apply to other parts of the meal?

The Main part of your app is run first, but it reaches out to all the other parts and uses them to drive what it does.

What I want to write about are two broad ideas, "What did I learn from this?" and "What is still unclear?"

## What did I learn?

So let's start with the idiosyncracies of Go which I have learned.

_There are three ways to define a variable_

Yup. You can use `var newVar type` anywhere, you can use `newVar := 5` if it's inside a function but NOT declared yet, and you can use `newVar = 6` if the variable has already been declared and needs to be overwritten.

_Types come after the variable they are for_

Did you see above in the definition, `var newVar type`? Where as in most C-type languages you give the type beforehand, Go has chosen to put it after. There is a link in that guide as to _why_ this was chosen, but suffice to say that is the case with Go.

_Packages require their names at the top?_

This one is still a little unclear, but I think I've understood it. All files are packages in Go, and all packages require their definition at the top of the file.

## What is still unclear?

_Pointers and Dereferencing: Why? What are their use cases?_

_Function Literals and Closures_

_Defining Routes_
