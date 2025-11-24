let cartPrices = [];
//let cancelPrices=[];

//function that loads JSON tree category
const loadCategories=()=>{
    
    fetch("https://openapi.programming-hero.com/api/categories") //promise of response
     .then((res) =>res.json())
     .then((json)=>{

         //const clicked=document.getElementById(`loadActive-${tree.id}`);
         //console.log(clicked);
    
         //clicked.classList.add("color");
         displayTrees(json.categories);

        //  const clicked=document.getElementById(`loadActive-${tree.id}`);
        //  clicked.classList.add("color");
     });
      

};


 const loadActive = (id) => {
     document.querySelectorAll("[id^='loadActive-']")
         .forEach(btn => btn.classList.remove("color"));

     const clicked = document.getElementById(`loadActive-${id}`);
     if (clicked) clicked.classList.add("color");
 };


    
//function that loads JSON tree (mango tree, Rain tree) inside the tree category    
const loadLevelTree=(id)=>{
      manageSpinner(true);
      //console.log(id);
      const url=`https://openapi.programming-hero.com/api/category/${id}`;
      fetch(url)
        .then(res=>res.json())
        //.then(data=>displayLevelTree(data.plants));
        .then((data)=>{
            //const clicked=document.getElementById(`loadActive(${id})`);
            //console.log(clicked);
            //clicked.classList.add("color");
            displayLevelTree(data.plants);
        });
        
    
};


//function that loads JSON tree (mango tree, Rain tree) inside the tree category to show for modal card
const loadTreeDetail=async (id)=>{

    const url=`https://openapi.programming-hero.com/api/plant/${id}`;
    const res=await fetch(url);
    const details=await res.json();
    displayTreeDetails(details.plants);
};


//function that loads JSON tree for cart section    
 const loadCart=(id)=>{
      //console.log(id);
       const url=`https://openapi.programming-hero.com/api/plant/${id}`;
       fetch(url)
         .then(res=>res.json())
         .then(data=>displayCart([data.plants]));
};










      
    
    
        const displayCart=(trees)=>{

        const treeContainer=document.getElementById("id-cart");
    
    
        // treeContainer.innerHTML="";
           trees.forEach(tree => {
         //    console.log(tree);
              alert(`${tree.name} has been added to your cart`);
              document.getElementById("id-total").classList.remove("hidden");

            //  <i class="fa-solid fa-ban cursor-pointer"></i>
            //onclick="loadTotal(${tree.id});
        
            const cardTree=document.createElement("div");
            cardTree.innerHTML=`

              <div class="flex flex-row-reverse justify-between items-center 
                         w-full h-[90px] bg-[#F0FDF4] mx-auto rounded-3xl p-5 border-2 border-green-400">

                
                <button id="id-cancel"  onclick="loadCancel(${tree.id})" data-price="${tree.price}" class="btn-cancel">X</button>

                 <div class="flex flex-col gap-2">
                     <h1>${tree.name}</h1>

                     <p class="flex items-center gap-2">
                         ${tree.price}
                         <span class="flex items-center gap-1">
                             <i class="fa-solid fa-xmark"></i>
                             <span class="id-count">1</span>
                         </span>
                     </p>

                
                 </div>

            </div>
                

             `;
             treeContainer.append(cardTree);

             // Add event listener for cancel button
            // cancel event
            cardTree.querySelector(".btn-cancel").addEventListener("click", () => {
            
          
            cardTree.remove();
            });

         // Recalculate total
        //displayTotal();
            
         });




  };




























//w-auto h-auto object-contain


//function that makes the div dynamic for modal
const displayTreeDetails=(trees)=>{
    console.log(trees);
    const detailBox=document.getElementById("details-container");
    detailBox.innerHTML=`<h1 class="font-bold text-center text-3xl mb-10">${trees.name}</h1>
    <img class="w-auto mt-2 h-[400px] mx-auto md:w-full max-w-lg p-0 overflow-hidden object-cover mb-3 md:mx-auto rounded-3xl" src="${trees.image}" alt="">
    <h1 class="text-md mb-1 font-semibold md:text-3xl md:mb-3 p-4">Category: ${trees.category}</h1>
    <p class="text-sm mb-1 font-semibold md:text-2xl md:mb-2 px-4">Price: ${trees.price}</p>
    <p class="text-sm mb-1 font-semibold md:text-2xl md:mb-2 p-4">Description: ${trees.description}</p>`;
    document.getElementById("my_modal_4").showModal();

};





