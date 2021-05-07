## Steps to run:
- I create this project with create-react-app 
- yarn && yarn start;

## Problem 1: file: (commons/bTreeUtils.ts function: createBTree)

- I created the interface (Interface/Input.ts) to make sure that the input will be valid.
- Created the interface (Interfaces/BTree.ts) to validate the output
- Inside the function parse the input to a binary tree using recursiviness

## Problem 2:

- Added input type=file to read from local the file
- I modified the styles of label to show in a proper way.
- I Added validation to makesure that the input fit with the interface Input (if the content is OK show a check icon if not show a red cross icon)
- If it is valid parse the string into a json a put in the editor.
- Added an external editor library to have highligth syntax (https://github.com/securingsincity/react-ace)

- I think that is most clear if I use a tree graph instead of squares, so I created a component call BTreeGraph, with SVG and circles, text and lines.
- In BTreeNode I called the component recursively to render the left and right nodes.

- When the value of editor changes, validate again
- If is a valid json and match with node interface, render again the tree if not hides the tree and show a message.

## Problem 3.

- I create a separate function to retrieve the smallest subtree in file (commons/bTreeUtils.ts function: smallestSubTree )
- After that create a hashing function that assings to every node a unique hash.
- In the BTreeGraph and BTreeNode I pass this subtree and compare the hash change the styles if it is the smallest subtree

## Screenshots:
![image](https://user-images.githubusercontent.com/61020673/117514429-6c5e4680-af59-11eb-9163-9235571d2118.png)
![image](https://user-images.githubusercontent.com/61020673/117514507-a3345c80-af59-11eb-8d41-f2344fbe0623.png)
![image](https://user-images.githubusercontent.com/61020673/117514387-505aa500-af59-11eb-8c7f-a520f4b1921f.png)
![image](https://user-images.githubusercontent.com/61020673/117514549-bc3d0d80-af59-11eb-8f12-570d39c575f4.png)

