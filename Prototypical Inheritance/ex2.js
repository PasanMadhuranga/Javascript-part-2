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

    this.render = function(){
        return `<select>\n${this.items.map(item => `\t<option>${item}</option>`).join('\n')}\n</select>`;
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const hse = new HtmlSelectElement(2, 4, 7);
console.log(hse);
console.log(hse.click());
console.log(hse.focus());
console.log(hse.render());

function HtmlImageElement(src){
    this.src = src;
    this.render = function(){
        return `<img src="${this.src}"/>`
    }
}

HtmlImageElement.prototype = new HtmlImageElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;

const hie = new HtmlImageElement('http://');
console.log(hie);

const elements = [
    new HtmlSelectElement(1, 2, 3),
    new HtmlImageElement('http://12345.com')
];

for(let element of elements){
    console.log(element.render());
}