(function() {
	let template = document.createElement("template");//SRC IS REMOVED FROM SCRIPT TAG <script src="https://kit.fontawesome.com/931b129623.js" crossorigin="anonymous"></script>
	template.innerHTML = `
<head>
<script>

</script>

<style>
body {
    margin: 0;
  }
  .iconPad{
    padding-left: .2rem;
  }
  .hoverItems{
    display: inline;
  }
  .p-inline{
    display: inline;
    z-index: 0;
  }
  .sidebarItem{
    opacity: 99%;
    display: inline
  }
  .pencilButton{
    opacity: 99%;
    padding: 1rem;
    background-color: #20243c;
    border: 1px solid black;
    cursor: move;
    cursor: pointer;
    color: white;
    font-family: Calibri;
    font-size: 10.5pt;
    font-weight: bold;
    text-decoration: none;
    padding: 10pt 14pt;
    display: block;
    height: 100%;
    width: 80%;
  }
  
  .hierDiv{
    opacity: 99%;
    background-color: #008CBA;
  }
  .disappearing{
    float:left
  }
  .constant{
    float:right
  }
  .topBar{
    height: 42px;
    padding: 1rem;
    background-color: #3a426f;
    border: 1px solid black;
  }
  .fancyText{
    height: 30px;
    border: 1px solid black;
    color: black;
    font-family: Calibri;
    font-size: 8pt;
    font-weight: bold;
    text-decoration: none;
  }
  
  .fancyTextLabel{
    height: 100px;
    color: white;
    font-family: Calibri;
    font-size: 8pt;
    font-weight: bold;
    text-decoration: none;
  }
  .section{
    color: white;
    font-family: Calibri;
    font-size: 10.5pt;
    font-weight: bold;
    text-decoration: none;
    cursor: move;
    cursor: pointer;
    padding: .5rem;
    
    height:70%;
    width: 85%;
    display: inline-block;
  }
   .draggable {
    padding: .5rem;
    background-color: #20243c;
    border: 1px solid black;
    cursor: move;
    cursor: pointer;
    color: white;
    font-family: Calibri;
    font-size: 10.5pt;
    font-weight: bold;
    text-decoration: none;
  
    display: inline-block;
    height:70%;
    width: 85%;
    transition-duration: 0.4s;
  }
  
  
  .draggable:hover {
    background-color: #008CBA;
    color: white;
  }
  .buttonChild {
    border: 1px solid black;
    height: 30px;
    width: 100px;
    color: white;
    background-color: #3a426f;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-family: Calibri;
    font-size: 8pt;
    font-weight: bold;
  
    transition-duration: 0.4s;
    cursor: pointer;
  }
  
  .buttonChild:hover {
    background-color: #008CBA;
    color: white;
  }
  .buttonHier {
    border: 1px solid black;
    color: white;
    height: 30px;
    width: 100px;
    background-color: #3a426f;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-family: Calibri;
    font-size: 8pt;
    font-weight: bold;
    transition-duration: 0.4s;
    cursor: pointer;
  }
  
  .buttonHier:hover {
    background-color: #008CBA;
    color: white;
  }
  
  .draggable.dragging {
    opacity: .8;
  }
  
  .hierFather {
    padding: 1rem;
    background-color: #20243c;
    border: 1px solid black;
    cursor: move;
    cursor: pointer;
    color: white;
    font-family: Calibri;
    font-size: 10.5pt;
    font-weight: bold;
    text-decoration: none;
    padding: 10pt 14pt;
    display: block;
    height: 100%;
    width: 80%;
  }
  .hierFather.dragging {
    opacity: .8;
  }
  
  .switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  }
  
  .switch input {
  opacity: 0;
  width: 0;
  height: 0;
  }
  
  .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  }
  
  .slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  }
  
  input:checked + .slider {
  background-color: #2196F3;
  }
  
  input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
  }
  .container {
    background-color: #20243c;
    padding: 1rem;
    width: 15%;
    height: 100%;
  }
  /* Rounded sliders */
  .slider.round {
  border-radius: 34px;
  }
  
  .slider.round:before {
  border-radius: 50%;
  }
  
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  input:checked + .slider {
    background-color: #2196F3;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
   /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  .slider.round:before {
    border-radius: 50%;
  }
  

</style>
</head>
<body>
<div class="topBar">
          <div class="disappearing">
              <button class="buttonChild" id="childButton">Add a Child Item</button>
              <button class="buttonHier" id="hierButton">Add a Hier Item</button>
              <button class="buttonHier" id="sectionButton">Add a Section</button>
              <label class="fancyTextLabel" id="addedTextLabel" for="addedText">Label:</label>
              <input class="fancyText" type= "text" id="addedText" name="addedText" placeholder="Add Your Text">
          </div>
          
          <div class="constant">
              <label class="fancyTextLabel" for="editSwitch">Edit:</label>
              <label class="switch">
                  <input type="checkbox" id="editSwitch" checked>
                  <span class="slider round"></span>
              </label>
          </div>
     
       </div>
      <div class="container" id="mainSideBar">
          <div class="section sidebarItem p-inline"  draggable = "true">Section 1</div>
          <div class="draggable sidebarItem p-inline"  draggable="true">Nick App</div>

        
        
          <!--<button class = "p-inline">X</button> -->
          <div class="draggable sidebarItem p-inline" draggable="true">Diego App</div>

          <div class="draggable sidebarItem p-inline"  draggable="true">Frank App</div>
        
        <div class="draggable sidebarItem" draggable="true">Greg App </div> 
        <div class="draggable sidebarItem p-inline " draggable="true">hover on me</div>
          
          <br>
      </div>
      <br>
</body>
 `;


	class Box extends HTMLElement {
		othersPrep(){
            childButton.addEventListener("click", addNewChild)
            sectionButton.addEventListener("click", addNewSection)
            hierButton.addEventListener("click", addNewHier)
    
            document.querySelectorAll('.draggable').forEach(item =>{
                hoverButtonAdd(item)
            })
            document.querySelectorAll('.section').forEach(item =>{
                hoverButtonAdd(item)
            })
            
            
            document.querySelectorAll('.xButton').forEach(item => {
                item.addEventListener("click", ()=>{
                    console.log("XXXXXXXXXX")
                })
            })
            
            document.querySelectorAll('.editButton').forEach(item => {
                item.addEventListener("click", ()=>{
                    console.log("EDITTTTT")
                })
            })
            
            editSlider.addEventListener("change", () =>{
                if(editSlider.checked){  //turn on edit
                    editActivate()
                }
                else{
                    editDeactivate() //turn off edit
                }
            })

            draggables.forEach(draggable => {//draggables will be added to dragging class when dragged
                draggable.addEventListener('dragstart', () => {
                    draggable.classList.add('dragging')
                    preciseItem=draggable
                })
                draggable.addEventListener('dragend', () => {//and removed when not being dragged
                    draggable.classList.remove('dragging')
                })
            })
    
            sections.forEach(section => {//same as for sections
                section.addEventListener('dragstart', () => {
                section.classList.add('dragging')
                    preciseItem = section
                })
                section.addEventListener('dragend', () => {
                    section.classList.remove('dragging')
                })
            })
        }
        containerPrep(){
            containers.forEach(container => {//containers are MARKED
                container.addEventListener('dragover', e => { //when an item is dragged over it
                    e.preventDefault()//makes icon not freak out
                    const afterElement = getDragAfterElement(container, e.clientY)//e.clientY finds height of mouse
                    const draggable = document.querySelector('.dragging') //grabs the object actually being dragged
                    if (afterElement == null) {//if mouse+draggable is below lowest item
                        container.appendChild(preciseItem)
                    } else {//otherwise put it above the closest item
                        container.insertBefore(preciseItem, afterElement)
                    }
                })
            })
        }
        

        constructor() {
			super();
			let shadowRoot = this.attachShadow({
				mode: "open"
			});
			shadowRoot.appendChild(template.content.cloneNode(true));
			this.addEventListener("click", event => {
				var event = new Event("onClick");
				this.dispatchEvent(event);
			});
			this._props = {};
			var _selectedItem;
			var _oldSelectedItem = "";

            const draggables = document.querySelectorAll('.draggable')
            const containers = document.querySelectorAll('.container')
            const sections = document.querySelectorAll('.section')
            const label = document.querySelector(".fancyText")
            const editSlider = document.getElementById("editSwitch")
            const addedTextField = document.getElementById("addedText")
            const addedTextLabel = document.getElementById("addedTextLabel")
            const sectionButton = document.getElementById("sectionButton")
            const childButton = document.getElementById("childButton")
            const hierButton = document.getElementById("hierButton")
            var sidebarItems = null;
            var editBool = true; //edit status
            var preciseItem = null //LOOK AT ME

            containerPrep()
            othersPrep()

		}


       
        

        editActivate(){ //turn on edit
            editBool = true
            sectionButton.style.display=""; //shows all edit fields in topBar
            childButton.style.display="";
            hierButton.style.display="";
            addedTextField.style.display="";
            addedTextLabel.style.display="";
            document.querySelectorAll(".sidebarItem").forEach(item => { //turns off dragging on sidebarItem, should add cursor support?
                item.draggable=true;
            })
        }
        editDeactivate(){ //turn off edit
            editBool = false;
            sectionButton.style.display="none"; //this hides an item
            childButton.style.display="none";
            hierButton.style.display="none";
            addedTextField.style.display="none";
            addedTextLabel.style.display="none";
            document.querySelectorAll(".sidebarItem").forEach(item => { //turns on dragging for sidebarItem, should add cursor support?
                item.draggable=false;
            })
        }

        addNewSection(){//Ideally trying to add a section
            var mainSideBar = document.getElementById("mainSideBar")
            const newSection = document.createElement("div") //create a p element
            newSection.classList.add("section") //section class added for format
            newSection.innerText = document.getElementById("addedText").value //get the correct text on
            newSection.draggable = true //can be dragged :)
            newSection.classList.add("sidebarItem") //sidebarItem class added for future usage

            newSection.addEventListener('dragstart', () => {//dragging functionality
            newSection.classList.add('dragging')
                preciseItem = newSection
            })
            newSection.addEventListener('dragend', () => {//has now been added
                newSection.classList.remove('dragging')
            })
            hoverButtonAdd(newSection)
            mainSideBar.appendChild(newSection) //add to our main container the new section
        }


        addNewChild(){
            var mainSideBar = document.getElementById("mainSideBar")
            const newChild = document.createElement("div")
            newChild.classList.add('draggable')//draggable CLASS for the correct format
            //newChild.classList.add('hoverer')
            newChild.innerText = document.getElementById("addedText").value//text, lets move the reference of this to the method call?
            newChild.draggable = true //can drag
            newChild.classList.add("sidebarItem") //sidebar usage pls

            newChild.addEventListener('dragstart', () => {//oooo we know this
            newChild.classList.add('dragging')
                preciseItem = newChild
            })
            newChild.addEventListener('dragend', () => {
                newChild.classList.remove('dragging')
            })
            
            hoverButtonAdd(newChild)

            mainSideBar.appendChild(newChild)//add it
        }



        addNewHier(){//add a new hierarchy object
            var mainSideBar = document.getElementById("mainSideBar")
            const newHier = document.createElement("div")//div element, will be the main object
            newHier.classList.add('draggable')//draggable format, CHANGE SOON
            newHier.classList.add("sidebarItem") //add class for usage
            newHier.innerText = "> "+document.getElementById("addedText").value//added the carat for distinguishability, move reference
            newHier.draggable = true //can be dragged
            newHier.style.width = "80%"

            hoverButtonAdd(newHier)

            var upperDropBounds = document.createElement("p")
            var dummy2 = document.createElement("p")
            var lowerDropBounds = document.createElement("p")
            
            upperDropBounds.innerText = " "
            dummy2.innerText = " Demo Item "
            lowerDropBounds.innerText = " ^ Drop Here ^ "

            upperDropBounds.classList.add('draggable')

            dummy2.classList.add("draggable")
            dummy2.classList.add("sidebarItem")
            dummy2.draggable = true
            dummy2.addEventListener('dragstart', () => {//oooo we know this
                dummy2.classList.add('dragging')
                preciseItem = dummy2
            })
            dummy2.addEventListener('dragend', () => {
                dummy2.classList.remove('dragging')
            })

            var insideList= document.createElement("div")
            insideList.classList.add("container")
            insideList.id = "insideList"
            insideList.appendChild(upperDropBounds)
            insideList.appendChild(dummy2)

            insideList.style.width = "75%"
            containerPrep();
            newHier.appendChild(insideList)


            insideList.addEventListener('dragover', e => {//event listener for our interior list. IDK if it works help me
                e.preventDefault()
                insideList.appendChild(preciseItem)
            })


            newHier.addEventListener('dragstart', () => {//dragging listeners are important
            if(insideList.style.display=="none")
                preciseItem = newHier
                newHier.classList.add('dragging')
            })
            newHier.addEventListener('dragend', () => {
                newHier.classList.remove('dragging')
            })

            newHier.addEventListener("click", (event) =>{//fun stuff here. Listens for a click
                if(insideList.style.display=="none"){//if interiorList is hidden, show it and TURN OFF DRAG
                    insideList.style.display=""
                    insideList.parentElement.draggable=false //CANNOT DRAG AN OPEN LIST
                    console.log("OPEN")
                }
                else{
                    insideList.style.display="none" //IF SHOWING WE ROLL UP
                    insideList.parentElement.draggable=true //CAN DRAG CLOSED LIST
                    console.log("closed")
                }
            })

            insideList.style.display="none"
            mainSideBar.appendChild(newHier)//FINALLY ADD US TO SIDEBAR AND CAN WE PLEASE CHANGE THIS REFERENCE NAME
        }

            //Below all runs on start up, super important to know by heart

            //draggables should be renamed for clarity in the future OKAY???

            

        hoverButtonAdd(parent){
            var hiddenDiv = document.createElement("div")

            var trashCanIcon = document.createElement("i")
            trashCanIcon.classList.add("p-inline")
            trashCanIcon.classList.add("xButton")
            trashCanIcon.classList.add("fa-solid")
            trashCanIcon.classList.add("fa-trash-can")
            trashCanIcon.classList.add("iconPad")
            trashCanIcon.style.float = "right"
            
            var pencilIcon = document.createElement("i")
            pencilIcon.classList.add("p-inline")
            pencilIcon.classList.add("editButton")
            pencilIcon.classList.add("fa-solid")
            pencilIcon.classList.add("fa-pen-to-square")
            pencilIcon.classList.add("iconPad")
            pencilIcon.style.float = "right"

            hiddenDiv.classList.add("hoverItems")

            hiddenDiv.appendChild(trashCanIcon)
            hiddenDiv.appendChild(pencilIcon)
              
            parent.append(hiddenDiv)
            parent.querySelectorAll(".hoverItems").forEach(batch => {
                batch.style.display = "none"
            })
            parent.addEventListener('mouseover', () =>{
                if(editBool){
                parent.querySelectorAll(".hoverItems").forEach(batch => {
                    batch.style.display = ""
                })
                }
            })
            parent.addEventListener('mouseleave', () =>{
                if(editBool){
                parent.querySelectorAll(".hoverItems").forEach(batch => {
                    batch.style.display = "none"
                })
                }
            })
        }

        

        getDragAfterElement(container, y) {//handles which item is considered above and below when dragging,
        //y is the height of mouse, container is the items in question
            const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

            return draggableElements.reduce((closest, child) => {
                const box = child.getBoundingClientRect()
                const offset = y - box.top - box.height / 2 //tries to sense middle of box
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child }
                } else {
                    return closest
                }
            }, { offset: Number.NEGATIVE_INFINITY }).element
        }

        


	}
	customElements.define("com-cbeyondata-sidepanelb", Box);
})();
