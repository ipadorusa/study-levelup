const log = console.log;
class tableSize {
    constructor(el, elSel, sizeArry) {
        this.el = document.querySelectorAll(el);
        this.elSel = document.querySelectorAll('table thead tr th.sticky');
        this.length = this.elSel.length;
        this.sizeArry = sizeArry;
        this.theadArry = [];
        this.keys = [];
    }
    
    init() {
        this.setArry();
        this.getMath();
    }
    setArry() {
        this.keys = Object.keys(this.sizeArry);
        this.elSel.forEach(item => {
            this.theadArry.push(item.classList.value)
        });
    }
    getMath() {
        //log(this.theadArry, this.keys)
        /* for(let i=0,max=this.length;i<max;i++) {
            for(let j=0,max=this.length;j<max;j++) {
                log('a',this.theadArry[j] === this.keys)
            }
        } */
        let tempArry = this.keys.slice();
        let chArry = [];
        for(let i=0,max=this.length;i<max;i++) {
            if(tempArry.indexOf(this.theadArry[i]) !== -1) {
                chArry.push(this.theadArry[i])
            }
        }
        log(this.sizeArry['col_st1 sticky'])
    }

}