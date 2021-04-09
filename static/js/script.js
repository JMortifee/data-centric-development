$(document).ready(function () {
    /*
    jQuery for MaterializeCSS initialization
*/
    $(".sidenav").sidenav({edge: "right"});

    // jquery for recipe creator

    let ingredient_count = 2

    let step_count = 2

    function add_ingredient(){


        $('.add_ingredient').on('click', function add_ingredient() {

            

            $('#ingredient' + ingredient_count).removeClass('hidden');
            if (ingredient_count !== 7){
                ingredient_count += 1
            }
            });

           
    }

    function remove_ingredient(){


        $('.remove_ingredient').on('click', function remove_ingredient() {

            

            $('#ingredient' + ingredient_count).addClass('hidden');
            if (ingredient_count !== 2){
                ingredient_count -= 1
            }
            
            });

           
    }

    function add_step(){


        $('.add_step').on('click', function add_step() {

            

            $('#step' + step_count).removeClass('hidden');
            if (step_count !== 7){
                step_count += 1
            }
            });

           
    }

    function remove_step(){


        $('.remove_step').on('click', function remove_step() {

            

            $('#step' + step_count).addClass('hidden');
            if (step_count !== 2){
                step_count -= 1
            }
            });

           
    }

    remove_ingredient();

    add_ingredient();

    remove_step();

    add_step();
});




