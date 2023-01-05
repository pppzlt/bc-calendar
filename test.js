class SomeClass {

    constructor() {
        this.name = 'Something Good';
    }

    register() {
        const that = this;
        window.addEventListener('keydown', (e) => { that.someMethod(e); });
    }

    someMethod(e) {
        console.log(this.name);
        switch (e.keyCode) {
            case 5:
                // some code here…
                break;
            case 6:
                // some code here…
                break;
        }
    }

}

const myObject = new SomeClass();
myObject.register();
