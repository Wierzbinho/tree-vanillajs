const treeNodes = [
  { id: 1 },
  { id: 2, parent: 1 },
  { id: 3, parent: 2 },
  { id: 4, parent: 3 },
  { id: 5, parent: 3 },
  { id: 6, parent: 3 },
  { id: 7, parent: 6 },
  { id: 8, parent: 6 },
  { id: 9, parent: 6 },
  { id: 10, parent: 2 },
  { id: 11, parent: 10 },
  { id: 12, parent: 10 },
  { id: 13, parent: 12 },
  { id: 14, parent: 12 },
];


const buildHierarchyTree = (treeNodes) => {
  let hierarchyTree;

  treeNodes.forEach(treeNode => {
    treeNode.checked = false;
    
    if (!treeNode.parent) {
      hierarchyTree = treeNode;
      return;
    }

    const parent = treeNodes.find(({id}) => id === treeNode.parent);
    if (!parent.children) {
      parent.children = []
    }

    if (!treeNode.children) {
      treeNode.children = [];
    }
    
    parent.children.push(treeNode);
  })

  return hierarchyTree;
}

const drawTree = (hierarchyTreeNode, parent) => {
  const domTreeNode = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.id = hierarchyTreeNode.id;
  checkbox.addEventListener("click", (evt) => {
    toggleSelection(evt.target);
  });
  domTreeNode.appendChild(checkbox);
  domTreeNode.appendChild(document.createTextNode(hierarchyTreeNode.id));
  parent.appendChild(domTreeNode);

  if (hierarchyTreeNode.children.length) {
    domTreeNode.className = 'tree__branch tree__branch--collapsed';
    domTreeNode.addEventListener("click", (evt) => {
      evt.stopPropagation();
      if (!evt.target.children.length) {
        return;
      }

      evt.target.classList.toggle('tree__branch--expanded');
      evt.target.classList.toggle('tree__branch--collapsed');

      const ul = evt.target.children[1];
      if (!ul) {
        return;
      }

      ul.classList.toggle('collapsed');
      ul.classList.toggle('expanded');
    })
    const nestedTree = document.createElement('ul');
    nestedTree.className = 'tree collapsed';
    domTreeNode.appendChild(nestedTree);
    
    for (const childNode of hierarchyTreeNode.children) {
      drawTree(childNode, nestedTree);
    }
  } else {
    domTreeNode.className = 'tree__leaf'
  }
}

const toggleSelection = (checkbox) => {
  const node = treeNodes.find(({id}) => id == checkbox.id);
  node.checked = checkbox.checked;
  
  toggleChildSelection(node, checkbox.checked);
  toggleParentSelection(node, checkbox.checked);
}

const toggleChildSelection = (node, checked) => {
  node.children.forEach(childNode => {
    childNode.checked = checked;
    const checkbox = document.getElementById(childNode.id);
    checkbox.checked = checked;
    
    toggleChildSelection(childNode, checked);
  })
}

const toggleParentSelection = (node, checked) => {
  const parent = treeNodes.find(({id}) => id == node.parent);

  if(!parent) {
    return;
  }

  if(checked && parent.children.some(child => !child.checked)) {
    return;
  }

  parent.checked = checked;
  const checkbox = document.getElementById(parent.id);
  checkbox.checked = checked;

  toggleParentSelection(parent, checked);
}

const hierarchyTree = buildHierarchyTree(treeNodes);

const tree = document.getElementsByClassName('tree')[0];

drawTree(hierarchyTree, tree);
