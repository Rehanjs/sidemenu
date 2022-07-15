// Hiding The Side Bar
document.getElementById("Catagori_Details_box").style.left = "-101%";
// Ends
/*=========================================================
 Hide Catagori Details By Clicking On the Arrow Button 
=========================================================*/
Hide_cata_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");
    cata_box.style.transition = ".7s ease";
    cata_box.style.left = "-101%";
    Side_nav_btn.style.display = "flex";
    top_part.style.transition='.4s ease'
    top_part.style.opacity='1'
    top_part.style.visibility='visible';
    setTimeout(() => {
        cata_cont.style.zIndex = "-1";
    }, 700);
};

// Variable Of Options
let optionOne = document.getElementById("cat_option1");
let optiontwo = document.getElementById("cat_option2");
let optionthree = document.getElementById("cat_option3");
let optionfour = document.getElementById("cat_option4");
let optionfive = document.getElementById("cat_option5");
let optionsix = document.getElementById("cat_option6");
let optionseven = document.getElementById("cat_option7");
let optioneight = document.getElementById("cat_option8");
let optionnine = document.getElementById("cat_option9");
let optionten = document.getElementById("cat_option10");
/*================================================================================
                            Show Computer Category More Options
==================================================================================*/
show_computers_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");

    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Processors"; // 1
    optiontwo.innerHTML = "Hard Drives"; // 2
    optionthree.innerHTML = "Casings"; // 3
    optionfour.innerHTML = "Keyboard & Mouse"; // 4
    optionfive.innerHTML = "Leds & Lcds"; //5
    optionsix.innerHTML = "Power Cables"; // 6
    optionseven.innerHTML = "Speakers"; // 7
    optioneight.innerHTML = "Headphones"; // 8
    optionnine.innerHTML = "Revolving Chairs"; // 9
    optionten.innerHTML = "Graphic Cards"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".7s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "1";

        top_part.style.opacity='0'
        top_part.style.visibility='hidden';
        Side_nav_btn.style.display = "none";
    }
};

