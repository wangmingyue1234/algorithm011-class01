var preorder = function(root) {
    let result = [], current = root;
    while(current){
        result.push(current.val);
        let temp = current.children;
        if(!temp.length) return result;
        current = current.children.shift();
        let next = current;
        while (next.children.length) {
            next = next.children[next.children.length - 1];
        }
        next.children = temp;
    }
    return result;
}