//function that makes the div dynamic for tree section
//this section is responsible for showing the card section for Mango tree guava tree and jackfruit tree
 const displayLevelTree=(trees)=>{
       
    // 1.get the container & empty the container
        const treeContainer=document.getElementById("id-all-trees-container");
        treeContainer.innerHTML="";


        trees.forEach(tree => {
            console.log(tree);

            const cardTree=document.createElement("div");
            cardTree.innerHTML=`
                <div class="bg-white rounded-xl shadow-lg py-10 px-10">
                   <img class="w-[298px] h-[178px] object-cover rounded-xl" src="${tree.image}" alt="">

                   <h1 class="font-bold mb-5 mt-2">${tree.name}</h1>
                   <p>${tree.description}</p>
                   <div class="flex justify-between mt-4 mb-3">
                         <button onclick="loadTreeDetail(${tree.id})" class="text-[#15803D] font-semibold h-[28px] w-[150px] rounded-3xl bg-[#dcfce7]">${tree.category}</button>
                         <h1 class="font-bold font-['Hind_Siliguri']">৳ ${tree.price}</h1>

                   </div>

                   <div class="flex text-center justify-center items-center">

                    
                    <button id="id-Add-to-Cart" onclick="loadCart(${tree.id}); loadTotal(${tree.id});"  class="font-bold text-white h-[43px] w-[311px] bg-[#15803D] rounded-3xl">Add to Cart</button>


                   </div>
                   
                 

               </div>



            `;
            treeContainer.append(cardTree);
            
        });

        manageSpinner(false);




 };



//function that makes the div dynamic for category section
//this section is responsible for showing the category section for fruit tree ,shade tree or bamboo tree

    const displayTrees=(trees)=>{
        // 1.get the container & empty the container
        const levelContainer=document.getElementById("id-all-trees");
        levelContainer.innerHTML="";
        
        
        
        //<button class="text-white bg-[#15803d] w-[250px] h-[35px] text-start rounded-md">${tree.category}</button>
        
        
        
        
        // 2.get into every lessons
        for(let tree of trees){

        
                  //3. create element
                  const btnDiv=document.createElement("div");
                  btnDiv.innerHTML=`

                  <button id="loadActive-${tree.id}" onclick="loadLevelTree(${tree.id}); loadActive(${tree.id});" class="text-black border-green-500 border-2 bg-[#F0FDF4] w-[250px] h-[50px] rounded-lg shadow-lg hover:bg-[#15803d] hover:text-white active:bg-[#15803d] active:text-white">${tree.category_name}</button>
                  


                  `;
                  //4.append into container
                  levelContainer.append(btnDiv);
        }          

    };



loadCategories();












const loadTotal = (id) => {
   // console.log(id);
    const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  //  console.log(url);
    
     fetch(url)
       .then(res => res.json())
       .then(data => displayTotal([data.plants.price])); // send single tree object
    
};



   

// const displayTotal = (trees) => {

//     const totalContainer=document.getElementById("id-total-number");

//     //let prices = [];

//       trees.forEach(tree => {
//           cartPrices.push(Number(tree));
//       });

//     const total = cartPrices.reduce((sum, p) => sum + p, 0);
    
    
//    // console.log("Total:", total);

//     const card=document.createElement("div");
//     card.innerHTML=`<p>${total}</p>`;
//     //totalContainer.append(card);
//     totalContainer.innerText = total;

//    // updateTotal();

// };


const displayTotal = (trees) => {
    trees.forEach(tree => {
        cartPrices.push(Number(tree));
    });

    updateTotal();
};








// manage spinner
const manageSpinner=(status)=>{

    if(status==true){

        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("id-all-trees-container").classList.add("hidden");

    }
    
    else{
         
        document.getElementById("id-all-trees-container").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden");

    }

};










  //a function that disappears th div when clicked
   const loadCancel=(id)=>{
      //console.log(id);
       const url=`https://openapi.programming-hero.com/api/plant/${id}`;
       fetch(url)
         .then(res=>res.json())
         .then(data=>displayCancel(data.plants.price));
    };


//     const displayCancel = (plants) => {

//         console.log(plants);


//          //const totalContainer=document.getElementById("id-total-number");

//     //let prices = [];

//       plants.forEach(plant => {
//           cancelPrices.push(Number(plant));
//       });

//     const cancelTotal = cancelPrices.reduce((sum, p) => sum + p, 0);

//     console.log(cancelTotal);
    

// };


const displayCancel = (price) => {

    price =Number(price);
    //console.log(price);

   // console.log(price);

    // find price and remove ONE instance
    const index = cartPrices.indexOf(price);
    if (index !== -1) {
        cartPrices.splice(index, 1);
    }

    //console.log(cartPrices[0]);

    updateTotal();
};


const updateTotal = () => {
    const totalContainer = document.getElementById("id-total-number");

    const total = cartPrices.reduce((sum, p) => sum + p, 0);

    console.log(total);

    totalContainer.innerText = total;


    //  const card=document.createElement("div");
    //  card.innerHTML=`<p>${total}</p>`;
    //  totalContainer.append(card);
    //   totalContainer.innerText = total;


};




    


    
         