/*================================================================================
                            Show Grocery Category More Options
==================================================================================*/
show_grocery_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");

    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Soaps & Washing"; // 1
    optiontwo.innerHTML = "Vegetables"; // 2
    optionthree.innerHTML = "Cooking Oils"; // 3
    optionfour.innerHTML = "Spoons & Dishes"; // 4
    optionfive.innerHTML = "Jugs & Glasses"; //5
    optionsix.innerHTML = "Water Bottles"; // 6
    optionseven.innerHTML = "Juicer & Blender"; // 7
    optioneight.innerHTML = "Pots"; // 8
    optionnine.innerHTML = "Meat"; // 9
    optionten.innerHTML = "Rice & Beans"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".7s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";

        top_part.style.opacity='0'
        top_part.style.visibility='hidden';
        Side_nav_btn.style.display = "none";
    }
};
/*================================================================================
                            Show Animals Category More Options
==================================================================================*/
show_animal_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");

    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Hens"; // 1
    optiontwo.innerHTML = "Bulls"; // 2
    optionthree.innerHTML = "Cows"; // 3
    optionfour.innerHTML = "Gots"; // 4
    optionfive.innerHTML = "Sheeps"; //5
    optionsix.innerHTML = "Camels"; // 6
    optionseven.innerHTML = "Birds"; // 7
    optioneight.innerHTML = "Fishes"; // 8
    optionnine.innerHTML = "Snakes"; // 9
    optionten.innerHTML = "Dogs & Cats"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".7s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";

        top_part.style.opacity='1'
          top_part.style.opacity='0'
        top_part.style.visibility='hidden';
        Side_nav_btn.style.display = "none";
    }
};
/*================================================================================
                            Show Furniture Category More Options
==================================================================================*/
show_furniture_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");

    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Dining Table"; // 1
    optiontwo.innerHTML = "Wardrobe"; // 2
    optionthree.innerHTML = "Bed"; // 3
    optionfour.innerHTML = "Chairs"; // 4
    optionfive.innerHTML = "Study Table"; //5
    optionsix.innerHTML = "Tea Trolly"; // 6
    optionseven.innerHTML = "Sofa"; // 7
    optioneight.innerHTML = "Dressing Table"; // 8
    optionnine.innerHTML = "Cabinets"; // 9
    optionten.innerHTML = "Shoecase"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".7s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
          top_part.style.opacity='0'
        top_part.style.visibility='hidden';
        Side_nav_btn.style.display = "none";
    }
};
/*================================================================================
                            Show Software Category More Options
==================================================================================*/
show_Softwares_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Adobe Illustrator"; // 1
    optiontwo.innerHTML = "Adobe Photoshop"; // 2
    optionthree.innerHTML = "Premier Pro"; // 3
    optionfour.innerHTML = "Canva"; // 4
    optionfive.innerHTML = "After effects"; //5
    optionsix.innerHTML = "Microsoft Office"; // 6
    optionseven.innerHTML = "Wondershare Filmora"; // 7
    optioneight.innerHTML = "Android Studio"; // 8
    optionnine.innerHTML = "Obs Studio"; // 9
    optionten.innerHTML = "Lightroom"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".7s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";

         top_part.style.opacity='1'
          top_part.style.opacity='0'
        top_part.style.visibility='hidden';;
        Side_nav_btn.style.display = "none";
    }
};
/*================================================================================
                            Show Toys Category More Options
==================================================================================*/
show_Toys_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Helicopter"; // 1
    optiontwo.innerHTML = "Cars"; // 2
    optionthree.innerHTML = "Alphabets Keyboard"; // 3
    optionfour.innerHTML = "Trains"; // 4
    optionfive.innerHTML = "Talking Cat"; //5
    optionsix.innerHTML = "Cooking Kit"; // 6
    optionseven.innerHTML = "Dolls"; // 7
    optioneight.innerHTML = "Guns & Military"; // 8
    optionnine.innerHTML = "Animals & Forest"; // 9
    optionten.innerHTML = "Painting & Sketching"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".7s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
          top_part.style.opacity='0'
        top_part.style.visibility='hidden';
        Side_nav_btn.style.display = "none";
    }
};
/*================================================================================
                            Show Home Appliances Category More Options
==================================================================================*/
show_Home_appliances_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");
    // Options Values For Category Details
    optionOne.innerHTML = "Washing Machines"; // 1
    optiontwo.innerHTML = "Microwave Ovens"; // 2
    optionthree.innerHTML = "Refregerator"; // 3
    optionfour.innerHTML = "Fridge"; // 4
    optionfive.innerHTML = "Juicer"; //5
    optionsix.innerHTML = "Stove"; // 6
    optionseven.innerHTML = "Led"; // 7
    optioneight.innerHTML = "Room Cooler"; // 8
    optionnine.innerHTML = "Water Dispensor"; // 9
    optionten.innerHTML = "Vacuum Cleaner"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".7s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
          top_part.style.opacity='0'
        top_part.style.visibility='hidden';
        Side_nav_btn.style.display = "none";
    }
};
/*================================================================================
                            Show Home Decoration Category More Options
==================================================================================*/
show_Home_Decoration_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Paintings"; // 1
    optiontwo.innerHTML = "Lamps & Lights"; // 2
    optionthree.innerHTML = "Wallpapers"; // 3
    optionfour.innerHTML = "Plants & Flowers"; // 4
    optionfive.innerHTML = "God Names & Ayat"; //5
    optionsix.innerHTML = "Super Heros & Toys"; // 6
    optionseven.innerHTML = "Swords"; // 7
    optioneight.innerHTML = "Birthday"; // 8
    optionnine.innerHTML = "Wedding"; // 9
    optionten.innerHTML = "Mirrors"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".7s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
          top_part.style.opacity='0'
        top_part.style.visibility='hidden';
        Side_nav_btn.style.display = "none";
    }
};
/*================================================================================
                            Show Gents Garments Category More Options
==================================================================================*/
show_Gents_Garments_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Hoodies & Jackets"; // 1
    optiontwo.innerHTML = "Pants"; // 2
    optionthree.innerHTML = "T-Shirts & Shirts"; // 3
    optionfour.innerHTML = "Shirwani"; // 4
    optionfive.innerHTML = "Kurta & Pajama"; //5
    optionsix.innerHTML = "Shalwar & Kameez"; // 6
    optionseven.innerHTML = "Coats"; // 7
    optioneight.innerHTML = "Belt & Tie"; // 8
    optionnine.innerHTML = "Vas Coat"; // 9
    optionten.innerHTML = "3 Piece Suit"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".7s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
          top_part.style.opacity='0'
        top_part.style.visibility='hidden';
        Side_nav_btn.style.display = "none";
    }
};
/*================================================================================
                            Show Ladies Garments Category More Options
==================================================================================*/
show_Ladies_Garments_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Hoodies & Jackets"; // 1
    optiontwo.innerHTML = "Pants"; // 2
    optionthree.innerHTML = "T-Shirts & Shirts"; // 3
    optionfour.innerHTML = "Lehnga"; // 4
    optionfive.innerHTML = "Kurti & Pajama"; //5
    optionsix.innerHTML = "Shalwar & Kameez"; // 6
    optionseven.innerHTML = "Maxi"; // 7
    optioneight.innerHTML = "Frock"; // 8
    optionnine.innerHTML = "Shalls"; // 9
    optionten.innerHTML = "Burkha"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".7s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
          top_part.style.opacity='0'
        top_part.style.visibility='hidden';
        Side_nav_btn.style.display = "none";
    }
};
/*================================================================================
                            Show Vehicle Parts Garments Category More Options
==================================================================================*/
show_Vehicle_Parts_Garments_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Tires"; // 1
    optiontwo.innerHTML = "Seats"; // 2
    optionthree.innerHTML = "Glass"; // 3
    optionfour.innerHTML = "Battery"; // 4
    optionfive.innerHTML = "Shining Spray"; //5
    optionsix.innerHTML = "Locks"; // 6
    optionseven.innerHTML = "Horn"; // 7
    optioneight.innerHTML = "Steering"; // 8
    optionnine.innerHTML = "Bumper"; // 9
    optionten.innerHTML = "Decoration"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".7s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
          top_part.style.opacity='0'
        top_part.style.visibility='hidden';
        Side_nav_btn.style.display = "none";
    }
};
/*================================================================================
                            Show Property Garments Category More Options
==================================================================================*/
show_Property_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "5 Marla Houses"; // 1
    optiontwo.innerHTML = "10 Marla Houses"; // 2
    optionthree.innerHTML = "Shops"; // 3
    optionfour.innerHTML = "Medical Stores"; // 4
    optionfive.innerHTML = "Houses For Rent"; //5
    optionsix.innerHTML = "Plots"; // 6
    optionseven.innerHTML = "Shops For Rent"; // 7
    optioneight.innerHTML = "Shops In Malls"; // 8
    optionnine.innerHTML = "Hotels"; // 9
    optionten.innerHTML = "Restaurent For Sale"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".7s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
          top_part.style.opacity='0'
        top_part.style.visibility='hidden';
        Side_nav_btn.style.display = "none";
    }
};
/*================================================================================
                            Show Vehicle Parts Garments Category More Options
==================================================================================*/
show_Vehicle_Parts_Garments_catagori_details = () => {
    let cata_box = document.getElementById("Catagori_Details_box");
    let cata_cont = document.getElementById("cata_gori_container");
    let top_part = document.getElementById("Side_catagori_logo");
    let Side_nav_btn = document.getElementById("Side_Nav_btn");

    optionOne.innerHTML = "Tires"; // 1
    optiontwo.innerHTML = "Seats"; // 2
    optionthree.innerHTML = "Glass"; // 3
    optionfour.innerHTML = "Battery"; // 4
    optionfive.innerHTML = "Shining Spray"; //5
    optionsix.innerHTML = "Locks"; // 6
    optionseven.innerHTML = "Horn"; // 7
    optioneight.innerHTML = "Steering"; // 8
    optionnine.innerHTML = "Bumper"; // 9
    optionten.innerHTML = "Decoration"; //10
    if (cata_box.style.left == "-101%") {
        cata_box.style.transition = ".7s ease";
        cata_box.style.left = "0%";
        cata_cont.style.zIndex = "2";
          top_part.style.opacity='0'
        top_part.style.visibility='hidden';
        Side_nav_btn.style.display = "none";
    }
};

