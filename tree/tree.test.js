const binaryTree = require('./tree.js');

let appleTree = new binaryTree();

appleTree.add(100);
appleTree.add(50);
appleTree.add(200);
appleTree.add(25);
appleTree.add(75);
appleTree.add(60);
appleTree.add(90);
appleTree.add(150);
appleTree.add(300);
appleTree.add(342);

describe('the binary tree', () => {
  it('should test the add method of tree', () => {
    expect(appleTree).toEqual({
      height: 3,
      root: {
        depth: 0,
        leftChild: {
          depth: 1,
          leftChild: { depth: 2, leftChild: null, rightChild: null, value: 25 },
          rightChild: {
            depth: 2,
            leftChild: {
              depth: 3,
              leftChild: null,
              rightChild: null,
              value: 60
            },
            rightChild: {
              depth: 3,
              leftChild: null,
              rightChild: null,
              value: 90
            },
            value: 75
          },
          value: 50
        },
        rightChild: {
          depth: 1,
          leftChild: {
            depth: 2,
            leftChild: null,
            rightChild: null,
            value: 150
          },
          rightChild: {
            depth: 2,
            leftChild: null,
            rightChild: {
              depth: 3,
              leftChild: null,
              rightChild: null,
              value: 342
            },
            value: 300
          },
          value: 200
        },
        value: 100
      }
    });

    expect(typeof appleTree.add).toEqual('function');
    expect(typeof appleTree.root).toEqual('object');
  });

  it('should test the search method of tree', () => {
    expect(typeof appleTree.search).toEqual('function');
    expect(appleTree.search(15)).toEqual('does not exist');
    expect(appleTree.search(75)).toEqual({
      depth: 2,
      leftChild: { depth: 3, leftChild: null, rightChild: null, value: 60 },
      rightChild: { depth: 3, leftChild: null, rightChild: null, value: 90 },
      value: 75
    });
  });

  it('should test the preorder method of tree', () => {
    expect(typeof appleTree.preorder).toEqual('function');
    expect(typeof appleTree.preorder()).toEqual('object');
    expect(appleTree.preorder()).toEqual([
      100,
      50,
      25,
      75,
      60,
      90,
      200,
      150,
      300,
      342
    ]);
  });

  it('should test the inorder method of tree', () => {
    expect(typeof appleTree.inorder).toEqual('function');
    expect(typeof appleTree.inorder()).toEqual('object');
    expect(appleTree.inorder()).toEqual([
      25,
      50,
      60,
      75,
      90,
      100,
      150,
      200,
      300,
      342
    ]);
  });

  it('should test the preorder method of tree', () => {
    expect(typeof appleTree.preorder).toEqual('function');
    expect(typeof appleTree.preorder()).toEqual('object');
    expect(appleTree.preorder()).toEqual([
      100,
      50,
      25,
      75,
      60,
      90,
      200,
      150,
      300,
      342
    ]);
  });

  it('should test the postorder method of tree', () => {
    expect(typeof appleTree.postorder).toEqual('function');
    expect(typeof appleTree.postorder()).toEqual('object');
    expect(appleTree.postorder()).toEqual([
      25,
      60,
      90,
      75,
      50,
      150,
      342,
      300,
      200,
      100
    ]);
  });
});
