const _stackArr = new WeakMap();

 class Stack {
    constructor() {
        _stackArr.set(this, [])
    }

    get count() {
        return _stackArr.get(this).length;
    }

    push(value){
        _stackArr.get(this).push(value);
    }

    pop(){
        if (_stackArr.get(this).length === 0) throw new Error('Stack is Empty');
        return _stackArr.get(this).pop();
    }

    peek(){
        if (_stackArr.get(this).length === 0) throw new Error('Stack is Empty')
        const stackArr = _stackArr.get(this)
        return stackArr[stackArr.length - 1]
    }
}

const stack = new Stack();
console.log(stack);
console.log(stack.count);
stack.push('car');
stack.push('bus');
stack.push('van');
console.log(stack.count);
console.log(stack.pop());
console.log(stack.count);
console.log(stack.peek());
console.log(stack.count);
stack.pop();
stack.pop();
stack.peek();