/*================================================================================
                Show & Hide The Side Menu By clicking Three Lines Side button
==================================================================================*/
document.getElementById("Side_menu_background").style.left = "-101%";
ShowHide = () => {
    let Side_nav_btn = document.getElementById("Side_Nav_btn");
    let Side_menu = document.getElementById("Side_menu_background");
    let cross_nav_btn = document.getElementById("Cross_Nav_btn");
    // Three Details Box Variable 
    let Details_container = document.getElementById("Dots_Details_container");
    if (Side_menu.style.left == "-101%") {
        Side_menu.style.left = "0%";
        Side_menu.style.transition = ".3s ease-in-out";
        Side_nav_btn.style.opacity = "0";
        Side_nav_btn.style.transition = ".3s ease";
        cross_nav_btn.style.opacity = "1";
    } else {
        Side_menu.style.left = "-101%";
        Side_nav_btn.style.opacity = "1";
        Side_nav_btn.style.transition = "1.3s ease";
        // Close The Three Dots Details Box (if it is opened) when closing the side menu 
        Details_container.style.transition='.4s ease-in-out'
        Details_container.style.opacity='0';
        Details_container.style.transform='scale(.7)';
        setTimeout(() => {
            Details_container.style.display='none';
            Details_container.style.top='20px';
        }, 200);
    }
};

