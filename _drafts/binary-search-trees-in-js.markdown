---
layout: post
title:  "Binary Search Tree in JS"
date:   2019-07-05 10:15:42 -0500
categories: datastructures
---
This is my implementation of a BST in JavaScript, done for a [Code Chef](https://www.codechef.com/submit/BSTOPS) practice quiz, using [Geeks for Geeks](https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/) as a guide.

```
process.stdin.resume();
process.stdin.setEncoding('utf8');
var readline = require('readline');
var firstLine = true;
var queryCount = 0;

class BinarySearchTree
{
    constructor()
    {
        this.root = null;
    }
    
    insert(data)
    {
        var newNode = new Node(data);
        
        if(this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
            
    }
    
    insertNode(node, newNode)
    {
        if(newNode.data < node.data) {
            if(node.left === null){
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    
    remove(data)
    {
        this.root = this.removeNode(this.root, data);
    }
    
    removeNode(node, key)
    {
        if(node === null)
        {
            return null;
        } else if(key < node.data) {
            node.left = this.removeNode(node.left,key);
            return node;
        } else if(key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if(node.left === null && node.right === null)
            {
                node = null;
                return node;
            }
            if(node.left === null) {
                node = node.right;
                return node;
            }
            if(node.right === null) {
                node = node.left;
                return node;
            }
            //Deleting node with two children, undone
            var aux = this.findMinNode(node.right);
            node.data = aux.data;
            
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }
    
    findMinNode(node)
    {
        if(node.left === null){
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }
}

class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

var bt = new BinarySearchTree();

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
    var inputs = line.split(" ");
    if(firstLine) {
        queryCount = inputs[0];
        firstLine = false;
    } else if(queryCount > 0) {
        main(inputs[0],inputs[1]);
        queryCount -= 1;
        console.log('verb:' + inputs[0] + ', noun:' + inputs[1]);
        console.log(bt);
    } else {
        process.exit()
    }
});

function main(verb,noun) {
    if(verb === 'i') {
        bt.insert(noun);
    } else if(verb === 'd') {
        bt.remove(noun);
    } else {
        return;
    }
}
```