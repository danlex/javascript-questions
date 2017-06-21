
"use strict";

// Implement a BST with insert and delete functions
class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    push(value, node) {
        if(node === undefined) {
           this.root = this.push(value, this.root);
           return this.root;
        }
        
        if(node === null){
            node = new Node(value);
            return node;
        } else if(value < node.value){
              if(node.left === null){
                 node.left = new Node(value);
              } else {
                 node.left = this.push(value, node.left);
              }
         } else {
             if(node.right === null){
                node.right = new Node(value);
             }
             else{
                node.right = this.push(value, node.right);
             }
         }
         return node;
    }
    
   remove(value, node) {
      if(node === undefined) {
          this.root = this.remove(value, this.root);
          return this.root;
      }
      if(node.value === value) {
        if(node.left !== null && node.right !== null) {
            node.value = this.getMinValue(node.right);
            node.right = this.remove(node.value, node.right);
        } else if(node.left === null && node.right === null) {
            if(node === this.root) {
                this.root = null;
                return this.root;
            }
            node = null;
        } else if(node.right === null) {
            node = node.left;
        } else if(node.left === null) {
            node = node.right;
        }
      }
      else if(node.value < value){
        if (node.right !== null) {
            node.right = this.remove(value, node.right);
        }
      } else {
        node.left = this.remove(value, node.left);
      }
      return node;
  }
    
  getMinValue(node) {
      if(node === undefined) {
          node = this.root;
      }
      if(node.left === null) {
          return node.value;
      }
      return this.getMinValue(node.left);
  }
}

let bst = new BinarySearchTree();
bst.push(1);
bst.push(3);
bst.push(2);
console.log(bst);
bst.remove(3);
console.log(bst);