/*===================================================================================================
                            To Show More Main Categories Categories | "See More" Button Logic Here
===================================================================================================*/
//    Making Condition
document.getElementById("See_more_cate").innerHTML = "See More";

Show_more_categories = () => {
    let Show_more_btn = document.getElementById("See_more_cate");
    let Side_bg = document.getElementById("Side_bar_back_ground");
    let Seeless_arrow = document.getElementById("See_less_arrow");
    let cate1 = document.getElementById("Ex_Category1");
    let cate2 = document.getElementById("Ex_Category2");
    let cate3 = document.getElementById("Ex_Category3");
    let cate4 = document.getElementById("Ex_Category4");
    let cate5 = document.getElementById("Ex_Category5");
    let cate6 = document.getElementById("Ex_Category6");
    let Six_cate_array = [cate1, cate2, cate3, cate4, cate5, cate6];

    if (Show_more_btn.innerHTML == "See More") {
        for (element of Six_cate_array) {
            element.style.display = "flex";
            element.style.opacity = "1";
            Side_bg.style.height = "130vh";
            Show_more_btn.innerHTML = "See Less";
            Seeless_arrow.style.transform = "rotate(270deg)";
            Seeless_arrow.style.marginTop = "10px";
        }
    } else {
        for (element of Six_cate_array) {
            element.style.display = "none";
            element.style.opacity = "0";
            Side_bg.style.height = "100vh";
            Show_more_btn.innerHTML = "See More";
            Seeless_arrow.style.transform = "rotate(90deg)";
            Seeless_arrow.style.marginTop = "0px";
        }
    }
};

                            // Three Dots Functionality here 
 document.getElementById("Dots_Details_container").style.opacity='0'
Show_dots_details = ()=>{
    let Details_container = document.getElementById("Dots_Details_container");
    
    if(Details_container.style.opacity=='0'){
        Details_container.style.display='flex';
        Details_container.style.top='70px';
        setTimeout(() => {
            Details_container.style.transition='.4s ease-in-out'
            Details_container.style.opacity='1';
            Details_container.style.transform='scale(1.2)';
        }, 100);
    console.log("funtion is runing");
}
else{
    Details_container.style.transition='.4s ease-in-out'
    Details_container.style.opacity='0';
    Details_container.style.transform='scale(.3)';
    setTimeout(() => {
        Details_container.style.top='20px';
        Details_container.style.display='none';
    }, 200);
}
}
