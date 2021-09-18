import {Component} from '../core/component'

export class HeaderComponent extends Component {
    constructor(id) {
        super(id)
    }
    init() {
        console.log(this.$el.querySelector('.js-header-start'))
        this.$el.querySelector('.js-header-start').addEventListener('click', buttonHandler.bind(this))
    }
}

function buttonHandler() {
    this.hide()
}