function HtmlElement(){
    this.click = function(){
        console.log('clicked')
    }
}


HtmlElement.prototype.focus = function(){
    console.log('focused')
}

function HtmlSelectElement(...items){
    this.items = items;

    this.addItem = function(item){
        items.push(item);
    }

    this.removeItem = function(){
        items.pop();
    }
}

HtmlSelectElement.prototype = new HtmlElement;
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const hse = new HtmlSelectElement(2, 4, 7);
console.log(hse);
console.log(hse.click());
console.log(hse.focus());