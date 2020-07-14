export function removeAllChildrenFrom(node) {
    while (node.lastChild) {
        node.removeChild(node.lastChild);
    }
}
