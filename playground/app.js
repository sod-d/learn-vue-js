

    // 실습 #1 - 'todo-footer' 컴포넌트 전역 등록
    //<p> This is another global children component</p>를 template으로 갖는 컴포넌트를 등록 해보세요.

    //전역 컴포넌트
    Vue.component('todo-footer',{
        template : '<p> This is another global children component</p>'
    });

    //실습 #2 - 'todo-list' 컴포넌트 지역 등록
    //<p>This is another local child component</p>를 template으로 갖는 컴포넌트를 등록해 보세요. 

    var app = new Vue({
        el : '#app',
        data : {
            message : 'This is a parent component'
        },
        components : { //지역 컴포넌트 등록 방식
            // '컴포넌트 이름' : 컴포넌트 내용
            'todo-list' : {
                template : '<p>This is another local child component</p>'
            }
        }
    });