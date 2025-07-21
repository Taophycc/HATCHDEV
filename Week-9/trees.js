"use strict";
class BSTNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
class BST {
    constructor(root = null) {
        this.root = root;
    }
    addNode(val) {
        let head = this.root;
        const node = new BSTNode(val);
        if (head == null) {
            this.root = node;
            return;
        }
        while (head) {
            if (val < head.val) {
                if (head.left == null) {
                    head.left = node;
                    return;
                }
                else {
                    head = head.left;
                    continue;
                }
            }
            else if (val > head.val) {
                if (head.right == null) {
                    head.right = node;
                    return;
                }
                else {
                    head = head.right;
                    continue;
                }
            }
            else
                return;
        }
    }
    deleteNode(root, val) {
        if (root == null)
            return null;
        if (root.val == val) {
            if (root.left == null && root.right == null) {
                return null;
            }
            if (root.left == null) {
                return root.right;
            }
            if (root.right == null) {
                return root.left;
            }
            // Get inorder predecessor
            let pred = root.left;
            while (pred.right != null) {
                pred = pred.right;
            }
            root.val = pred.val;
            root.left = this.deleteNode(root.left, pred.val);
            return root;
        }
        root.left = this.deleteNode(root.left, val);
        root.right = this.deleteNode(root.right, val);
        return root;
    }
    search(val) {
        let head = this.root;
        if (head == null)
            return null;
        while (head) {
            if (val > head.val) {
                head = head.right;
            }
            else if (val < head.val) {
                head = head.left;
            }
            else {
                return head;
            }
        }
        return null;
    }
    inorderTraversal(root) {
        if (root == null)
            return [];
        return [
            ...this.inorderTraversal(root.left),
            root.val,
            ...this.inorderTraversal(root.right),
        ];
    }
}
function main() {
    const tree = new BST();
    tree.addNode(15);
    tree.addNode(12);
    tree.addNode(120);
    tree.addNode(23);
    tree.addNode(30);
    tree.deleteNode(tree.root, 15);
    console.log(tree.inorderTraversal(tree.root));
    console.log(tree);
}
main();
