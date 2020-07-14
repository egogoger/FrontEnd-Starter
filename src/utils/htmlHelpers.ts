export function removeAllChildrenFrom(node: Element): void {
    while (node.lastChild) {
        node.removeChild(node.lastChild);
    }
}
