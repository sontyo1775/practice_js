export class Action {
    taskButtonAction() {
        console.log('ボタン押した');
    }
    taskInputAction(text){
        console.log(text);
        if(text < 10){
            return console.error('err 10 text');
        }
    }
}