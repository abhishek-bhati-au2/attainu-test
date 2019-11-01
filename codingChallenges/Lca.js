function lowestCommonAncestor(root, p, q){
    var lca = function(n){
        if(!n || n.val==p.val || n.val==q.val){
            return n;
        }
        var left = lca(n.left);
        var right = lca(n.right);
        //covers cases when both are null
        if(!left){
            return right;
        }
        if(!right){
            return left;
        }
        //left is q or p , right is q or p, return current node
        return n;
    };
     return lca(root);
 };
 console.log(lowestCommonAncestor(3,5,1,6,2,0,8,null,null,7,4,5,1) )
     