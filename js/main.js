


var app = new Vue({
    el: '#app',
    data: {
      newtodo:"",  
      todos: [],
      visibility: "all",
    },
    methods: {
         addtodo(){
             let newtodo = this.newtodo;
             var timestamp = Math.floor(Date.now());
             this.todos.push({
                 id: timestamp ,
                 title: newtodo,
                 completed: false
             })
             this.newtodo = "";
         },
         removetodo(todo){
            let newIndex = "";
            let vm = this;
            vm.todos.forEach( (item,key) => {
                 if(item.id == item.id){
                    newIndex = key;
                 }
                 vm.todos.splice(newIndex,1);
            });
         }
    },
    computed: {
         filtertodo(){
             if(this.visibility  == "all"){
                return this.todos;
             }
             else if(this.visibility === "ing"){
                  alert('有');
                let newtodo = [];
                  this.todos.forEach( (item) => {
                      if(!item.completed){
                        newtodo.push(item);
                      }
                  })
                  return newtodo
             }
         }
    },
  })