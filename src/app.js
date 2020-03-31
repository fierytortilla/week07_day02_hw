import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    //app here matches the app in the html on line 13
    el: "#app",
    data: { 
      chores: [
        {name: "Do laundry", isDone: false, priority: "high"},
        {name: "Wash dishes", isDone:true, priority: "low"},
        {name: "Reorganize action figures", isDone:false, priority: "high"}   
      ],
      newChore: {
        name:"",
        isDone: false,
        priority: null
      }
    },
    methods: {
      addNewChore: function(){
        this.chores.push(this.newChore)
        this.newChore={
          name: "",
          isDone: false,
          priority: null
        };
      },
      getChoreDone : function(index){
        this.chores[index].isDone=true;
        this.chores[index].priority= "low";
      }
      //changePriorty

    }
  });
});
