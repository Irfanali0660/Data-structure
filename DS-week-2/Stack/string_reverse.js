class stackstring{
    constructor(){
        this.stack=[]
    }
    push(str){
        for (let i = 0; i < str.length; i++) {
            this.stack.push(str[i])
        }

    }

    reverse(){
        let reverse=''
        for (let i = this.stack.length-1; i >=0 ; i--) {
            reverse+=this.stack[i]
        }

        return reverse
    }
}

const stack=new stackstring()

stack.push('name')
console.log(stack.reverse());