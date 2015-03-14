(function(){
    function ce(tag, clas, txt) {
        var ele = document.createElement(tag);
        ele.setAttribute('class', clas);
        if(typeof txt === 'undefined' || txt === null){
            return ele;
        }
        var tn = document.createTextNode(txt);
        ele.appendChild(tn);
        return ele;
    }

    var MscConfirm = function(title, sub, okFunction, cancelFunction) {
        var prev = document.querySelector('.msc-confirm');
        if(prev !== null){
            document.body.removeChild(prev);
        }

        var defaults = {
            title: 'Confirm',
            subtitle: '',
            okFunction: null,
            cancelFunction: null
        };

        defaults.title = (typeof title === 'string') ? title : defaults.title;
        defaults.subtitle = (typeof sub === 'string') ? sub : defaults.subtitle;
        defaults.okFunction = (typeof okFunction === 'function') ? okFunction : defaults.okFunction;
        defaults.cancelFunction = (typeof cancelFunction === 'function') ? cancelFunction : defaults.cancelFunction;

        if(typeof sub === 'function'){
            defaults.okFunction = sub;
        }

        var dialog = ce('div', 'msc-confirm'),
            overlay = ce('div', 'msc-overlay'),
            closeBtn = ce('button', 'msc-close');
        closeBtn.innerHTML = '&times;';
        overlay.appendChild(closeBtn);

        closeBtn.addEventListener('click', destroy);

        var content = ce('div', 'msc-content'),
            cTitle = ce('h3', 'msc-title', defaults.title),
            body = ce('div', 'msc-body', defaults.subtitle),
            action = ce('div', 'msc-action'),
            okBtn = ce('button', 'msc-ok', 'OK'),
            cancelbtn = ce('button', 'msc-cancel', 'Cancel');

        action.appendChild(okBtn);
        action.appendChild(cancelbtn);

        okBtn.addEventListener('click', ok);

        content.appendChild(cTitle);
        content.appendChild(body);
        content.appendChild(action);

        dialog.appendChild(overlay);
        dialog.appendChild(content);
        document.body.appendChild(dialog);
        dialog.style.display = 'block';
        dialog.classList.add('msc-confirm--animate');

        function destroy() {
            closeBtn.removeEventListener('click', destroy);
            okBtn.removeEventListener('click', ok);
            cancelbtn.removeEventListener('click', cancel);
            document.body.removeChild(dialog);
        }

        function ok() {
            defaults.okFunction.call(undefined, null);
            destroy();
        }

        function cancel() {
            defaults.cancelFunction.call(undefined, null);
            destroy();
        }
    };

    window.msc = MscConfirm;
    window.mscConfirm = MscConfirm;
})();