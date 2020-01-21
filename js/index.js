
function lookup(){

    let keyword = $('input').val();

    $('input').val("");

    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`;
    
    $.ajax({
        url : url,
        method : "GET",
        dataType : "json",
        success : function( responseJSON ){
            console.log(responseJSON);
            displayResults( responseJSON );
        },
        error : function( err ){
            console.log( err );
        }
    });
}

function displayResults( responseJSON ){
    let results = $('.results').empty();

    for(i = 0; i < responseJSON.drinks.length; i++){

        results.append(`
        <p>
            <div class="sub">Name:</div>
            <div>${responseJSON.drinks[i].strDrink}</div>
            <div class="sub">Image:</div>
            <div><img class="dimension" src="${responseJSON.drinks[i].strDrinkThumb}" /></div>
            <div class="sub">Ingredients:</div>
            <div>${responseJSON.drinks[i].strIngredient1}</div>
            <div>${responseJSON.drinks[i].strMeasure1}</div>
            <div>${responseJSON.drinks[i].strIngredient2}</div>
            <div>${responseJSON.drinks[i].strMeasure2}</div>
            <div>${responseJSON.drinks[i].strIngredient3}</div>
            <div>${responseJSON.drinks[i].strMeasure3}</div>
        </p>
        `);
    }
}

function watchBtn(){
  
    let btn = $( '#keyword' );
  
    $(btn).on('click', function(e){
        
        e.preventDefault();
  
        lookup();
    });
}

function init(){
    watchBtn();
}

init();