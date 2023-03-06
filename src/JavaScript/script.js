"use strict";

$( function () {
    let product = $( "#choice" );
    let name = $( "#contacts" );
    let phone = $( "#phone" );
    let submit = $( ".form__btn" );
    let loader = $( ".loader" );
    let form = $( ".order__info-form" );
    let formResult = $( ".order__info-message" );

    $( submit ).on( "click", () => {
        $( ".error_msg" ).css( "display", "none" );
        product.css( "border-color", "#821328" ).css( "margin-bottom", "25px" );
        name.css( "border-color", "#821328" );
        phone.css( "border-color", "#821328" );
        if ( !product.val() ) {
            product.css( "border-color", "red" ).css( "margin-bottom", "15px" );
            product.next().show();
        }
        if ( !name.val() ) {
            name.css( "border-color", "red" ).css( "margin-bottom", "15px" );
            name.next().show();
        }
        if ( !phone.val() ) {
            phone.css( "border-color", "red" ).css( "margin-bottom", "15px" );
            phone.next().show();
        }
        else if ( product.val() && name.val() && phone.val() ) {
            loader.css( "display", "flex" );
            $.ajax( {
                method: "POST",
                url: "https://testologia.site/checkout",
                data: { product: product.val(), name: name.val(), phone: phone.val() }
            } )
                .done( function ( msg ) {
                    if ( msg.success === 0 ) {
                        alert( "Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ" );
                        loader.hide();
                    }
                    else {
                        form.css( "display", "none" );
                        formResult.css( "display", "flex" );
                        loader.hide();
                        setTimeout( function () {
                            location.reload();
                        }, 5000 );
                    }
                } );
        }


    } );


} );

const noScroll = document.querySelector( "body" );

document.getElementById( "menu-burger" ).onclick = function () {
    document.getElementById( "menu-ul" ).classList.add( "menu__open" );
    noScroll.style.overflow = "hidden";
};

document.querySelectorAll( "#menu-ul *" ).forEach( ( item ) => {
    item.onclick = () => {
        document.getElementById( "menu-ul" ).classList.remove( "menu__open" );
        noScroll.style.overflow = "auto";
    };
} );