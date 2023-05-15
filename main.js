class Listests {
    constructor() {
        // yeni metn imputu yaradiriq
        window.addEventListener("load", this.newEl);
        document.querySelector(".clicked").addEventListener("click", this.newEl);
        // enter duymesi ile kecidi heyata keciririk
        document.querySelector(".task").addEventListener("keyup", (event) => {
            if (event.key === "Enter") this.newEl();
        });
  
        this.listingTasks = document.querySelector(".enterlist");
        this.listOf = this.listingTasks.children;
        this.elSort = document.querySelector(".sort");
        this.elSort.addEventListener("click", this.sortList);
    }
  
    //taska aid olan melumatlari siyahiya daxil edirik
    newEl = () => {
         //yeni obyekt sayesinde melumat bazasi elde edirik 
        const mainTask = new newClassOfTask(this.listingTasks);
        this.value = mainTask.value;
        // melumatlari daxil edirik
        this.listingTasks.append(this.createNewTaskList(this.value));
        this.listingTasks.lastElementChild.querySelector(".task").focus();
    };
  
    createNewTaskList(value) {
        const pointOfAssignment = document.createElement("div");
        const mouseHand = document.createElement("div");
        const areaOfInput = document.createElement("input");
        const exitOfTask = document.createElement("div");
        pointOfAssignment.classList.add("input");
        mouseHand.classList.add("form");
        areaOfInput.classList.add("task");
        areaOfInput.name = "task";
        areaOfInput.value = value;
        exitOfTask.classList.add("exit");
        exitOfTask.addEventListener("click", (event) => this.removeTask(event));
        pointOfAssignment.append(mouseHand);
        pointOfAssignment.append(areaOfInput);
        pointOfAssignment.append(exitOfTask);
  
        return pointOfAssignment;
    }
  
    sortList = () => {
        // elimizde olan siyahini cesidleyirik...!
        this.elSort.classList.toggle("listSort");
        //sıralanmış siyahı
        let sortigFunc = [...this.listOf].sort(newSortFunc); 
        function newSortFunc(a, b) {
            a = a.children[1].value;
            b = b.children[1].value;
            if (!isNaN(a) && !isNaN(b)) {
                return a - b;   
            }else {
                return a.localeCompare(b);}
        }
  
        if (this.listSort === true) {
            sortigFunc = sortigFunc.reverse();
        }
        const sortedList = document.createElement("div");
        sortedList.classList.add("list");
        //funksya vasitesiyle siyahıni  sona daxil edirik.
        sortigFunc.forEach((element) => sortedList.append(element)); 
        this.listingTasks.replaceWith(sortedList);
        this.listingTasks = sortedList;
        this.listOf = this.listingTasks.children;
        this.listSort = !this.listSort;
    };
  
    // silmek ucun.
    removeTask = (event) => {
        const anyEl = e.target.parentNode;
        if (anyEl.parentNode.children.length > 1) anyEl.remove();
    };
  }
  class newClassOfTask {
    constructor(taskInform) {
        this.value = "";
        if (taskInform.children.length > 0) {
            this.value = taskInform.lastElementChild.value || "    ";
        }
    }
  }
  
  new Listests();