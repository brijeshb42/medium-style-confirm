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
* Install via bower `bower install medium-style-confirm` or download [msc-style.css](http://bitwiser.in/medium-style-confirm/css/msc-style.css) and [msc-script.js](http://bitwiser.in/medium-style-confirm/js/msc-script.js).
* Include `msc-style.css` in html as `<link rel="stylesheet" href="msc-style.css">` just before ending `head` tag.
* Include `msc-script.js` in html as `<script src="msc-script.js">` just before ending `body` tag.
* Call the `mscConfirm()` function as shown above.

### LICENSE
#### MIT