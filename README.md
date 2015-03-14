## medium-style-confirm

### Demo @ [bitwiser.in](http://bitwiser.in/medium-style-confirm/)

### Usage
* `mscConfirm(title, okCallback)` :
```js
mscConfirm("Delete?",function(){
    alert("Post deleted");
});
```

* `mscConfirm(title, subheading, okCallback)` :
```js
mscConfirm("Delete", "Are you sure you want to delete this post?", function(){
    alert("Post deleted");
});
```

* `mscConfirm(title, subheading, okCallback, cancelCallback)` :
```js
mscConfirm("Delete", "Are you sure you want to delete this post?", function(){
  alert("Post deleted");
},
function() {
  alert('Cancelled');
});
```

### Installation
* Install via bower `bower install medium-style-confirm`.